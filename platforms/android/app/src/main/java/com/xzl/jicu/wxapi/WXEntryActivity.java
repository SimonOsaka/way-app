package com.xzl.jicu.wxapi;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.tencent.mm.opensdk.modelbase.BaseReq;
import com.tencent.mm.opensdk.modelbase.BaseResp;
import com.tencent.mm.opensdk.openapi.IWXAPI;
import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.xzl.jicu.util.Constants;
import com.xzl.jicu.util.WXApi;
import com.xzl.jicu.util.WXSdkUtils;

import java.util.HashMap;
import java.util.Map;

public class WXEntryActivity extends Activity implements IWXAPIEventHandler {

    private static final String TAG = "WXEntryActivity";


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            WXApi.regApi(WXSdkUtils.getInstance().getContext());
        } catch (Exception e) {
        }
        WXApi.getApi().handleIntent(getIntent(), this);
//        Toast.makeText(this, "微信onCreate", Toast.LENGTH_SHORT).show();
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        WXApi.unRegApi();
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);

        setIntent(intent);
        WXApi.getApi().handleIntent(intent, this);
    }

    @Override
    public void onReq(BaseReq baseReq) {

    }

    @Override
    public void onResp(BaseResp resp) {
        Log.d(TAG, "微信onResp" + resp);


        Map<String, Object> resultMap = new HashMap<>();
        resultMap.put("errCode", resp.errCode);
        resultMap.put("errStr", resp.errStr);

        switch (resp.errCode) {
            case BaseResp.ErrCode.ERR_OK:
                break;
            case BaseResp.ErrCode.ERR_USER_CANCEL:
                break;
            case BaseResp.ErrCode.ERR_AUTH_DENIED:
                break;
            case BaseResp.ErrCode.ERR_UNSUPPORT:
                break;
            default:
                break;
        }

        try {
            WXSdkUtils.getInstance().fireGlobalEventCallback("weixinCallback", resultMap);
            finish();
        } catch (Exception e) {
            Log.e(TAG, "WXSdkUtils.getInstance()", e);
        }
    }


}