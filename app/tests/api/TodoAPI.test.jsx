var expect = require('expect');
var TodoAPI = require('TodoAPI');

describe('TodoApi', () => {
	beforeEach(() => {
		localStorage.removeItem('todos');
	});
	it('Should exist', () => {
		expect(TodoAPI).toExist()
	});
	
	describe('setTodos', () => {
		it('Should set valid todos array', () => {
			var todos = [{
				id: 24,
				text: 'Testing',
				completed: false
			}];
			TodoAPI.setTodos(todos);
			
			var actualTodos = JSON.parse(localStorage.getItem('todos'));
			
			expect(actualTodos).toEqual(todos);
		});
		it('Should not set invalid todos array', () => {
			var badTodos = {a: 'b'};
			TodoAPI.setTodos(badTodos);

			expect(localStorage.getItem('todos')).toBe(null);
		});
		
	});

	describe('getTodos', () => {
		it('Should return empty array for bad local storage data', () => {
		var actualTodos = TodoAPI.getTodos();
		expect(actualTodos).toEqual([]);
	});
});

	it('Should return todo if valid array in local storage', () => {
		var todos = [{
			id: 23,
			test: 'test files',
			completed: false
		}];
		localStorage.setItem('todos', JSON.stringify(todos));
		var actualTodos = TodoAPI.getTodos();
		expect(actualTodos).toEqual(todos);
	});
});