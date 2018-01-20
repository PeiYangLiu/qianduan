/*
 * @Author: Wangxi
 * @Date:   2018-01-20 21:03:08
 * @Last Modified by:   Wangxi
 * @Last Modified time: 2018-01-20 22:06:47
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({
  extended: false
})

app.use(express.static('public'));


app.get('/index.htm', function(req, res) {
  res.sendFile(__dirname + "/" + "index.htm");
})

app.post('/process_post', urlencodedParser, function(req, res) {

  // 输出 JSON 格式
  var response = {
    "first_name": req.body.first_name,
    "last_name": req.body.last_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var temp = 1;
app.post('/echarts', urlencodedParser, function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  // 输出 JSON 格式
  var response = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
      name: '销量',
      type: 'bar',
      data: [5+temp, 20+temp, 36+temp, 10+temp, 10+temp, 20+temp]
    }]
  };
  console.log(response);
  res.end(JSON.stringify(response));
  temp++;
})

var server = app.listen(8081, function() {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})