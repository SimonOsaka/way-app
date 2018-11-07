//
//  WXRootViewModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/11/7.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXRootViewModule.h"

@implementation WXRootViewModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(refresh))

- (void)refresh {
    NSLog(@"刷新rootview");
    [[NSNotificationCenter defaultCenter] postNotificationName:@"RefreshInstance" object:nil];
}

@end
