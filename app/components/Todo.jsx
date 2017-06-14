var React = require('react');
var createClass = require('create-react-class');
var moment = require('moment');

var Todo = createClass({
	                       render() {
		                       var { id, text, completed, createdAt, completedAt } = this.props;
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
		                        this.props.onToggle(id);
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
module.exports = Todo;