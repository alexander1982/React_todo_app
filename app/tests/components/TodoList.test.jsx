var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
	it('Should exist', () => {
		expect(TodoList).toExist()
	});

	it('Should render component for each todo', () => {
		var todos = [
			{
				id  : 1,
				text: 'Walk the dog'
			},
			{
				id  : 2,
				text: 'Clean shit'
			}
		];

		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

		expect(todosComponents.length).toBe(todos.length);
	});
});
