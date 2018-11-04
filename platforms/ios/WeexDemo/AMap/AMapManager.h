//
//  AMapManager.h
//
//
//

#import <Foundation/Foundation.h>
#import <AMapLocationKit/AMapLocationKit.h>

@interface AMapManager : NSObject<AMapLocationManagerDelegate>

+ (instancetype) start;

@property (nonatomic, strong) AMapLocationManager *locationManager;
@property (nonatomic, copy) AMapLocatingCompletionBlock completionBlock;

@end
