//
//  WXNetworkModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXNetworkModule.h"
#import <Foundation/Foundation.h>
#import <AFNetworking/AFNetworkReachabilityManager.h>

static NSString* statusString = @"-";

@implementation WXNetworkModule
@synthesize weexInstance;

WX_EXPORT_METHOD_SYNC(@selector(getNetworkStatus:))

- (void) getNetworkStatus:(WXKeepAliveCallback)callback {
    [self monitorNetworkStatus];
    NSLog(@"获取网络状态: %@", statusString);
    callback(statusString, false);
}

- (void) monitorNetworkStatus {
    [[AFNetworkReachabilityManager sharedManager] setReachabilityStatusChangeBlock:^(AFNetworkReachabilityStatus status) {
        NSLog(@"Reachability: %@", AFStringFromNetworkReachabilityStatus(status));
        switch (status) {
            case AFNetworkReachabilityStatusUnknown: // 未知网络
                statusString = @"UNKNOWN";
                break;
                
            case AFNetworkReachabilityStatusNotReachable: // 没有网络(断网)
                statusString = @"NONE";
                break;
                
            case AFNetworkReachabilityStatusReachableViaWWAN: // 手机自带网络
                statusString = @"WWAN";
                break;
                
            case AFNetworkReachabilityStatusReachableViaWiFi: // WIFI
                statusString = @"WIFI";
                break;
        }
    }];
}
@end
