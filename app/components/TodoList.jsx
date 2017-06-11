var React = require('react');
var createClass = require('create-react-class');
var Todo = require('Todo');

var TodoList = createClass({
	                           render() {
		                           var {todos} = this.props;
		                           var renderTodos = () => {
			                           return todos.map((todo) => {
				                           return (
				                           <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
				                           )
			                           });
		                           };
		                           return (
		                           <div>
			                           {renderTodos()}
		                           </div>
		                           )
	                           }
                           });
module.exports = TodoList;