package com.model;

/**
 * Created by Administrator on 2016/8/26.
 */
public class BarData
{
    //日期
    private String name;
    //访问量
    private Integer total;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public BarData(String name, Integer total) {
        this.name = name;
        this.total = total;
    }
}
