#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NewRelicModule, NSObject)

RCT_EXTERN_METHOD(setAttribute:(NSString *)key
                  withValue:(NSString *)value)

@end
