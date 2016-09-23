function linebarstack() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        tooltip : {
            trigger: 'axis'
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar','stack']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['钂稿彂閲�','闄嶆按閲�','骞冲潎娓╁害']
        },
        xAxis : [
            {
                type : 'category',
                data : ['1鏈�','2鏈�','3鏈�','4鏈�','5鏈�','6鏈�','7鏈�','8鏈�','9鏈�','10鏈�','11鏈�','12鏈�']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '姘撮噺',
                axisLabel : {
                    formatter: '{value} ml'
                }
            },
            {
                type : 'value',
                name : '娓╁害',
                axisLabel : {
                    formatter: '{value} 掳C'
                }
            }
        ],
        series : [

            {
                name:'钂稿彂閲�',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
            },
            {
                name:'闄嶆按閲�',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
            },
            {
                name:'骞冲潎娓╁害',
                type:'line',
                yAxisIndex: 1,
                data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
            }
        ]
    };

    // 涓篹charts瀵硅薄鍔犺浇鏁版嵁
    myChart.setOption(option);
}