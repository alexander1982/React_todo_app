var React = require('react');
var createClass = require('create-react-class');

var uuid = require('node-uuid');
var moment = require('moment');
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
var TodoAPI = require('TodoAPI');

var TodoApp = createClass({
	                          getInitialState() {
		                          return {
			                          showCompleted: false,
			                          searchText   : '',
			                          todos        : TodoAPI.getTodos()
		                          }
	                          },
	                          componentDidUpdate() {
															TodoAPI.setTodos(this.state.todos);
	                          },
	                          handleAddTodo(text) {
		                          this.setState({
			                                        todos: [
				                                        ...this.state.todos,
				                                        {
					                                        text     : text,
					                                        id       : uuid(),
					                                        completed: false,
					                                        createdAt: moment().unix(),
					                                        completedAt: undefined
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
		                          var { todos ,showCompleted, searchText} = this.state;
		                          var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		                          return (
		                          <div>
			                          <h1 className="page-title">Todo App</h1>
			                          <div className="row">
				                          <div className="column small-centered small-11 medium-6 large-5">
					                          <div className="container">
						                          <TodoSearch onSearch={this.handleSearch}/>
						                          <TodoList/>
						                          <AddTodo onAddTodo={this.handleAddTodo}/>
					                          </div>
				                          </div>
			                          </div>
		                          </div>
		                          )
	                          }
                          });
module.exports = TodoApp;