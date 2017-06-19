var redux = require('redux');
var axios = require('axios');
var actions = require('./actions/index.jsx');
var store = require('./store/configureStore.jsx').configure();

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	if(state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loaading';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blanc">View Your Location</a>';
	}

	console.log('New State ', store.getState());
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Alexander'));
store.dispatch(actions.addMovie('Star wars', 'action'));
store.dispatch(actions.addMovie('Mad Max', 'action'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.addHobby('Winning'));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.removeMovie(1));

console.log(store.getState());
