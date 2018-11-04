//
//  GlobalDict.m
//
//
//
#import "GlobalDict.h"

@implementation GlobalDict

#pragma mark - LifeCycle
+(instancetype)shared {
    static dispatch_once_t onceToken;
    static GlobalDict *instance;
#if DEBUG
    NSLog(@"GlobalDict all: %@", [NSUserDefaults standardUserDefaults]);
#endif
    dispatch_once(&onceToken, ^{
        instance = [[GlobalDict alloc] init];
    });
    return instance;
}

#pragma mark - addDict
- (void)addDict:(NSString*)value key:(NSString*)key {
    NSLog(@"全局字典GlobalDict返回：key=%@，value=%@", key, value);
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    if (value != nil) {
        [userDefaults setValue:value forKey:key];
    }
    [userDefaults synchronize];
}

- (NSString*)getDict:(NSString*)key {
    NSUserDefaults* userDefaults = [NSUserDefaults standardUserDefaults];
    return [userDefaults valueForKey:key];
}

@end
