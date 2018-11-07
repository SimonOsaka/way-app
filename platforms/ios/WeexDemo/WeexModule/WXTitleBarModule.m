//
//  WXTitleBarModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/11/7.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXTitleBarModule.h"

@implementation WXTitleBarModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(setTitle:))

- (void)setTitle:(NSString*)title
{
    if (title) {
        NSLog(@"设置titlebar，title=%@", title);
        [weexInstance.viewController.navigationItem setTitle: title];
    }
}

@end
