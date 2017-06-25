var React = require('react');
var ReactDOM = require('react-dom');
var {Router, Route, hashHistory, IndexRoute} = require('react-router');
var $ = require('jquery');
window.jQuery = $;
var TodoApp = require('TodoApp');
var actions = require('Actions');
var store = require('ConfigureStore').configure();


store.subscribe(() => {
	console.log('New state ', store.getState());
});

store.dispatch(actions.addTodo('Clean your shit'));
store.dispatch(actions.setSearchText('shit'));
store.dispatch(actions.toggleShowCompleted());

//Load Foundation
$(document).foundation();

require('style-loader!css-loader!sass-loader!ApplicationStyles');

ReactDOM.render(
<TodoApp/>,
	//<Router history={hashHistory}>
	//	<Route path="/" component={TodoApp}>
	//		<IndexRoute component=""/>
	//		<Route path="/" component=""/>
	//	</Route>
	//</Router>,
  document.getElementById('app')
);

//require('./redux-example.jsx');

