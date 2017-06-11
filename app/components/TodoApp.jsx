var React = require('react');
var createClass = require('create-react-class');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = createClass({
	                          getInitialState() {
		                          return {
			                          showCompleted: false,
			                          searchText   : '',
			                          todos        : [
				                          {
					                          id       : uuid(),
					                          text     : 'Walk the dog',
					                          completed: true
				                          },
				                          {
					                          id       : uuid(),
					                          text     : 'Clean shit',
					                          completed: false
				                          },
				                          {
					                          id       : uuid(),
					                          text     : 'Feed the dog',
					                          completed: false
				                          },
				                          {
					                          id       : uuid(),
					                          text     : 'Check mail',
					                          completed: false
				                          }
			                          ]
		                          }
	                          },
	                          handleAddTodo(text) {
		                          this.setState({
			                                        todos: [
				                                        ...this.state.todos,
				                                        {
					                                        text     : text,
					                                        id       : uuid(),
					                                        completed: false
				                                        }
			                                        ]
		                                        });
	                          },
	                          handleSearch(showCompleted, searchText) {
		                          this.setState({
			                                        showCompleted: showCompleted,
			                                        searchText   : searchText.toLowerCase()
		                                        })
	                          },
	                          handleToggle(id) {
		                          var updatedTodos = this.state.todos.map((todo) => {
			                          if(todo.id === id) {
				                          todo.completed = !todo.completed;
			                          }

			                          return todo;
		                          });

		                          this.setState({
			                          todos: updatedTodos
		                                        });
	                          },
	                          render() {
		                          var { todos } = this.state;
		                          return (
		                          <div>
			                          <TodoSearch onSearch={this.handleSearch}/>
			                          <TodoList todos={todos} onToggle={this.handleToggle}/>
			                          <AddTodo onAddTodo={this.handleAddTodo}/>
		                          </div>
		                          )
	                          }
                          });
module.exports = TodoApp;