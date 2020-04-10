package com.xzl.jicu.extend;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Attribute;
import org.jsoup.nodes.Attributes;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;


public class WXHtmlModule extends WXModule {
    @JSMethod(uiThread = false)
    public void css(String html, String css, JSCallback callback) {
        if (html == null || html.isEmpty()) {
            callback.invoke(new ArrayList<>());
            return;
        }
        Document document = Jsoup.parse(html);
        Elements elements = document.select(css);
        List<String> strings = new ArrayList<String>(elements.size());
        for (Element element : elements) {
            strings.add(element.outerHtml());
        }
        callback.invoke(strings);
    }
    @JSMethod(uiThread = false)
    public void parse(String html, JSCallback callback) {
        if (html == null || html.isEmpty()) {
            callback.invoke(Collections.EMPTY_LIST);
            return;
        }
        Element body = Jsoup.parse(html).body();
        Elements elements;
        if (body.children().size() != 0) {
            elements = body.children();
        } else {
            callback.invoke(Collections.EMPTY_LIST);
            return;
        }

        Iterator<Element> iterator= elements.iterator();

        List<Map<String, String>> tagList = new ArrayList<>(elements.size());
        while (iterator.hasNext()) {
            Element ele =  iterator.next();
            Map<String, String> tagMaps = new HashMap<>();
//            tagMaps.put("tagName", ele.tagName());
            tagMaps.put("text", ele.text());
            tagList.add(tagMaps);
        }
        callback.invoke(tagList);
    }
}
