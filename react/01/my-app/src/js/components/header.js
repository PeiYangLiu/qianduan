/*
* @Author: Wangxi
* @Date:   2018-01-16 11:08:14
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-16 17:07:37
*/
import React from "react";
import ReactDOM from "react-dom";
import HeaderChild from "./HeaderChild";
//加export default标记可以让外部文件访问到该类
//否则即使引用了该js文件也无法访问
export default class ComponentHeader extends React.Component{
	componentWillMount(){
		//Component有几个生命周期
		//这是Component即将被加载时做的事
		console.log("正在加载页面");
	};
	componentDidMount(){
		//这是Component加载完成时做的事
	};
	constructor(){//构造器
		super();
		this.state = {
			username:"Parry",
			age:20,
			miniheader: false};
		//state用于存储自身属性
		//props用于存储外来属性
	};
	switchHeader(){
		this.setState({
			miniheader: !this.state.miniheader
		});
	};
	changeUserInfo(){
		this.setState({age:50});
		//this必须得由外部数据绑定
		//不然无法识别
	};
	handleChildValueChange(event){
		this.setState({age:event.target.value});
	};
	render(){//解析模块的输出
		// CSS内联式写法
		// 通过定义json对象的方式来写css
		// 并且样式属性的名字与纯CSS有所不同
		// 可以通过加引号的方式来使用原生css
		// 此种方式编译过后成为行内式CSS
		// 不会影响到其它样式
		const styleComponentHeader = {
			header: {
				backgroundColor: "#333333",
				color: (this.state.miniheader) ? "#123456" : "#FFFFFF",
				paddingTop: "15px",
				paddingBottom: "15px",
				"padding-left": "300px"
			}
		}
		return (
			<header style={styleComponentHeader.header} className="smallFont">
				{/*
					外联式CSS写法
					要把class改写成className，方便编译器区分类class标识
					但是这种方式容易污染其它样式
				*/}
				<h1>
					这里是头部
					{this.state.age}
					{this.props.userid}
					{/*
					this.props可以设置外来属性
					调用的时候传参
					 */}
				</h1>
				<input type="button" value="提交" onClick={this.changeUserInfo.bind(this)}/>
				{/*
					事件调用并且数据绑定this
				*/}
				<HeaderChild handleChildValueChange={this.handleChildValueChange.bind(this)}/>
				{/*
					事件调用并且数据绑定this
					传入在被调用页面定义却尚未实现的函数
				*/}
				<input type="button" value="变色" onClick={this.switchHeader.bind(this)}/>
				{/*
					事件调用并且数据绑定this
				*/}
			</header>
		)
	}
}