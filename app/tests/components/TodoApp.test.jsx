var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('Should exist', () => {
		expect(TodoApp).toExist()
	});

	it('Should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'test';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
	});
});