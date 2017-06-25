var React = require('react');
var {connect} = require('react-redux');
var createClass = require('create-react-class');
var moment = require('moment');
var actions = require('Actions');

export var Todo = createClass({
	                       render() {
		                       var { id, text, completed, createdAt, completedAt, dispatch} = this.props;
		                       var todoClassName = completed ? 'todo todo-completed' : 'todo';
		                       var renderDate = () => {
			                       var message = ' Created at ';
			                       var time = createdAt;
			                       if(completed){
				                       message = 'Completed at ';
				                       time = completedAt;
			                       }
			                       return message + moment.unix(time).format('MMM Do @ h:mm a');
		                       };
		                       return (
		                       <div className={todoClassName} onClick={() => {
		                        //this.props.onToggle(id);
		                        dispatch(actions.toggleTodo(id));
		                       }}>
			                       <div>
				                       <input type="checkbox" checked={completed}/>
			                       </div>
			                       <label>
				                       <p>
					                       {text}
				                       </p>
				                       <p className="todo__subtext">
					                       ({renderDate()})
				                       </p>

			                       </label>
		                       </div>
		                       )
	                       }
                       });
export default connect()(Todo);
