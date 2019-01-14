package com.xzl.jicu.util;

import android.content.Context;
import android.content.SharedPreferences;
import android.util.Log;

import java.util.Map;

public final class SpUtils {


    private SpUtils() {
    }

    private static SharedPreferences getSharedPreferences() {
        try {
            return WXSdkUtils.getRootInstance().getContext().getSharedPreferences(Constants.GLOBAL_DATA,
                    Context.MODE_PRIVATE);
        } catch (Exception e) {
            //不会发生
            Log.e("SpUtils", "获取SharedPreferences异常", e);
        }
        return null;
    }

    private static SharedPreferences.Editor getEditor() {
        return getSharedPreferences().edit();
    }

    public static void commit(String key, String String) {
        getEditor().putString(key, String).commit();
    }

    public static void apply(String key, String String) {
        getEditor().putString(key, String).apply();

        Log.d("print sp",getAll().size() +" : "+ getAll());
    }

    public static String get(String key, String defaultString) {
        return getSharedPreferences().getString(key, defaultString);
    }

    public static void remove(String key) {
        getEditor().remove(key).commit();
    }

    public static void clear() {
        getEditor().clear().commit();
    }

    public static Boolean containsKey(String key) {
        return getSharedPreferences().contains(key);
    }

    public static Map<String, ?> getAll() {
        return getSharedPreferences().getAll();
    }
}
