package com.xzl.jicu.util;

import android.support.v7.app.ActionBar;

import com.taobao.weex.WXSDKInstance;

import java.util.ArrayList;
import java.util.List;

public class WXSdkUtils {

    private static List<WXSDKInstance> mInstanceList = new ArrayList<>();
    private static List<ActionBar> actionBarList = new ArrayList<>();

    public synchronized static void setInstance(WXSDKInstance instance) {
        mInstanceList.add(instance);
    }

    public synchronized static void popInstance() {
        if (mInstanceList.size() > 1) {
            mInstanceList.remove(mInstanceList.size() - 1);
        }
    }

    public synchronized static WXSDKInstance getInstance() throws Exception {
        if (mInstanceList.size() == 0) {
            throw new Exception("mInstanceList is empty");
        }

        return mInstanceList.get(mInstanceList.size() - 1);
    }

    public synchronized static void setActionBar(ActionBar bar) {
        actionBarList.add(bar);
    }

    public synchronized static void popActionBar() {
        if (actionBarList.size() > 1) {
            actionBarList.remove(actionBarList.size() - 1);
        }
    }

    public synchronized static ActionBar getActionBar() throws Exception {
        if (actionBarList.size() == 0) {
            throw new Exception("actionBar is empty");
        }

        return actionBarList.get(actionBarList.size() - 1);
    }
}
