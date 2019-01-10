package com.xzl.jicu.extend;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;

import com.alibaba.fastjson.JSONObject;
import com.taobao.weex.WXSDKInstance;
import com.taobao.weex.WXSDKManager;

import java.math.BigInteger;
import java.util.HashMap;
import java.util.Map;

import cn.jpush.android.api.JPushInterface;

public class AppReceiver extends BroadcastReceiver {
    private static final String TAG = "AppReceiver";

    @Override
    public void onReceive(Context context, Intent intent) {
        try {
            Bundle bundle = intent.getExtras();
            Log.d(TAG, "onReceive - " + intent.getAction() + ", extras: " + bundle);

            if (JPushInterface.ACTION_REGISTRATION_ID.equals(intent.getAction())) {
                String regId = bundle.getString(JPushInterface.EXTRA_REGISTRATION_ID);
                Log.d(TAG, "接收Registration Id : " + regId);
                //send the Registration Id to your server...

            } else if (JPushInterface.ACTION_MESSAGE_RECEIVED.equals(intent.getAction())) {
                Log.d(TAG, "接收到推送下来的自定义消息: " + bundle.getString(JPushInterface.EXTRA_MESSAGE));

            } else if (JPushInterface.ACTION_NOTIFICATION_RECEIVED.equals(intent.getAction())) {
                Log.d(TAG, "接收到推送下来的通知");
                int notifactionId = bundle.getInt(JPushInterface.EXTRA_NOTIFICATION_ID);
                Log.d(TAG, "接收到推送下来的通知的ID: " + notifactionId);

            } else if (JPushInterface.ACTION_NOTIFICATION_OPENED.equals(intent.getAction())) {
                Log.d(TAG, "用户点击打开了通知");

                //打开自定义的Activity
                String extra = bundle.getString(JPushInterface.EXTRA_EXTRA);
                Log.d(TAG, "用户点击打开了通知extra：" + extra);
                JSONObject json = JSONObject.parseObject(extra);
                if (json.containsKey("nt")) {
                    Integer nt = json.getInteger("nt");
                    Map<String, Object> extraMap = new HashMap<>();
                    extraMap.put("nType", nt);
                    if (json.containsKey("cid")) {
                        Long cid = json.getLong("cid");
                        extraMap.put("cid", cid);
                    } else if (json.containsKey("did")) {
                        Long did = json.getLong("did");
                        extraMap.put("did", did);
                    } else {
                        return;
                    }

                    Log.d(TAG, "用户点击打开了通知extraMap：" + extraMap);
                    WXSDKInstance wxsdkInstance = new WXSDKInstance(context);
                    wxsdkInstance.fireGlobalEventCallback("receiveNotify", extraMap);
                }
            } else if (JPushInterface.ACTION_RICHPUSH_CALLBACK.equals(intent.getAction())) {
                Log.d(TAG, "用户收到到RICH PUSH CALLBACK: " + bundle.getString(JPushInterface.EXTRA_EXTRA));
                //在这里根据 JPushInterface.EXTRA_EXTRA 的内容处理代码，比如打开新的Activity， 打开一个网页等..

            } else if (JPushInterface.ACTION_CONNECTION_CHANGE.equals(intent.getAction())) {
                boolean connected = intent.getBooleanExtra(JPushInterface.EXTRA_CONNECTION_CHANGE, false);
                Log.w(TAG, intent.getAction() + " connected state change to " + connected);
            } else {
                Log.d(TAG, "Unhandled intent - " + intent.getAction());
            }
        } catch (Exception e) {

        }
    }

}
