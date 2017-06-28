var React = require('react');
var {connect} = require('react-redux');
var actions = require('Actions');
var createClass = require('create-react-class');

export var AddTodo = createClass({
	                          handleSubmit(e) {
		                          e.preventDefault();
															var {dispatch} = this.props;
		                          var todoText = this.refs.todoText.value;
		                          if(todoText.length > 0){
			                          this.refs.todoText.value = '';
			                          dispatch(actions.addTodo(todoText));
		                          } else {
			                          this.refs.todoText.focus();
		                          }
	                          },
	                          render() {
		                          return (
		                            <div className="container-footer">
			                            <form ref="form" className="todoForm" onSubmit={this.handleSubmit}>
				                            <input ref="todoText" type="text" placeholder="Add Todo"/>
				                            <button className="button expanded success">ADD</button>
			                            </form>
		                            </div>
		                          )
	                          }
                          });

export default connect()(AddTodo);