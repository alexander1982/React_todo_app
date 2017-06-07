var React = require('react');
var createClass = require('create-react-class');

var AddTodo = createClass({
	                          onSubmit(e) {
		                          e.preventDefault();

		                          var todoText = this.refs.todoText.value;
		                          if(todoText.length > 0){
			                          this.refs.todoText.value = '';
			                          this.props.onAddTodo(todoText);
		                          } else {
			                          this.refs.todoText.focus();
		                          }
	                          },
	                          render() {
		                          return (
		                            <div>
			                            <form ref="form" className="todoForm" onSubmit={this.onSubmit}>
				                            <input ref="todoText" type="text" placeholder="Add Todo"/>
				                            <button className="button expanded">Add</button>
			                            </form>
		                            </div>
		                          )
	                          }
                          });
module.exports = AddTodo;