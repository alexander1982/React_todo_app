var React = require('react');
var createClass = require('create-react-class');
var TodoList = require('TodoList');

var TodoApp = createClass({
	getInitialState() {
		return {
			todos: [
				{
					id: 1,
					text: 'Walk the dog'
				},
				{
					id: 2,
					text: 'Clean shit'
				},
				{
					id: 3,
					text: 'Feed the dog'
				},
				{
					id: 4,
					text: 'Check mail'
				}
			]
		}
	},
	render() {
		var {todos} = this.state;
		return(
		<TodoList todos={todos} />
		)
	}
                          });
module.exports = TodoApp;