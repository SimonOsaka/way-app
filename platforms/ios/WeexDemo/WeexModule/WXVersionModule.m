//
//  WXNetworkModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXVersionModule.h"
#import <Foundation/Foundation.h>

@implementation WXVersionModule
@synthesize weexInstance;

WX_EXPORT_METHOD_SYNC(@selector(getAppVersion:))

- (void) getAppVersion:(WXModuleKeepAliveCallback)callback {
    NSDictionary *infoDictionary = [[NSBundle mainBundle] infoDictionary];
    // app版本
    NSString *appVersion = [infoDictionary objectForKey:@"CFBundleShortVersionString"];
    NSLog(@"获取app版本: %@", appVersion);
    callback(appVersion, false);
}

@end
