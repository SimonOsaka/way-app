//
//  WXAppStoreModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXAppStoreModule.h"
#import <Foundation/Foundation.h>

@implementation WXAppStoreModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(openUrl:))

- (void) openUrl:(NSString*)url {
    NSLog(@"苹果商店url: %@", url);
    [[UIApplication sharedApplication] openURL:[NSURL URLWithString: url]];
}

@end
