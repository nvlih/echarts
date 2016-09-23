function drewbargraph() {
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title: {
            text: '鏌愬湴鍖鸿捀鍙戦噺鍜岄檷姘撮噺',
            subtext: '绾睘铏氭瀯'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['钂稿彂閲�', '闄嶆按閲�']
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
                data: ['1鏈�', '2鏈�', '3鏈�', '4鏈�', '5鏈�', '6鏈�', '7鏈�', '8鏈�', '9鏈�', '10鏈�', '11鏈�', '12鏈�']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: '钂稿彂閲�',
                type: 'bar',
                data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
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
                name: '闄嶆按閲�',
                type: 'bar',
                data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                markPoint: {
                    data: [
                        {name: '骞存渶楂�', value: 182.2, xAxis: 7, yAxis: 183, symbolSize: 18},
                        {name: '骞存渶浣�', value: 2.3, xAxis: 11, yAxis: 3}
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
    // 涓篹charts瀵硅薄鍔犺浇鏁版嵁
    myChart.setOption(option);
}