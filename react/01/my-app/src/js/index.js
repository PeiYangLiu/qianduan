/*
* @Author: Wangxi
* @Date:   2018-01-16 10:18:51
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-20 20:29:05
*/

//这个文件会通过package打包成一个大型的js
//然后再由html一次引用

var React = require("react");
var ReactDOM = require("react-dom");

import ComponentHeader from "./components/header"
import EchartsTest from "./components/echart"
class Index extends React.Component{
	render(){
		return(
		<div>
		<ComponentHeader userid="123"/>
		<EchartsTest/>
		</div>
		);
	}
}
//ReactDOM.render(Component,Element)
//将自己定义的Component绑定到html文件的指定Element上
ReactDOM.render(<Index/>,document.getElementById("example"));