/*
* @Author: Wangxi
* @Date:   2018-01-16 10:14:14
* @Last Modified by:   Wangxi
* @Last Modified time: 2018-01-20 20:20:52
*/
var webpack = require("webpack");
var path = require("path");

module.exports = {
	context: __dirname + "/src",
	entry: "./js/index.js",
	module: {
		loaders: [{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: "babel-loader",
			query: {
				presets: ["react","es2015"]
			}
		}]
	},
	output: {
		path: __dirname+"/src",
		filename: "bundle.js"
	}
};