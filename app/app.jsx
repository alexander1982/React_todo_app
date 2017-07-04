var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
//var {Router, Route, hashHistory, IndexRoute} = require('react-router');
var $ = require('jquery');
window.jQuery = $;
var TodoApp = require('TodoApp');
var actions = require('Actions');
var store = require('ConfigureStore').configure();

store.subscribe(() => {
	console.log('New state ', store.getState());
});
//Load Foundation
$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
<Provider store={store}>
	<TodoApp/>
</Provider>,
	//<Router history={hashHistory}>
	//	<Route path="/" component={TodoApp}>
	//		<IndexRoute component=""/>
	//		<Route path="/" component=""/>
	//	</Route>
	//</Router>,
  document.getElementById('app')
);

//require('./redux-example.jsx');

