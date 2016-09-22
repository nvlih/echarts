package com.service;

import com.github.abel533.echarts.Option;
import com.github.abel533.echarts.json.GsonOption;
import com.model.AccessData;

import java.util.List;

/**
 * Created by Administrator on 2016/8/26.
 */
public interface IEchartsService {
    public GsonOption getWeek();

    public GsonOption getBar();

}
