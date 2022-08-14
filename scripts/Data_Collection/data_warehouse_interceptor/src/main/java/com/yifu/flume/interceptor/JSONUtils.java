package com.yifu.flume.interceptor;

import com.alibaba.fastjson.JSONException;
import com.alibaba.fastjson.JSONObject;

public class JSONUtils {
    public static boolean isJson(String log) {
        boolean flag = false;
        try {
            JSONObject.parseObject(log);
            flag = true;

        } catch (JSONException e) {

        }
        return flag;
    }
}
