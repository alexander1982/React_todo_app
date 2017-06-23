var expect = require('expect');
var reducers = require('Reducers');
var df = require('deep-freeze-strict');
var uuid = require('node-uuid');
var moment = require('moment');

describe('Reducers', () => {
	
	describe('SearchTextReducer', () => {
		it('Should set searchText', () => {
			var action = {
				type: 'SET_SEARCH_TEXT',
				text: 'Some generic search text'
			};
			
			var res = reducers.searchTextReducer(df(''), df(action));
			expect(res).toEqual(action.searchText);
		});
	});
	
	describe('ShowCompleted', () => {
		it('Should flip showCompleted status', () => {
			var action = {
				type: 'TOGGLE_SHOW_COMPLETED'
			};
			
			var res = reducers.showCompletedReducer(df(false), df(action));
			expect(res).toEqual(true);
		});
	});

	describe('addTodo', () => {
		it('Should add text', () => {
			var action = {
				type: 'ADD_TODO',
				text: 'Some generic todo'
			};

			var res = reducers.addTodoReducer(df([]), df(action));
			expect(res.length).toEqual(1);
			expect(res[0].text).toEqual(action.text);
		})
	});
	
	describe('ToggleTodo', () => {
		it('Should return id of a todo', () => {
			var todos = [{
				id: 55,
				text: 'Some generic text',
				completed: true,
				createdAt: 125,
				completedAt: 126
			}];
			var action = {
				type: 'TOGGLE_TODO',
				id: 55
			};
			
			var res = reducers.toggleTodoReducer(df(todos), df(action));
			expect(res[0].completed).toEqual(false);
			expect(res[0].completedAt).toEqual(undefined);
		});
	});
});