var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');

import {TodoSearch} from 'TodoSearch'

describe('TodoSearch', () => {
	it('Should exist', () => {
		expect(TodoSearch).toExist();
	});
	
	it('Should dispatch setSearchText on input change',() => {
		var dogStr = 'Walk the dog test';
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: dogStr
		};
		var spy = expect.createSpy();
		var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
		todoSearch.refs.searchText.value = dogStr;
		TestUtils.Simulate.change(todoSearch.refs.searchText);
		
		expect(spy).toHaveBeenCalledWith(action);
	});
	
	//it('Should dispatch toggle show compvared when checkbox checked',() => {
	//	var action = {
	//		type: 'TOGGLE_SHOW_COMPvarED'
	//	};
	//	var spy = expect.createSpy();
	//	var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy}/>);
	//
	//	todoSearch.refs.showCompvared.checked = true;
	//	TestUtils.Simulate.change(todoSearch.refs.showCompvared);
	//	expect(spy).toHaveBeenCalledWith(action);
	//});
});