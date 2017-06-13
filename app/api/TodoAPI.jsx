var $ = require('jquery');

module.exports = {
	setTodos(todos) {
		if($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
	  }
	},
	getTodos() {
			var stringTodos = localStorage.getItem('todos');
			var todos = [];
		
		try {
			todos = JSON.parse(stringTodos);
		}catch(e) {
			console.log('From getTodos: ' + e);
		}
		
		return $.isArray(todos) ? todos : [];
	},
	filterTodos(todos, showCompleted,searchText) {
		var filteredTodos = todos;
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		filteredTodos = filteredTodos.filter((todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});

		filteredTodos.sort(function(a, b) {
			var textA = a.text;
			var textB = b.text;
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});

		filteredTodos.sort((a, b) => {
			if(!a.completed && b.completed) {
				return -1;
			} else if(a.completed && !b.completed){
				return 1;
			} else {
				return 0;
			}
		});

		return filteredTodos;
	}
};