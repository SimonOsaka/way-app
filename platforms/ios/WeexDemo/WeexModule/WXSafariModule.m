//
//  WXSafariModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXSafariModule.h"
#import <Foundation/Foundation.h>

@implementation WXSafariModule

WX_EXPORT_METHOD(@selector(openSafariUrl:))

- (void) openSafariUrl:(NSString*) urlStr {
    NSURL *url = [NSURL URLWithString:urlStr];
    if([[UIDevice currentDevice].systemVersion floatValue] >= 10.0){
        if ([[UIApplication sharedApplication] respondsToSelector:@selector(openURL:options:completionHandler:)]) {
            [[UIApplication sharedApplication] openURL:url options:@{}
                                     completionHandler:^(BOOL success) {
                                         NSLog(@"Open %d",success);
                                     }];
        } else {
//            BOOL success =
            [[UIApplication sharedApplication] openURL:url];
//            NSLog(@"Open  %d",success);
        }
        
    } else{
        bool can = [[UIApplication sharedApplication] canOpenURL:url];
        if(can){
            [[UIApplication sharedApplication] openURL:url];
        }
    }
}

@end
