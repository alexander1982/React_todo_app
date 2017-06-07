var React = require('react');
var createClass = require('create-react-class');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = createClass({
	                          getInitialState() {
		                          return {
			                          showCompleted: false,
			                          searchText   : '',
			                          todos: [
				                          {
					                          id  : 1,
					                          text: 'Walk the dog'
				                          },
				                          {
					                          id  : 2,
					                          text: 'Clean shit'
				                          },
				                          {
					                          id  : 3,
					                          text: 'Feed the dog'
				                          },
				                          {
					                          id  : 4,
					                          text: 'Check mail'
				                          }
			                          ]
		                          }
	                          },
	                          handleAddTodo(text) {
		                          alert(text);
	                          },
	                          handleSearch(showCompleted, searchText) {
		                          this.setState({
			                                        showCompleted: showCompleted,
			                                        searchText   : searchText.toLowerCase()
		                                        })
	                          },
	                          render() {
		                          var { todos } = this.state;
		                          return (
		                          <div>
			                          <TodoSearch onSearch={this.handleSearch}/>
			                          <TodoList todos={todos}/>
			                          <AddTodo onAddTodo={this.handleAddTodo}/>
		                          </div>
		                          )
	                          }
                          });
module.exports = TodoApp;