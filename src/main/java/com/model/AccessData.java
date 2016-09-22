package com.model;

/**
 * Created by Administrator on 2016/8/26.
 */
public class AccessData {
    //日期
    private String date;
    //访问量
    private Integer nums;

    public AccessData(String date, Integer nums) {
        this.date = date;
        this.nums = nums;
    }

    public String getDate() {
        return date;
    }

    public Integer getNums() {
        return nums;
    }
}
