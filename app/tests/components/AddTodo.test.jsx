var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import * as actions from 'Actions';
var {AddTodo} = require('AddTodo');


describe('AddTodo', () => {
	it('Should exist', () => {
		expect(AddTodo).toExist()
	});
	
	it('Should dispatch addTodo when valid todo text', () => {
		var TodoText = 'Hello';
		var action = actions.addTodo(TodoText);
		
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
	
		addTodo.refs.todoText.value = TodoText;
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(action);
	});

	it('Should call onAddTodo with valid input', () => {
		var TodoText = 'Hello';
		var action = actions.addTodo(TodoText);

		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = TodoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(action);
	});

	it('Should not dispatch AD_TODO when invalid todo text', () => {
		var TodoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));

		addTodo.refs.todoText.value = TodoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});
