@objc(NewRelicModule)
class NewRelicModule: NSObject {
    
    @objc(setAttribute:withValue:)
    func setAttribute(key: NSString, value: NSString) {
      print("NR: setting attribute \(key) to \(value)")
      
      NewRelic.setAttribute(String(key), value: value)
    }
}
