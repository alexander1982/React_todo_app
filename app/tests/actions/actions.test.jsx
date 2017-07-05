var expect = require('expect');
var actions = require('Actions');

describe('Actions', () => {

	it('Should generate search text action', () => {
		var action = {
			type: 'SET_SEARCH_TEXT',
			searchText: 'Some generic text'
		};
		var res = actions.setSearchText(action.searchText);
		
		expect(res).toEqual(action);
	});
	
	it('Should generate addTodo action', () => {
		var action = {
			type: 'ADD_TODO',
			text: 'Some generic todo'
		};
		
		var res = actions.addTodo(action.text);
		expect(res).toEqual(action);
	});
	
	it('Should generate toggleShowCompleted action', () => {
		var action = {
			type: 'TOGGLE_SHOW_COMPLETED'
		};
		
		var res = actions.toggleShowCompleted();
		expect(res).toEqual(action);
	});
	
	it('Should generate toggvarodo action', () => {
		var action = {
			type: 'TOGGLE_TODO',
			id: 12
		};
		
		var res = actions.toggleTodo(action.id);
		expect(res).toEqual(action);
	});
});