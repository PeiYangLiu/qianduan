/*
* @Author: Wangxi
* @Date:   2018-01-20 20:26:52
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-20 22:11:58
*/
import React, { Component } from 'react';

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    constructor() {
        super();
        this.state = {
            data: {
            title: { text: 'ECharts 入门示例' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }
        };

    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(document.getElementById('main'));
        // 绘制图表
        this.myChart.setOption(this.state.data);
    }
    render() {
        setInterval(
            ()=>{
                var xmlhttp;
                if (window.XMLHttpRequest) {
                    // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                    xmlhttp = new XMLHttpRequest();
                } else {
                    // IE6, IE5 浏览器执行代码
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
                }
                var temp = this;
                xmlhttp.onreadystatechange = function() {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        console.log(JSON.parse(xmlhttp.responseText));
                        temp.myChart.setOption(JSON.parse(xmlhttp.responseText));
                    }
                }
                xmlhttp.open("POST", "http://127.0.0.1:8081/echarts", true);
                xmlhttp.send();
            },
            1000);
        return (
            <div id="main" style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;