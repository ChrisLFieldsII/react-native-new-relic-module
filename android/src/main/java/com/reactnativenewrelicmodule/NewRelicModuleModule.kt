package com.reactnativenewrelicmodule

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.newrelic.agent.android.NewRelic

class NewRelicModuleModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "NewRelicModule"
    }

    @ReactMethod
    fun setAttribute(key: String, value: String) {
      Log.d("NR", "Setting $key to $value")

      NewRelic.setAttribute(key, value)
    }
}
