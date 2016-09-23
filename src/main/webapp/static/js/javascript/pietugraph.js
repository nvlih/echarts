function pietugraph() {
    var myChart = echarts.init(document.getElementById('main'));
    var option = {
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['鏇艰仈','鐨囬┈','宸磋惃','鎷滀粊','灏ゆ枃鍥炬柉','闃胯淳鍏嬫柉','鍏跺畠']
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
                name:'鐭ュ悕淇变箰閮�',
                type:'pie',
                radius : '75%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'鏇艰仈'},
                    {value:310, name:'鐨囬┈'},
                    {value:234, name:'宸磋惃'},
                    {value:135, name:'鎷滀粊'},
                    {value:1548, name:'灏ゆ枃鍥炬柉'},
                    {value:48, name:'闃胯淳鍏嬫柉'},
                    {value:348, name:'鍏跺畠'}
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '姝ｅ湪鍔姏鐨勮鍙栨暟鎹腑...'});
    myChart.hideLoading();
}