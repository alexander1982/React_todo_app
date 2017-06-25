var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var moment = require('moment');
var $ = require('jquery');

var configureStore = require('ConfigureStore');
import TodoList from 'TodoList';
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
	it('Should exist', () => {
		expect(TodoApp).toExist()
	});
	
	it('Should render todoList', () => {
		var store = configureStore.configure();
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<TodoApp/>
			</Provider>
		);
		
		var todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
		var todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);
		
		expect(todoList.length).toEqual(1);
	}); 
});