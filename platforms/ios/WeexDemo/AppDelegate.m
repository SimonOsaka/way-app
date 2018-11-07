/**
 * Created by Weex.
 * Copyright (c) 2016, Alibaba, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache Licence 2.0.
 * For the full copyright and license information,please view the LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"
#import "DemoDefine.h"
#import <AVFoundation/AVFoundation.h>
#import <AMapFoundationKit/AMapFoundationKit.h>
#import "AFNetworking.h"
#import "WXApiManager.h"
#import "GlobalDict.h"
#import "AMap/AMapManager.h"
#import "WeexConfig/WeexSDKManager.h"

// 引入 JPush 功能所需头文件
#import "JPUSHService.h"
// iOS10 注册 APNs 所需头文件
#ifdef NSFoundationVersionNumber_iOS_9_x_Max
#import <UserNotifications/UserNotifications.h>
#endif

@interface AppDelegate ()<JPUSHRegisterDelegate>
@end

@implementation AppDelegate

#pragma mark
#pragma mark application

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
    self.window.backgroundColor = [UIColor whiteColor];
    
    [WeexSDKManager setup];
    
    [self.window makeKeyAndVisible];
    
    // Override point for customization after application launch.
    [self startSplashScreen];
    
    [AMapServices sharedServices].apiKey = @"db0c9dfe7249d031356db49b23cc944a";
    [AMapManager start];
    
    [[AFNetworkReachabilityManager sharedManager] startMonitoring];
    
    [WXApi registerApp:@"wxe49647d07bf7a3b0"];
    
    //Required
    //notice: 3.0.0 及以后版本注册可以这样写，也可以继续用之前的注册方式
    JPUSHRegisterEntity * entity = [[JPUSHRegisterEntity alloc] init];
    if (@available(iOS 12.0, *)) {
        entity.types = JPAuthorizationOptionAlert|JPAuthorizationOptionBadge|JPAuthorizationOptionSound|JPAuthorizationOptionProvidesAppNotificationSettings;
    } else {
        // Fallback on earlier versions
        entity.types = JPAuthorizationOptionAlert|JPAuthorizationOptionBadge|JPAuthorizationOptionSound;
    }
    if ([[UIDevice currentDevice].systemVersion floatValue] >= 8.0) {
        // 可以添加自定义 categories
        // NSSet<UNNotificationCategory *> *categories for iOS10 or later
        // NSSet<UIUserNotificationCategory *> *categories for iOS8 and iOS9
    }
    [JPUSHService registerForRemoteNotificationConfig:entity delegate:self];
    
    // Required
    // init Push
    // notice: 2.1.5 版本的 SDK 新增的注册方法，改成可上报 IDFA，如果没有使用 IDFA 直接传 nil
    // 如需继续使用 pushConfig.plist 文件声明 appKey 等配置内容，请依旧使用 [JPUSHService setupWithOption:launchOptions] 方式初始化。
    [JPUSHService setupWithOption:launchOptions appKey:@"322f4fe6d107907c07775867"
                          channel:@"jicu_ios"
                 apsForProduction:NO
            ];
#if TARGET_IPHONE_SIMULATOR
    [[GlobalDict shared] setDict:@"simulator_device_token" key:@"deviceToken"];
    [[GlobalDict shared] setDict:@"simulator_jpushRegId" key:@"jpushRegId"];
    [[GlobalDict shared] setDict:@"36.489342" key:@"latitude"];
    [[GlobalDict shared] setDict:@"116.938920" key:@"longitude"];
#endif
    
    NSLog(@"完成启动");
    return YES;
}

#pragma mark 
#pragma mark animation when startup

- (void)startSplashScreen
{
    UIView* splashView = [[UIView alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    splashView.backgroundColor = WEEX_COLOR;
    
    UIImageView *iconImageView = [UIImageView new];
    UIImage *icon = [UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:@"weex-icon" ofType:@"png"]];
    if ([icon respondsToSelector:@selector(imageWithRenderingMode:)]) {
        iconImageView.image = [icon imageWithRenderingMode:UIImageRenderingModeAlwaysTemplate];
        iconImageView.tintColor = [UIColor whiteColor];
    } else {
        iconImageView.image = icon;
    }
    iconImageView.frame = CGRectMake(0, 0, 180, 180);
    iconImageView.contentMode = UIViewContentModeScaleAspectFit;
    iconImageView.center = splashView.center;
    [splashView addSubview:iconImageView];
    
    [self.window addSubview:splashView];
    
    float animationDuration = 1.4;
    CGFloat shrinkDuration = animationDuration * 0.3;
//    CGFloat growDuration = animationDuration * 0.7;
//
//    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7.0) {
        [UIView animateWithDuration:shrinkDuration delay:1.0 usingSpringWithDamping:0.7f initialSpringVelocity:10 options:UIViewAnimationOptionCurveEaseInOut animations:^{
            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(1.25, 1.25);
            iconImageView.transform = scaleTransform;
        } completion:^(BOOL finished) {
//            [UIView animateWithDuration:growDuration animations:^{
//                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
//                iconImageView.transform = scaleTransform;
//                splashView.alpha = 0;
//            } completion:^(BOOL finished) {
                [splashView removeFromSuperview];
//            }];
        }];
//    } else {
//        [UIView animateWithDuration:shrinkDuration delay:1.0 options:0 animations:^{
//            CGAffineTransform scaleTransform = CGAffineTransformMakeScale(0.75, 0.75);
//            iconImageView.transform = scaleTransform;
//        } completion:^(BOOL finished) {
//            [UIView animateWithDuration:growDuration animations:^{
//                CGAffineTransform scaleTransform = CGAffineTransformMakeScale(20, 20);
//                iconImageView.transform = scaleTransform;
//                splashView.alpha = 0;
//            } completion:^(BOOL finished) {
//                [splashView removeFromSuperview];
//            }];
//        }];
//    }
}

- (BOOL) application:(UIApplication *)application handleOpenURL:(NSURL *)url {
    return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

- (BOOL) application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation {
    return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

- (BOOL) application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    return [WXApi handleOpenURL:url delegate:[WXApiManager sharedManager]];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    NSLog(@"设备deviceToken：%@", deviceToken);
    if (nil != deviceToken) {
        NSString* deviceTokenString = [deviceToken description];
        deviceTokenString = [deviceTokenString stringByReplacingOccurrencesOfString:@" " withString:@""];
        deviceTokenString = [deviceTokenString stringByReplacingOccurrencesOfString:@"<" withString:@""];
        deviceTokenString = [deviceTokenString stringByReplacingOccurrencesOfString:@">" withString:@""];
        NSLog(@"通知deviceToken：%@", deviceTokenString);
        [[GlobalDict shared] setDict:deviceTokenString key:@"deviceToken"];
    }
    
    /// Required - 注册 DeviceToken
    [JPUSHService registerDeviceToken:deviceToken];
    
    [JPUSHService registrationIDCompletionHandler:^(int resCode, NSString *registrationID) {
        NSLog(@"获取resCode : %d,registrationID: %@", resCode,registrationID);
        [[GlobalDict shared] setDict:registrationID key:@"jpushRegId"];
    }];
}

- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    //Optional
    NSLog(@"注册通知失败，失败信息: %@", error);
}

#pragma mark- JPUSHRegisterDelegate

// iOS 12 Support
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center openSettingsForNotification:(UNNotification *)notification{
    if (notification && [notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
        //从通知界面直接进入应用
        NSLog(@"极光推送-通知界面进来了");
        NSDictionary * userInfo = notification.request.content.userInfo;
        if([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
            [JPUSHService handleRemoteNotification:userInfo];
        }
    }else{
        //从通知设置界面进入应用
        NSLog(@"极光推送-设置界面进来了");
    }
}

// iOS 10 Support
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(NSInteger))completionHandler {
    NSLog(@"iOS10 通知willPresentNotification");
    // Required
    NSDictionary * userInfo = notification.request.content.userInfo;
    if([notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
        [JPUSHService handleRemoteNotification:userInfo];
    }
    completionHandler(UNNotificationPresentationOptionAlert); // 需要执行这个方法，选择是否提醒用户，有 Badge、Sound、Alert 三种类型可以选择设置
}

// iOS 10 Support
- (void)jpushNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)())completionHandler {
    NSLog(@"iOS10 通知didReceiveNotificationResponse");
    // Required
    NSDictionary * userInfo = response.notification.request.content.userInfo;
    if([response.notification.request.trigger isKindOfClass:[UNPushNotificationTrigger class]]) {
        [JPUSHService handleRemoteNotification:userInfo];
        [UIApplication sharedApplication].applicationIconBadgeNumber = 0;
        NSLog(@"从通知打开：%@", userInfo);
        [self notifyWeex:userInfo];
        [JPUSHService resetBadge];
    }
    completionHandler();  // 系统要求执行这个方法
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    NSLog(@"iOS7 通知");
    // Required, iOS 7 Support
    [JPUSHService handleRemoteNotification:userInfo];
    completionHandler(UIBackgroundFetchResultNewData);
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
    NSLog(@"iOS6 通知");
    // Required, For systems with less than or equal to iOS 6
    [JPUSHService handleRemoteNotification:userInfo];
}

- (void) notifyWeex:(NSDictionary*)notifyDict {
    if (nil == [notifyDict objectForKey:@"nt"]) {
        return;
    }
    NSMutableDictionary* paramDict = [NSMutableDictionary dictionaryWithObjectsAndKeys: [notifyDict objectForKey:@"nt"], @"nType", nil];
    
    if (nil != [notifyDict objectForKey:@"did"]) {
        [paramDict setValue:[notifyDict objectForKey:@"did"] forKey: @"did"];
    } else if (nil != [notifyDict objectForKey:@"cid"]) {
        [paramDict setValue:[notifyDict objectForKey:@"cid"] forKey: @"cid"];
    } else {
        return;
    }
    
    NSLog(@"通知weex，%@", paramDict);
    [[NSNotificationCenter defaultCenter] postNotificationName:@"receiveNotify" object: self userInfo:@{@"param": paramDict}];
}
@end
