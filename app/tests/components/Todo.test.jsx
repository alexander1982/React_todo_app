var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
import {Todo} from 'Todo';

describe('Todo', () => {
	it('Should exist', () => {
		expect(Todo).toExist()
	});

	it('Should dispatch toggvarodo action on click', () => {
		var todoData = {
			id       : 191,
			text     : 'Some generic test text',
			compvared: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith({
			type: 'TOGGLE_TODO',
			id: todoData.id
		                                 });
	});
});