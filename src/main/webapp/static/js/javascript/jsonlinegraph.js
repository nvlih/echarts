function drewlinegraph(a,b) {
    var myChart = echarts.init(document.getElementById('main'));

    option = {
        legend: {
            data:['高度(km)与气温(°C)变化关系']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        tooltip : {
            trigger: 'axis',
            formatter: "Temperature : <br/>{b}km : {c}°C"
        },
        xAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value} °C'
                }
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value} km'
                },
                boundaryGap : false,
                data : a
            }
        ],
        series : [
            {
                name:'高度(km)与气温(°C)变化关系',
                type:'line',
                smooth:true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor : 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data:b
            }
        ]
    };


    myChart.setOption(option);
}
