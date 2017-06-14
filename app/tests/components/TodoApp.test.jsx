var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');
var $ = require('jquery');
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('Should exist', () => {
		expect(TodoApp).toExist()
	});

	it('Should add todo to the todos state on handleAddTodo', () => {
		var todoText = 'test';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({ todos: [] });
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('Should toggle completed value when handleToggle called', () => {
		var todoData = {
			id       : 11,
			text     : 'Some generic text',
			completed: false
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			                 todos: [todoData]
		                 });
		
		expect(todoApp.state.todos[0].completed).toBe(false);
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].completedAt).toBeA('number');
	});

	it('Should toggle from true to false completedAt gets removed', () => {
		var todoData = {
			id       : 11,
			text     : 'Some generic text',
			completed: true,
			completedAt: moment().unix()
		};
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({
			                 todos: [todoData]
		                 });
		
		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].completedAt).toBe(undefined);
	});
});