package com.xzl.jicu.util;

import java.util.HashMap;
import java.util.Map;

public final class GlobalMap {

    private static final Map<String, String> globalMap = new HashMap<>();

    public static String addValue(String key, String value) {
        if (null != key && value != null) {
            return globalMap.put(key, value);
        }

        return null;
    }

    public static String getValue(String key) {
        if (globalMap.containsKey(key)) {
            return globalMap.get(key);
        }

        return null;
    }
}
