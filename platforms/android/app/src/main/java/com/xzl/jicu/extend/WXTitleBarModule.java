package com.xzl.jicu.extend;

import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

public class WXTitleBarModule extends WXModule {

    private static final String TAG = "WXTitleBarModule";

    @JSMethod(uiThread = false)
    public void setTitle(String title){
        Log.d(TAG, "title：" + title);
        try {
        }catch (Exception e) {
            Log.e(TAG, "title：" + title, e);
        }
    }

}
