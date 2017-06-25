var React = require('react');
var {connect} = require('react-redux');
var createClass = require('create-react-class');
import Todo from 'Todo';

export var TodoList = createClass({
	                           render() {
		                           var {todos} = this.props;
		                           var renderTodos = () => {
			                           if(todos.length === 0) {
				                           return (
				                           <p className="container-message">Nothing to do...</p>
				                           )
			                           }
			                           return todos.map((todo) => {
				                           return (
				                           <Todo key={todo.id} {...todo}/>
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
export default connect(
(state) => {
	return {
		todos: state.todos
	};
}
)(TodoList);