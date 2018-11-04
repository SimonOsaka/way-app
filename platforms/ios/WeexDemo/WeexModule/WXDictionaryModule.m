//
//  WXDictionaryModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/11/04.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXDictionaryModule.h"
#import <Foundation/Foundation.h>
#import "../GlobalDict.h"

@implementation WXDictionaryModule
@synthesize weexInstance;

WX_EXPORT_METHOD_SYNC(@selector(getDict:callback:))

- (void) getDict: (NSString*)key callback:(WXKeepAliveCallback) callback {
    NSLog(@"全局变量key: %@", key);
    NSString* value = [[GlobalDict shared] getDict:key];
    NSLog(@"全局变量value：%@", value);
    if (nil == value) {
        callback(@"", false);
    } else {
        callback(value, false);
    }
}

@end
