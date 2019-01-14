package com.xzl.jicu.extend;

import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.xzl.jicu.util.Constants;
import com.xzl.jicu.util.SpUtils;

public class WXDictionaryModule extends WXModule {

    private static final String TAG = "WXDictionaryModule";

    @JSMethod(uiThread = false)
    public Object getDict(String key) {
        String value = SpUtils.get(key, Constants.STRING_EMPTY);
        Log.d(TAG, "字典key：" + key + "，value：" + value);
        return value;
    }

}
