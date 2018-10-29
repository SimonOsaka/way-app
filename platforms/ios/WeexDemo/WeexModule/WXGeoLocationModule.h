//
//  WeexGeoLocationModule.h
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WeexSDK.h>
#import <AMapLocationKit/AMapLocationKit.h>

@interface WXGeoLocationModule : NSObject<WXModuleProtocol>

@property (nonatomic, strong) AMapLocationManager *locationManager;

@end
