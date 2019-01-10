package com.xzl.jicu.extend;

import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.xzl.jicu.util.APKVersionCodeUtils;

public class WXVersionModule extends WXModule {

    private static final String TAG = "WXVersionModule";

    @JSMethod(uiThread = false)
    public Object getAppVersion(/*JSCallback callback*/){
        // 同步，uiThread = false 并且返回类型为Object
        // js端，直接接收方法返回值var r = weex.requireModule('xxxxx').getAppVersion();
        Log.d(TAG, "app版本：" + APKVersionCodeUtils.APP_VERSION);
        return APKVersionCodeUtils.APP_VERSION;
//        callback.invoke(APKVersionCodeUtils.APP_VERSION);
    }

}
