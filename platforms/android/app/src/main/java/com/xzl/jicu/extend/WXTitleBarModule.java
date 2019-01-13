package com.xzl.jicu.extend;

import android.content.Context;
import android.support.v7.app.ActionBar;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.xzl.jicu.R;
import com.xzl.jicu.util.WXSdkUtils;

public class WXTitleBarModule extends WXModule {

    private static final String TAG = "WXTitleBarModule";

    @JSMethod(uiThread = true)
    public void setTitle(String title) {
        Log.d(TAG, "title：" + title);
        try {
//            ActionBar.LayoutParams lp = new ActionBar.LayoutParams(
//                    ActionBar.LayoutParams.MATCH_PARENT,
//                    ActionBar.LayoutParams.MATCH_PARENT,
//                    Gravity.CENTER);
//      设置属性
            LayoutInflater inflator = (LayoutInflater) WXSdkUtils.getInstance().getContext()
                    .getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            View v = inflator.inflate(R.layout.actionbar_layout, null);
            TextView tv = (TextView) v.findViewById(R.id.action_bar_title);
            tv.setText(title);
            WXSdkUtils.getActionBar().setCustomView(v/*, lp*/);
        } catch (Exception e) {

        }

    }

}
