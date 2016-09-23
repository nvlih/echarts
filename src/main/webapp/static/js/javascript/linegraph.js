function drewlinegraph() {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title: {
            text: '鏈潵涓�鍛ㄦ皵娓╁彉鍖�',
            subtext: '绾睘铏氭瀯'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['鏈�楂樻皵娓�', '鏈�浣庢皵娓�']
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['鍛ㄤ竴', '鍛ㄤ簩', '鍛ㄤ笁', '鍛ㄥ洓', '鍛ㄤ簲', '鍛ㄥ叚', '鍛ㄦ棩']
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    formatter: '{value} 掳C'
                }
            }
        ],
        series: [
            {
                name: '鏈�楂樻皵娓�',
                type: 'line',
                data: [11, 11, 15, 13, 12, 13, 10],
                markPoint: {
                    data: [
                        {type: 'max', name: '鏈�澶у��'},
                        {type: 'min', name: '鏈�灏忓��'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '骞冲潎鍊�'}
                    ]
                }
            },
            {
                name: '鏈�浣庢皵娓�',
                type: 'line',
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [
                        {name: '鍛ㄦ渶浣�', value: -2, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '骞冲潎鍊�'}
                    ]
                }
            }
        ]
    };
    myChart.setOption(option);
}
