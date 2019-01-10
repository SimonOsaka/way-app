package com.xzl.jicu.extend;

import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.xzl.jicu.util.GlobalMap;

public class WXDictionaryModule extends WXModule {

    private static final String TAG = "WXDictionaryModule";

    @JSMethod(uiThread = false)
    public void getDict(String key, JSCallback callback) {
        String value = GlobalMap.getValue(key);
        Log.d(TAG, "字典key：" + key + "，value：" + value);
        callback.invoke(null != value ? value : "");
    }

}
