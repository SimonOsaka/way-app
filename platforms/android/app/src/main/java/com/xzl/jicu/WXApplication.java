package com.xzl.jicu;

import android.app.Application;
import android.os.Build;
import android.os.StrictMode;
import android.util.Log;

import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.imagepipeline.core.ImagePipelineConfig;
import com.facebook.imagepipeline.listener.RequestListener;
import com.facebook.imagepipeline.listener.RequestLoggingListener;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.xzl.jicu.extend.FrescoImageAdapter;
import com.xzl.jicu.extend.WXBrowserModule;
import com.xzl.jicu.extend.WXDictionaryModule;
import com.xzl.jicu.extend.WXEventModule;
import com.xzl.jicu.extend.WXHtmlModule;
import com.xzl.jicu.extend.WXNetworkModule;
import com.xzl.jicu.extend.WXTitleBarModule;
import com.xzl.jicu.extend.WXVersionModule;
import com.xzl.jicu.extend.WXWebBrowserModule;
import com.xzl.jicu.extend.WXWeixinModule;
import com.xzl.jicu.util.AppConfig;
import com.xzl.jicu.util.Constants;

import java.util.HashSet;
import java.util.Set;

import cn.jpush.android.api.JPushInterface;

public class WXApplication extends Application {

    private static final String TAG = "WXApplication";

    // IWXAPI 是第三方app和微信通信的openapi接口
    private IWXAPI api;

    @Override
    public void onCreate() {
        super.onCreate();

        Set<RequestListener> requestListeners = new HashSet<>();
        requestListeners.add(new RequestLoggingListener());
        ImagePipelineConfig config = ImagePipelineConfig.newBuilder(this)
                .setRequestListeners(requestListeners)
                .build();
        Fresco.initialize(this, config);

        WXSDKEngine.addCustomOptions("appName", "急促");
        WXSDKEngine.addCustomOptions("appGroup", "jicu");
        WXSDKEngine.initialize(this,
                new InitConfig.Builder().setImgAdapter(new FrescoImageAdapter()).build()
        );
        try {
            WXSDKEngine.registerModule("event", WXEventModule.class);
            WXSDKEngine.registerModule("network", WXNetworkModule.class);
            WXSDKEngine.registerModule("version", WXVersionModule.class);
            WXSDKEngine.registerModule("webbrowser", WXWebBrowserModule.class);
            WXSDKEngine.registerModule("dictionary", WXDictionaryModule.class);
            WXSDKEngine.registerModule("titlebar", WXTitleBarModule.class);
            WXSDKEngine.registerModule("weixin", WXWeixinModule.class);
            WXSDKEngine.registerModule("html", WXHtmlModule.class);
            WXSDKEngine.registerModule("browser", WXBrowserModule.class);
        } catch (WXException e) {
            Log.d(TAG, "Module register exception: ", e);
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

        JPushInterface.setDebugMode(false);    // 设置开启日志,发布时请关闭日志
        JPushInterface.init(this);  // 初始化 JPush
    }
}
