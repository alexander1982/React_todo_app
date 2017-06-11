var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var Todo = require('Todo');

describe('Todo', () => {
	it('Should exist', () => {
		expect(Todo).toExist()
	});

	it('Should call onToggle prop with id on click', () => {
		var todoData = {
			id       : 191,
			text     : 'Some generic test text',
			completed: true
		};
		var spy = expect.createSpy();
		var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
		var $el = $(ReactDOM.findDOMNode(todo));
		TestUtils.Simulate.click($el[0]);
		expect(spy).toHaveBeenCalledWith(191);
	});
});