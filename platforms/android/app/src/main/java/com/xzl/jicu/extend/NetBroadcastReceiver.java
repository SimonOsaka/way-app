package com.xzl.jicu.extend;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;

import com.xzl.jicu.BasePageActivity;
import com.xzl.jicu.util.NetUtil;

public class NetBroadcastReceiver extends BroadcastReceiver {

    public NetEvevt evevt = BasePageActivity.evevt;

    @Override
    public void onReceive(Context context, Intent intent) {
        // 如果相等的话就说明网络状态发生了变化
        if (intent.getAction().equals(ConnectivityManager.CONNECTIVITY_ACTION)) {
            String netWorkState = NetUtil.getNetWorkState(context);
            // 接口回调传过去状态的类型  
            evevt.onNetChange(netWorkState);
        }
    }

    // 自定义接口
    public interface NetEvevt {
        public void onNetChange(String netMobile);
    }
}
