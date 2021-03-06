var React = require('react');
var { connect } = require('react-redux');
var createClass = require('create-react-class');
var actions = require('Actions');

export var TodoSearch = createClass({
	                                    render() {
		                                    var { dispatch, showCompleted, searchText } = this.props;
		                                    return (
		                                    <div>
			                                    <div>
				                                    <input type="search" ref="searchText" placeholder="Search todos"
				                                           value={searchText}
				                                           onChange={() => {
				                                    var searchText = this.refs.searchText.value;
				                                              dispatch(actions.setSearchText(searchText))
				                                            }}
				                                    />
			                                    </div>
			                                    <div>
				                                    <label>
					                                    <input className="checkboxClass" type="checkbox" ref="showCompleted" checked={showCompleted} onChange={() => {
					                                       dispatch(actions.toggleShowCompleted());
					                                    }}/>
					                                    Show completed Todos
				                                    </label>
			                                    </div>
		                                    </div>
		                                    )
	                                    }
                                    });
export default connect(
(state) => {
	return {
		showCompleted: state.showCompleted,
		searchText   : state.searchText
	}
}
)(TodoSearch);
