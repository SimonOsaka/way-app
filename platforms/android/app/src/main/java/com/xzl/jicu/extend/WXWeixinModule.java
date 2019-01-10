package com.xzl.jicu.extend;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import com.tencent.mm.opensdk.modelmsg.SendMessageToWX;
import com.tencent.mm.opensdk.modelmsg.WXMediaMessage;
import com.tencent.mm.opensdk.modelmsg.WXWebpageObject;
import com.xzl.jicu.util.WXApi;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

public class WXWeixinModule extends WXModule {

    private static final String TAG = "WXWeixinModule";

    private static final int IMAGE_SIZE = 32768;//微信分享图片大小限制

    @JSMethod(uiThread = false)
    public void shareWebpage(Map<String, String> params) {
        Log.d(TAG, "微信请求参数：" + params);

        String imageUrl = params.get("imageUrl");
        String webpageUrl = params.get("webpageUrl");
        String title = params.get("title");
        String desc = params.get("desc");
        String shareType = params.get("shareType");

        final WXMediaMessage message = new WXMediaMessage();
        message.title = title;
        message.description = desc;
        message.setThumbImage(compressImage(imageUrl));

        WXWebpageObject webpageObject = new WXWebpageObject();
        webpageObject.webpageUrl = webpageUrl;
        message.mediaObject = webpageObject;

        SendMessageToWX.Req req = new SendMessageToWX.Req();
        req.transaction = buildTransaction("webpage");
        req.message = message;
        if ("session".equalsIgnoreCase(shareType)) {
            req.scene = SendMessageToWX.Req.WXSceneSession;
        } else if ("timeline".equalsIgnoreCase(shareType)) {
            req.scene = SendMessageToWX.Req.WXSceneTimeline;
        }

        WXApi.sendReq(req);

    }

    /**
     * 压缩图片直至小于32k
     *
     * @param imageUrl
     * @return
     */
    private Bitmap compressImage(String imageUrl) {
        ByteArrayOutputStream output = null;
        try {
            URL picUrl = new URL(imageUrl);
            HttpURLConnection conn = (HttpURLConnection) picUrl.openConnection(); // 获得连接
            conn.setConnectTimeout(5000);//设置超时
            conn.setDoInput(true);
            conn.setUseCaches(false);//不缓存
            conn.connect();
            Bitmap bmp = BitmapFactory.decodeStream(conn.getInputStream());

            output = new ByteArrayOutputStream();

            bmp.compress(Bitmap.CompressFormat.JPEG, 100, output);
            int options = 100;
            while (output.toByteArray().length > IMAGE_SIZE && options != 10) {
                output.reset(); //清空baos
                bmp.compress(Bitmap.CompressFormat.JPEG, options, output);//这里压缩options%，把压缩后的数据存放到baos中
                options -= 10;
            }

            bmp.recycle();
            byte[] result = output.toByteArray();
            Log.d(TAG, "微信压缩图片，最终大小：" + result.length);
            return BitmapFactory.decodeByteArray(result, 0, result.length);
        } catch (Exception e) {
            Log.e(TAG, "微信压缩图片", e);
        } finally {
            try {
                if (null != output) {
                    output.close();
                }
            } catch (IOException e) {
                Log.e(TAG, "微信压缩图片，关闭output", e);
            }

        }
        return null;
    }

    private String buildTransaction(final String type) {
        return (type == null) ? String.valueOf(System.currentTimeMillis()) : type + System.currentTimeMillis();
    }
}
