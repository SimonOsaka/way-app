//
//  WeexSDKManager.m
//  WeexDemo
//
//  Created by yangshengtao on 16/11/14.
//  Copyright © 2016年 taobao. All rights reserved.
//

#import "WeexSDKManager.h"
#import "DemoDefine.h"
#import <WeexSDK/WeexSDK.h>
#import "WXDemoViewController.h"
#import "WXImgLoaderDefaultImpl.h"
#import "../WeexModule/WXSafariModule.h"
#import "../WeexModule/WXNetworkModule.h"
#import "../WeexModule/WXVersionModule.h"
#import "../WeexModule/WXAppStoreModule.h"
#import "../WeexModule/WXWeixinModule.h"
#import "../WeexModule/WXDictionaryModule.h"
#import "../WeexModule/WXTitleBarModule.h"
#import "../WeexModule/WXRootViewModule.h"

@implementation WeexSDKManager

+ (void)setup;
{
    NSURL *url = nil;
#if DEBUG
    //If you are debugging in device , please change the host to current IP of your computer.
    url = [NSURL URLWithString:BUNDLE_URL];
#else
    url = [NSURL URLWithString:BUNDLE_URL];
#endif
    NSString * entryURL = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"WXEntryBundleURL"];
    if (entryURL) {
        if ([entryURL hasPrefix:@"http"]) {
            url = [NSURL URLWithString:entryURL];
        } else {
            url = [NSURL URLWithString:[NSString stringWithFormat:@"%@%@",[[NSBundle bundleForClass:self] resourceURL].absoluteString, entryURL]];
        }
    }
    
#ifdef UITEST
    url = [NSURL URLWithString:UITEST_HOME_URL];
#endif
    
    [self initWeexSDK];
    [self loadCustomContainWithScannerWithUrl:url];
}

+ (void)initWeexSDK
{
    [WXAppConfiguration setAppGroup:@"JicuApp"];
    [WXAppConfiguration setAppName:@"急促"];
    [WXAppConfiguration setAppVersion:@"1.0.0"];
    [WXAppConfiguration setExternalUserAgent:@"Jicu ios app"];
    
    [WXSDKEngine initSDKEnvironment];
    
    [WXSDKEngine registerModule:@"safari" withClass:[WXSafariModule class]];
    [WXSDKEngine registerModule:@"network" withClass:[WXNetworkModule class]];
    [WXSDKEngine registerModule:@"version" withClass:[WXVersionModule class]];
    [WXSDKEngine registerModule:@"appstore" withClass:[WXAppStoreModule class]];
    [WXSDKEngine registerModule:@"weixin" withClass:[WXWeixinModule class]];
    [WXSDKEngine registerModule:@"dictionary" withClass:[WXDictionaryModule class]];
    [WXSDKEngine registerModule:@"titlebar" withClass:[WXTitleBarModule class]];
    [WXSDKEngine registerModule:@"rootview" withClass:[WXRootViewModule class]];
    
    [WXSDKEngine registerHandler:[WXImgLoaderDefaultImpl new] withProtocol:@protocol(WXImgLoaderProtocol)];
    
#ifdef DEBUG
    [WXLog setLogLevel:WXLogLevelLog];
#endif
}

+ (void)loadCustomContainWithScannerWithUrl:(NSURL *)url
{
    UIViewController *demo = [[WXDemoViewController alloc] init];
    ((WXDemoViewController *)demo).url = url;
    [[UIApplication sharedApplication] delegate].window.rootViewController = [[WXRootViewController alloc] initWithRootViewController:demo];
}

@end
