function dbtgraph() {
    var myChart = echarts.init(document.getElementById('main'));

    var option = {
        title : {
            text: '浼婂竷 vs 缃楃撼灏斿锛坹b vs lned锛�',
            subtext: '绾睘铏氭瀯'
        },
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            orient : 'vertical',
            x : 'right',
            y : 'bottom',
            data:['浼婂竷','缃楃撼灏斿']
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
                    { text: '澶寸悆锛坔eader锛�', max: 100},
                    { text: '宸﹁剼锛坙eft foot锛�', max: 100},
                    { text: '鍙宠剼锛坮ight foot锛�', max: 100},
                    { text: '閫熷害锛坰peed锛�', max: 100},
                    { text: '鎰忚瘑锛坈onsciousness锛�', max: 100},
                    { text: '鎶�鏈紙technology锛�', max: 100}
                ]
            }
        ],
        calculable : true,
        series : [
            {
                name: '浼婂竷 vs 缃楃撼灏斿锛坹b vs lned锛�',
                type: 'radar',
                data : [
                    {
                        value : [80, 98, 100, 100, 100, 100],
                        name : '浼婂竷锛坹b锛�'
                    },
                    {
                        value : [90, 75, 100, 91, 100, 100],
                        name : '缃楃撼灏斿锛坙ned锛�'
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    myChart.showLoading({text: '姝ｅ湪鍔姏鐨勮鍙栨暟鎹腑...'});
    myChart.hideLoading();
}
