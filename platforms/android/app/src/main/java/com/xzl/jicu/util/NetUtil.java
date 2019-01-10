package com.xzl.jicu.util;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;

public class NetUtil {
    /**
     * 没有连接网络
     */
    public static final String NETWORK_NONE = "NONE";
    /**
     * 移动网络
     */
    public static final String NETWORK_MOBILE = "MOBILE";
    /**
     * 无线网络
     */
    public static final String NETWORK_WIFI = "WIFI";

    public static String CURRENT = NETWORK_NONE;

    public static String getNetWorkState(Context context) {
        // 得到连接管理器对象  
        ConnectivityManager connectivityManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);

        NetworkInfo activeNetworkInfo = connectivityManager
                .getActiveNetworkInfo();
        if (activeNetworkInfo != null && activeNetworkInfo.isConnected()) {

            if (activeNetworkInfo.getType() == (ConnectivityManager.TYPE_WIFI)) {
                CURRENT = NETWORK_WIFI;
                return NETWORK_WIFI;
            } else if (activeNetworkInfo.getType() == (ConnectivityManager.TYPE_MOBILE)) {
                CURRENT = NETWORK_MOBILE;
                return NETWORK_MOBILE;
            }
        }
        CURRENT = NETWORK_NONE;
        return NETWORK_NONE;
    }
}
