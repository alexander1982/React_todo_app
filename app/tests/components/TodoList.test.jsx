var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import {configure} from 'ConfigureStore';
import  {TodoList} from 'TodoList';
import ConnectedTodoList from 'TodoList';
import {Todo} from 'Todo';
import ConnectedTodo from 'Todo';

describe('TodoList', () => {
	it('Should exist', () => {
		expect(TodoList).toExist()
	});

	it('Should render component for each todo', () => {
		var todos = [
			{
				id         : 1,
				text       : 'Walk the dog',
				completed  : false,
				completedAt: undefined,
				createdAt  : 500
			},
			{
				id         : 2,
				text       : 'Clean shit',
				completed  : false,
				completedAt: undefined,
				createdAt  : 500
			}
		];
		var store = configure({ todos });
		var provider = TestUtils.renderIntoDocument(
		<Provider store={store}>
			<ConnectedTodoList/>
		</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
		console.log(store);
		expect(todosComponents.length).toBe(todos.length);
	});

	it('Should render a message if there are no todos', () => {
		var todos = [];
		var store = configure({ todos });
		var provider = TestUtils.renderIntoDocument(
		<Provider store={store}>
			<ConnectedTodoList/>
		</Provider>
		);
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		var $el = $(ReactDOM.findDOMNode(todoList));

		expect($el.find('.container_message').length).toBe(1);
	});
});
