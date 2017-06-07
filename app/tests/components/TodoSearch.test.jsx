var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('Should exist', () => {
		expect(TodoSearch).toExist();
	});
	
	it('Should call onSearch with entered input text',() => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
		var dogStr = 'Walk the dog test';
		
		todoSearch.refs.searchText.value = dogStr;
		TestUtils.Simulate.change(todoSearch.refs.searchText);
		expect(spy).toHaveBeenCalledWith(false, dogStr);
	});

	it('Should call onSearch with proper checked value',() => {
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		todoSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(todoSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(true, '');
	});
});