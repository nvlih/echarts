function drewpiegraph() {
    var myChart = echarts.init(document.getElementById('main'));
    option = {
        title : {
            text: '鏌愮珯鐐圭敤鎴疯闂潵婧�',
            subtext: '绾睘铏氭瀯',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient : 'vertical',
            x : 'left',
            data:['鐩存帴璁块棶','閭欢钀ラ攢','鑱旂洘骞垮憡','瑙嗛骞垮憡','鎼滅储寮曟搸']
        },
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        series : [
            {
                name:'璁块棶鏉ユ簮',
                type:'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'鐩存帴璁块棶'},
                    {value:310, name:'閭欢钀ラ攢'},
                    {value:234, name:'鑱旂洘骞垮憡'},
                    {value:135, name:'瑙嗛骞垮憡'},
                    {value:1548, name:'鎼滅储寮曟搸'}
                ]
            }
        ]
    };
    myChart.setOption(option);
}
