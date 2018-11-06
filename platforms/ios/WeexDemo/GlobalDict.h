//
//  GlobalDict.h
//
//
//

#import <Foundation/Foundation.h>

@interface GlobalDict : NSObject

+ (instancetype)shared;

- (void)setDict:(NSString*)value key:(NSString*)key;
- (NSString*)getDict:(NSString*)key;

@end
