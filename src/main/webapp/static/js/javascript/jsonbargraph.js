function drewbargraph(a,b){
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
    tooltip: {
        show: true
    },
    legend: {
        data: ['销量']
    },
    xAxis: [
        {
            type: 'category',
            data: a
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            'name': '销量',
            'type': 'bar',
            'data': b
        }
    ]
};
    myChart.setOption(option);
}