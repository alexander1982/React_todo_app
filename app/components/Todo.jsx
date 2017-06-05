var React = require('react');
var createClass = require('create-react-class');

var Todo = createClass({
	                       render() {
		                       var {id, text} = this.props;
		                       return (
		                       <div>{id}.{text}</div>
		                       )
	                       }
                       });
module.exports = Todo;