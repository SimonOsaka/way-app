package com.xzl.jicu;

import android.app.Application;
import android.os.Build;
import android.os.StrictMode;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.xzl.jicu.extend.ImageAdapter;
import com.xzl.jicu.extend.WXDictionaryModule;
import com.xzl.jicu.extend.WXEventModule;
import com.xzl.jicu.extend.WXNetworkModule;
import com.xzl.jicu.extend.WXTitleBarModule;
import com.xzl.jicu.extend.WXVersionModule;
import com.xzl.jicu.extend.WXWebBrowserModule;
import com.xzl.jicu.extend.WXWeixinModule;
import com.xzl.jicu.util.AppConfig;
import com.xzl.jicu.util.Constants;

import cn.jpush.android.api.JPushInterface;

public class WXApplication extends Application {

    // IWXAPI 是第三方app和微信通信的openapi接口
    private IWXAPI api;

    @Override
    public void onCreate() {
        super.onCreate();
        WXSDKEngine.addCustomOptions("appName", "WXSample");
        WXSDKEngine.addCustomOptions("appGroup", "WXApp");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
        );
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerModule("network", WXNetworkModule.class);
            WXSDKEngine.registerModule("version", WXVersionModule.class);
            WXSDKEngine.registerModule("webbrowser", WXWebBrowserModule.class);
            WXSDKEngine.registerModule("dictionary", WXDictionaryModule.class);
            WXSDKEngine.registerModule("titlebar", WXTitleBarModule.class);
            WXSDKEngine.registerModule("weixin", WXWeixinModule.class);
        } catch (WXException e) {
            e.printStackTrace();
        }
        AppConfig.init(this);
        WeexPluginContainer.loadAll(this);

        if (Build.VERSION.SDK_INT >= 18) {
            StrictMode.VmPolicy.Builder builder = new StrictMode.VmPolicy.Builder();
            StrictMode.setVmPolicy(builder.build());
            builder.detectFileUriExposure();
        }

        // 三个参数分别是上下文、应用的appId、是否检查签名（默认为false）
        api = WXAPIFactory.createWXAPI(this, Constants.WEIXIN_APP_ID);
        // 将该app注册到微信
        api.registerApp(Constants.WEIXIN_APP_ID);

        JPushInterface.setDebugMode(true); 	// 设置开启日志,发布时请关闭日志
        JPushInterface.init(this);  // 初始化 JPush
    }
}
