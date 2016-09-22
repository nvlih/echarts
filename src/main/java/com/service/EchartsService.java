package com.service;

import com.github.abel533.echarts.Option;
import com.github.abel533.echarts.axis.AxisLine;
import com.github.abel533.echarts.axis.CategoryAxis;
import com.github.abel533.echarts.axis.SplitLine;
import com.github.abel533.echarts.axis.ValueAxis;
import com.github.abel533.echarts.code.Trigger;
import com.github.abel533.echarts.code.X;
import com.github.abel533.echarts.code.Y;
import com.github.abel533.echarts.data.PieData;
import com.github.abel533.echarts.json.GsonOption;
import com.github.abel533.echarts.series.Bar;
import com.github.abel533.echarts.series.Line;
import com.github.abel533.echarts.series.Pie;
import com.github.abel533.echarts.style.LineStyle;
import com.model.AccessData;
import com.model.BarData;
import org.springframework.cglib.core.CollectionUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service("echartsService")
public class EchartsService implements IEchartsService {

    public List<AccessData> getWeekData() {
        List<AccessData> list = new ArrayList<AccessData>(7);
        list.add(new AccessData("09-16", 4));
        list.add(new AccessData("09-17", 7));
        list.add(new AccessData("09-18", 14));
        list.add(new AccessData("09-19", 304));
        list.add(new AccessData("09-20", 66));
        list.add(new AccessData("09-21", 16));
        list.add(new AccessData("09-22", 205));
        return list;
    }

    public GsonOption getWeek(){
        //获取数据
        List<AccessData> datas = getWeekData();
        //创建Option对象
        GsonOption option = new GsonOption();

        //设置图表标题，并且居中显示
        option.title().text("最近7天访问量图表").x(X.center);
        //设置图例,居中底部显示，显示边框
        option.legend().data("num").x(X.center).y(Y.bottom).borderWidth(1);
        //设置y轴为值轴，并且不显示y轴，最大值设置400，最小值-100（OSC为什么要有-100呢？）
        option.yAxis(new ValueAxis().name("IP")
                .axisLine(new AxisLine().show(true).lineStyle(new LineStyle().width(0)))
                .max(400).min(-100));
        //创建类目轴，并且不显示竖着的分割线，onZero=false
        CategoryAxis categoryAxis = new CategoryAxis()
                .splitLine(new SplitLine().show(false))
                .axisLine(new AxisLine().onZero(false));
        //不显示表格边框，就是围着图标的方框
        option.grid().borderWidth(0);
        //创建Line数据
        Line line = new Line("num").smooth(true);

        //根据获取的数据赋值
        for (AccessData data : datas) {
            //增加类目，值为日期
            categoryAxis.data(data.getDate());
            //日期对应的数据
            line.data(data.getNums());
        }
        //设置x轴为类目轴
        option.xAxis(categoryAxis);
        //设置数据
        option.series(line);
        return option;
    }

    public List<BarData> getBarData() {
        List<BarData> list = new ArrayList<BarData>(7);
        list.add(new BarData("z", 4));
        list.add(new BarData("s", 7));
        list.add(new BarData("b", 14));
        list.add(new BarData("e", 304));
        list.add(new BarData("w", 66));
        list.add(new BarData("q", 16));
        list.add(new BarData("r", 205));
        return list;
    }

    public GsonOption getBar(){
        //获取数据
        List<BarData> datas = getBarData();

        //创建Option对象
        GsonOption option = new GsonOption();

        option.title("delete yao").tooltip(Trigger.axis).legend("money（￥）");
        //横轴为值轴
        option.xAxis(new ValueAxis().boundaryGap(0d, 0.01));
        //创建类目轴
        CategoryAxis category = new CategoryAxis();
        //柱状数据
        Bar bar = new Bar("money");
        //饼图数据
        Pie pie = new Pie("money");
        //循环数据
        for (BarData  barData: datas) {
            //设置类目
            category.data(barData.getName());
            //类目对应的柱状图
            bar.data(barData.getTotal());
            //饼图数据
            pie.data(new PieData(barData.getName().toString(), barData.getTotal()));
        }
        //设置类目轴
        option.yAxis(category);
        //饼图的圆心和半径
        pie.center(800,200).radius(50);
        //设置数据
        option.series(bar, pie);
        //由于药品名字过长，图表距离左侧距离设置180，关于grid可以看ECharts的官方文档
        option.grid().x(180);
        //返回Option
        return option;
    }


}
