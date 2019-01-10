package com.xzl.jicu.extend;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.xzl.jicu.util.NetUtil;

public class WXNetworkModule extends WXModule {

    @JSMethod(uiThread = false)
    public void getNetworkStatus(JSCallback callback){
        callback.invoke(NetUtil.CURRENT);
    }

}
