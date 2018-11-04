//
//  GlobalDict.m
//
//
//
#import "AMapManager.h"
#import "GlobalDict.h"
#import <AMapFoundationKit/AMapFoundationKit.h>
#import <AMapLocationKit/AMapLocationKit.h>

#define DefaultLocationTimeout 10
#define DefaultReGeocodeTimeout 5

@implementation AMapManager

#pragma mark - LifeCycle
+(instancetype)start {
    static dispatch_once_t onceToken;
    static AMapManager *instance;
    dispatch_once(&onceToken, ^{
        instance = [[AMapManager alloc] initManager];
    });
    return instance;
}

- (instancetype) initManager {
    self = [super init];
    if (self) {
        [self initCompleteBlock];
        [self configLocationManager];
        //进行单次定位请求
        [self.locationManager requestLocationWithReGeocode:NO completionBlock:self.completionBlock];
    }
    return self;
}

#pragma mark - initCompleteBlock
- (void)initCompleteBlock
{
    self.completionBlock = ^(CLLocation *location, AMapLocationReGeocode *regeocode, NSError *error)
    {
        if (error != nil && error.code == AMapLocationErrorLocateFailed)
        {
            //定位错误：此时location和regeocode没有返回值，不进行annotation的添加
            NSLog(@"定位错误:{%ld - %@};", (long)error.code, error.localizedDescription);
            return;
        }
        else if (error != nil
                 && (error.code == AMapLocationErrorReGeocodeFailed
                     || error.code == AMapLocationErrorTimeOut
                     || error.code == AMapLocationErrorCannotFindHost
                     || error.code == AMapLocationErrorBadURL
                     || error.code == AMapLocationErrorNotConnectedToInternet
                     || error.code == AMapLocationErrorCannotConnectToHost))
        {
            //逆地理错误：在带逆地理的单次定位中，逆地理过程可能发生错误，此时location有返回值，regeocode无返回值，进行annotation的添加
            NSLog(@"逆地理错误:{%ld - %@};", (long)error.code, error.localizedDescription);
        }
        else if (error != nil && error.code == AMapLocationErrorRiskOfFakeLocation)
        {
            //存在虚拟定位的风险：此时location和regeocode没有返回值，不进行annotation的添加
            NSLog(@"存在虚拟定位的风险:{%ld - %@};", (long)error.code, error.localizedDescription);
            return;
        }
        else
        {
            //没有错误：location有返回值，regeocode是否有返回值取决于是否进行逆地理操作，进行annotation的添加
        }
        
        //修改label显示内容
        NSString *longitude = [NSString stringWithFormat:@"%f", location.coordinate.longitude];
        NSString *latitude = [NSString stringWithFormat:@"%f", location.coordinate.latitude];
        [[GlobalDict shared] addDict:longitude key:@"longitude"];
        [[GlobalDict shared] addDict:latitude key:@"latitude"];
    };
}

- (void)configLocationManager
{
    self.locationManager = [[AMapLocationManager alloc] init];
    
    [self.locationManager setDelegate: self];
    
    //设置期望定位精度
    [self.locationManager setDesiredAccuracy:kCLLocationAccuracyHundredMeters];
    
    //设置不允许系统暂停定位
    [self.locationManager setPausesLocationUpdatesAutomatically:NO];
    
    //设置不允许在后台定位
    [self.locationManager setAllowsBackgroundLocationUpdates:NO];
    
    //设置定位超时时间
    [self.locationManager setLocationTimeout:DefaultLocationTimeout];
    
    //设置逆地理超时时间
    [self.locationManager setReGeocodeTimeout:DefaultReGeocodeTimeout];
}
@end
