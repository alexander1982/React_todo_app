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
			                          todos: [
				                          {
					                          id  : uuid(),
					                          text: 'Walk the dog'
				                          },
				                          {
					                          id  : uuid(),
					                          text: 'Clean shit'
				                          },
				                          {
					                          id  : uuid(),
					                          text: 'Feed the dog'
				                          },
				                          {
					                          id  : uuid(),
					                          text: 'Check mail'
				                          }
			                          ]
		                          }
	                          },
	                          handleAddTodo(text) {
		                          this.setState({
			                          todos: [
			                          ...this.state.todos,
			                          {
				                          text: text,
				                          id: uuid()
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