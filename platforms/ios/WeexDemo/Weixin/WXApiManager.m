//
//  WXApiManager.m
//  SDKSample
//
//  Created by Jeason on 16/07/2015.
//
//

#import "WXApiManager.h"

@implementation WXApiManager

#pragma mark - LifeCycle
+(instancetype)sharedManager {
    static dispatch_once_t onceToken;
    static WXApiManager *instance;
    dispatch_once(&onceToken, ^{
        instance = [[WXApiManager alloc] init];
    });
    return instance;
}

#pragma mark - WXApiDelegate
- (void)onResp:(BaseResp *)resp {
    NSLog(@"微信返回：%@", resp);
    if ([resp isKindOfClass:[SendMessageToWXResp class]]) {
        [[WXSDKManager bridgeMgr].topInstance fireGlobalEvent:@"weixinCallback" params:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithFormat:@"%d", resp.errCode],@"errCode",resp.errStr, @"errStr", nil]];
    }
}

@end
