var React = require('react');
var createClass = require('create-react-class');
var moment = require('moment');

var Todo = createClass({
	                       render() {
		                       var {id, text, completed, createdAt, completedAt} = this.props;
		                       var renderDate = () => {
			                       var message = ' Created at ';
			                       var time = createdAt;
														if(completed) {
															message = 'Completed at ';
															time = completedAt;
														}	
			                       return message + moment.unix(time).format('MMM Do @ h:mm a');
		                       };
		                       return (
		                       <div onClick={() => {
		                        this.props.onToggle(id);
		                       }}>
			                       <input type="checkbox" checked={completed}/>
			                       <label>
				                       {text} - - - -
					                       ({renderDate()})
			                       </label>
		                       </div>
		                       )
	                       }
                       });
module.exports = Todo;