/*
* @Author: Wangxi
* @Date:   2018-01-16 14:57:50
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-16 15:07:14
*/
import React from "react";
import ReactDOM from "react-dom";

export default class HeaderChild extends React.Component{
	render(){//解析模块的输出
		return (
			<div>
				<input type="text" onChange={this.props.handleChildValueChange}/>
				{/*
					由props设置的外部属性(函数)由调用方传入具体值或者具体实现
				*/}
			</div>
		)
	}
}