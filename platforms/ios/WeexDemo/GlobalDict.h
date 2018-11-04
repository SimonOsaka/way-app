//
//  GlobalDict.h
//
//
//

#import <Foundation/Foundation.h>

@interface GlobalDict : NSObject

+ (instancetype)shared;

- (void)addDict:(NSString*)value key:(NSString*)key;
- (NSString*)getDict:(NSString*)key;

@end
