package com.xzl.jicu.util;

import com.taobao.weex.WXSDKInstance;

public class WXSdkUtils {

    private static WXSDKInstance mInstance = null;
    public static void setRootInstance(WXSDKInstance instance) {
        if (null == mInstance) {
            mInstance = instance;
        }
    }

    public static WXSDKInstance getRootInstance() throws Exception {
        if (null == mInstance) {
            throw new Exception("mInstance is null");
        }

        return mInstance;
    }
}
