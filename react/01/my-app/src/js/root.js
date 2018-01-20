/*
* @Author: Wangxi
* @Date:   2018-01-16 19:38:27
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-16 20:10:14
*/
import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./index";
import ComponentList from "./components/List";
import {Router,Route,hashHistory} from "react-router";

export default class Root extends React.Component{
	//这里替换了之前的Index,变成了程序的入口
	render(){
		return(
		<Router history={hashHistory}>
			<Route component={Index} path="/">
			</Route>
			<Route component={ComponentList} path="list">
			</Route>
		</Router>
		);
	};
}

//ReactDOM.render(Component,Element)
//将自己定义的Component绑定到html文件的指定Element上
ReactDOM.render(<Root/>,document.getElementById("example"));