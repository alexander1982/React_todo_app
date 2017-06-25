var redux = require('redux');
//var { nameReducer, hobbiesReducer, moviesReducer, mapReducer } = require('./../reducers/index.jsx');
//var thunk = require('redux-thunk').default;
//
//export var configure = () => {
//	var store;
//	var reducer = redux.combineReducers({
//		                                    name   : nameReducer,
//		                                    hobbies: hobbiesReducer,
//		                                    movies : moviesReducer,
//		                                    map    : mapReducer
//	                                    });
//	store = redux.createStore(reducer, redux.compose(
//	redux.applyMiddleware(thunk),
//	window.devToolsExtension? window.devToolsExtension() : f => f
//	));
//
//	return store;
//};
var { searchTextReducer, showCompletedReducer, todosReducer } = require('Reducers');

export var configure = (initialState = {}) => {
	var reducer = redux.combineReducers({
		                                    searchText   : searchTextReducer,
		                                    showCompleted: showCompletedReducer,
		                                    todos        : todosReducer
	                                    });
	var store = redux.createStore(reducer, initialState, redux.compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	));

	return store;
};