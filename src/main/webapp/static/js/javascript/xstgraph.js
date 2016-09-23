function xstgraph() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        legend: {
            data:['鏈堜唤閿�鍞浘']
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
            formatter: "閿�鍞儏鍐� : <br/>{b}鏈堜唤 : {c}涓囧厓"
        },
        xAxis : [
            {
                type : 'category',
                axisLabel : {
                    formatter: '{value}鏈堜唤'
                },
                data : ['1', '2', '3', '4', '5', '6', '7', '8', '9','10', '11', '12']
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine : {onZero: false},
                axisLabel : {
                    formatter: '{value}涓囧厓'
                },
                boundaryGap : false
            }
        ],
        series : [
            {
                name:'鏈堜唤閿�鍞浘',
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
    myChart.showLoading({text: '姝ｅ湪鍔姏鐨勮鍙栨暟鎹腑...'});
    myChart.hideLoading();
}