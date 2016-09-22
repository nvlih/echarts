function xstgraph() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        legend: {
            data:['月份销售图']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                //dataView : {show: true, readOnly: false},
                //magicType : {show: true, type: ['line']},
                //restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        tooltip : {
            trigger: 'axis',
            formatter: "销售情况 : <br/>{b}月份 : {c}万元"
        },
        xAxis : [
            {
                type : 'category',
                axisLabel : {
                    formatter: '{value}月份'
                },
                data : ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value}万元'
                },
                boundaryGap : false
            }
        ],
        series : [
            {
                name:'月份销售图',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data:[150, 5000, 5650, 4650, 2210, 2500, 2707, 15570, 17650, 7707, 15570, 18650]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '正在努力的读取数据中...'});
    myChart.hideLoading();
}