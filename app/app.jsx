var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');
var $ = require('jquery');
window.jQuery = $;
var TodoApp = require('TodoApp');

//Load Foundation
$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
<p>Hi</p>,
	//<Router history={hashHistory}>
	//	<Route path="/" component={TodoApp}>
	//		<IndexRoute component=""/>
	//		<Route path="/" component=""/>
	//	</Route>
	//</Router>,
  document.getElementById('app')
);

require('./redux-example.jsx');

