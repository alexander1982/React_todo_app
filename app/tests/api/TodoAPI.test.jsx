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
			var todos = [
				{
					id       : 24,
					text     : 'Testing',
					completed: false
				}
			];
			TodoAPI.setTodos(todos);

			var actualTodos = JSON.parse(localStorage.getItem('todos'));

			expect(actualTodos).toEqual(todos);
		});
		it('Should not set invalid todos array', () => {
			var badTodos = { a: 'b' };
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
		var todos = [
			{
				id       : 23,
				test     : 'test files',
				completed: false
			}
		];
		localStorage.setItem('todos', JSON.stringify(todos));
		var actualTodos = TodoAPI.getTodos();
		expect(actualTodos).toEqual(todos);
	});
	describe('filterTodos', () => {
		var todos = [
			{
				id: 1,
				text: 'fff',
				completed: false
			},
			{
				id: 2,
				text: 'fff',
				completed: false
			},
			{
				id: 3,
				text: 'fff',
				completed: true
			}
		];
		
		it('Should return all items if showCompvared is true', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, true, '');
			
			expect(filteredTodos.length).toBe(3);
		});

		it('Should return not compvared items if showCompvared is false', () => {
			var filteredTodos = TodoAPI.filterTodos(todos, false, '');

			expect(filteredTodos.length).toBe(2);
		});
	});

	it('Should sort by completed status', () => {
		var todos = [
			{
				id: 1,
				text: 'fff',
				completed: false
			},
			{
				id: 2,
				text: 'fff',
				completed: true
			},
			{
				id: 3,
				text: 'fff',
				completed: true
			}
		];
		var filteredTodos = TodoAPI.filterTodos(todos, true, '');

		expect(filteredTodos[0].completed).toBe(false);
	});
});