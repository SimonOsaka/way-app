//
//  WXWeixinModule.m
//  WeexDemo
//
//  Created by 许忠亮 on 2018/10/29.
//  Copyright © 2018 taobao. All rights reserved.
//

#import "WXWeixinModule.h"
#import <Foundation/Foundation.h>
#import "WXApi.h"
@implementation WXWeixinModule
@synthesize weexInstance;

WX_EXPORT_METHOD(@selector(shareWebpage:))

- (void) shareWebpage:(NSDictionary*) params {
    NSLog(@"微信分享网页: %@", params);
    
    NSString* imageUrl = [params objectForKey:@"imageUrl"];
    NSString* webpageUrl = [params objectForKey:@"webpageUrl"];
    NSString* title = [params objectForKey:@"title"];
    NSString* desc = [params objectForKey:@"desc"];
    NSString* shareType = [params objectForKey:@"shareType"];
    
    WXMediaMessage* message = [WXMediaMessage message];
    message.title = title;
    message.description = desc;
    [message setThumbImage:[self compressImageWithUrl:imageUrl]];
    
    WXWebpageObject* webpageObject = [WXWebpageObject object];
    webpageObject.webpageUrl = webpageUrl;
    message.mediaObject = webpageObject;
    
    SendMessageToWXReq* req = [[SendMessageToWXReq alloc] init];
    req.bText = NO;
    req.message = message;
    if ([shareType isEqualToString:@"session"]) {
        req.scene = WXSceneSession;
    } else if ([shareType isEqualToString:@"timeline"]) {
        req.scene = WXSceneTimeline;
    }
    
    NSLog(@"发送微信请求: %@", req);
    [WXApi sendReq:req];
}

- (UIImage *)compressImageWithUrl:(id)imageUrl
{
//    NSData * imageData = [[NSData alloc]initWithContentsOfURL:[NSURL URLWithString:imageUrl]];
    NSURL *photourl = [NSURL URLWithString:imageUrl];
//    imageData = UIImageJPEGRepresentation(imageUrl, 1);
    CGFloat maxFileSize = 32*1024;
    CGFloat compression = 0.9f;
    CGFloat maxCompression = 0.1f;
    UIImage *image = [UIImage imageWithData:[NSData dataWithContentsOfURL:photourl]];//[UIImage imageWithData:imageData];
     [self imageSize:image];
    NSData *compressedData = UIImageJPEGRepresentation(image, compression);
    while ([compressedData length] > maxFileSize && compression > maxCompression) {
        compression -= 0.1;
        compressedData = UIImageJPEGRepresentation(image, compression);
    }
    UIImage *compressedImage = [UIImage imageWithData:compressedData];
    [self imageSize:compressedImage];
    return compressedImage;
}

- (void) imageSize:(UIImage*) image {
//    NSData * imageData = UIImageJPEGRepresentation(image, .5);
    
//    NSLog(@"图片大小：%f", [imageData length] / 1000.0);
    
}


@end
