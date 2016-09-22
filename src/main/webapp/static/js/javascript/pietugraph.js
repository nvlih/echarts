<<<<<<< HEAD
function pietugraph() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['曼联','皇马','巴萨','拜仁','尤文图斯','阿贾克斯','其它']
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 2548
                        }
                    }
                },
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'知名俱乐部',
                type:'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'曼联'},
                    {value:310, name:'皇马'},
                    {value:234, name:'巴萨'},
                    {value:135, name:'拜仁'},
                    {value:1548, name:'尤文图斯'},
                    {value:48, name:'阿贾克斯'},
                    {value:348, name:'其它'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '正在努力的读取数据中...'});
    myChart.hideLoading();
=======
function pietugraph() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['曼联','皇马','巴萨','拜仁','尤文图斯','阿贾克斯','其它']
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 2548
                        }
                    }
                },
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'知名俱乐部',
                type:'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'曼联'},
                    {value:310, name:'皇马'},
                    {value:234, name:'巴萨'},
                    {value:135, name:'拜仁'},
                    {value:1548, name:'尤文图斯'},
                    {value:48, name:'阿贾克斯'},
                    {value:348, name:'其它'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '正在努力的读取数据中...'});
    myChart.hideLoading();
>>>>>>> 24af9601e3b6e1b5d54236b1a7231dd310981382
}