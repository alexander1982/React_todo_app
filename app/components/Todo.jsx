var React = require('react');
var createClass = require('create-react-class');

var Todo = createClass({
	                       render() {
		                       var {id, text, completed} = this.props;
		                       return (
		                       <div onClick={() => {
		                        this.props.onToggle(id);
		                       }}>
			                       <input type="checkbox" checked={completed}/>
			                       {text}
		                       </div>
		                       )
	                       }
                       });
module.exports = Todo;