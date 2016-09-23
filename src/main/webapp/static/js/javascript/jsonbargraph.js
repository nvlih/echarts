
function drewbargraph(a,b){
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
    tooltip: {
        show: true
    },
    legend: {
        data: ['閿�閲�']
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
            'name': '閿�閲�',
            'type': 'bar',
            'data': b
        }
    ]
};
    myChart.setOption(option);
}