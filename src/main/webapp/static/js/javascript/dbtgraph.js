<<<<<<< HEAD
function dbtgraph() {
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title : {
            text: '伊布 vs 罗纳尔多（yb vs lned）',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['伊布','罗纳尔多']
        },
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: true}
            }
        },
        polar : [
            {
                indicator : [
                    { text: '头球（header）', max: 100},
                    { text: '左脚（left foot）', max: 100},
                    { text: '右脚（right foot）', max: 100},
                    { text: '速度（speed）', max: 100},
                    { text: '意识（consciousness）', max: 100},
                    { text: '技术（technology）', max: 100}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '伊布 vs 罗纳尔多（yb vs lned）',
                type: 'radar',
                data : [
                    {
                        value : [80, 98, 100, 100, 100, 100],
                        name : '伊布（yb）'
                    },
                    {
                        value : [90, 75, 100, 91, 100, 100],
                        name : '罗纳尔多（lned）'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '正在努力的读取数据中...'});
    myChart.hideLoading();
}


=======
function dbtgraph() {
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title : {
            text: '伊布 vs 罗纳尔多（yb vs lned）',
            subtext: '纯属虚构'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['伊布','罗纳尔多']
        },
        toolbox: {
            show : true,
            feature : {
                saveAsImage : {show: true}
            }
        },
        polar : [
            {
                indicator : [
                    { text: '头球（header）', max: 100},
                    { text: '左脚（left foot）', max: 100},
                    { text: '右脚（right foot）', max: 100},
                    { text: '速度（speed）', max: 100},
                    { text: '意识（consciousness）', max: 100},
                    { text: '技术（technology）', max: 100}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '伊布 vs 罗纳尔多（yb vs lned）',
                type: 'radar',
                data : [
                    {
                        value : [80, 98, 100, 100, 100, 100],
                        name : '伊布（yb）'
                    },
                    {
                        value : [90, 75, 100, 91, 100, 100],
                        name : '罗纳尔多（lned）'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '正在努力的读取数据中...'});
    myChart.hideLoading();
}


>>>>>>> 24af9601e3b6e1b5d54236b1a7231dd310981382
