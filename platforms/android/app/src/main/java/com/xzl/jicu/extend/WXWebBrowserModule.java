package com.xzl.jicu.extend;

import android.content.Intent;
import android.net.Uri;
import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;

public class WXWebBrowserModule extends WXModule {

    private static final String TAG = "WXWebBrowserModule";

    @JSMethod(uiThread = false)
    public void openUrl(String url){
        Log.d(TAG, "请求链接：" + url);
        try {
            Uri uri = Uri.parse(url);
            Intent intent = new Intent(Intent.ACTION_VIEW, uri);
            mWXSDKInstance.getContext().startActivity(intent);
        }catch (Exception e) {
            Log.e(TAG, "请求链接异常" + url, e);
        }
    }

}
