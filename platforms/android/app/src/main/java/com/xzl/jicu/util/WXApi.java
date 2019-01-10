package com.xzl.jicu.util;

import android.content.Context;

import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;

public class WXApi {

    // IWXAPI 是第三方app和微信通信的openapi接口
    private static IWXAPI api;

    public static void regApi(Context context) {
        if (null == api) {
            // 通过WXAPIFactory工厂，获取IWXAPI的实例
            api = WXAPIFactory.createWXAPI(context, Constants.WEIXIN_APP_ID);
            api.registerApp(Constants.WEIXIN_APP_ID);
        }
    }

    public static void sendReq(SendMessageToWX.Req req) {
        api.sendReq(req);
    }

    public static void unRegApi() {
        api.unregisterApp();
    }
}
