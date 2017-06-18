var redux = require('redux');
var axios = require('axios');

var nameReducer = (state = '', action) => {
	switch(action.type){
		case 'CHANGE_NAME':
			return action.name;
		default:
			return state;
	}
};

var changeName = (name) => {
	return {
		type: 'CHANGE_NAME',
		name
	}
};

var nextHobbyId = 1;
var hoobiesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_HOBBY':
			return [
				...state,
				{
					id   : nextHobbyId++,
					hobby: action.hobby
				}
			];
		case 'REMOVE_HOBBY':
			return state.filter((hobby) => {
				return hobby.id != action.id
			});
		default:
			return state;
	}
};

var addHobby = (hobby) => {
	return {
		type: 'ADD_HOBBY',
		hobby
	}
};

var removeHobby = (id) => {
	return {
		type: 'REMOVE_HOBBY',
		id
	}
};

var addMovie = (movie) => {
	return {
		type : 'ADD_MOVIE',
		title: movie.title,
		genre: movie.genre
	}
};

var removeMovie = (id) => {
	return {
		type: 'REMOVE_MOVIE',
		id
	}
};

var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
	switch(action.type){
		case 'ADD_MOVIE':
			return [
				...state,
				{
					id   : nextMovieId++,
					movie: action.movie
				}
			];
		case 'REMOVE_MOVIE':
			return state.filter((movie) => {
				return movie.id !== action.id;
			});
		default:
			return state;
	}
};

var mapReducer = (state = { isFetching: false, url: undefined }, action) => {
	switch(action.type){
		case 'START_LOCATION_FETCH':
			return {
				isFetching: true,
				url       : undefined
			};
		case 'COMPLETE_LOCATION_FETCH':
			return {
				isFetching: false,
				url       : action.url
			};
		default:
			return state;
	}
};


var startLocationFetch = () => {
	return {
		type: 'START_LOCATION_FETCH'
	}
};

var completeLocationFetch = (url) => {
	return {
		type: 'COMPLETE_LOCATION_FETCH',
		url
	}
};

var fetchLocation = () => {
	store.dispatch(startLocationFetch());
	axios.get('http://ipinfo.io').then((res) => {
		var location = res.data.loc;
		var baseUrl = 'http://maps.google.com?q=';

		store.dispatch(completeLocationFetch(baseUrl + location));
	});
};

var reducer = redux.combineReducers({
	                                    name   : nameReducer,
	                                    hobbies: hoobiesReducer,
	                                    movies : moviesReducer,
	                                    map    : mapReducer
                                    });
var store = redux.createStore(reducer, redux.compose(
window.devToolsExtension? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
	var state = store.getState();

	if(state.map.isFetching) {
		document.getElementById('app').innerHTML = 'Loaading';
	} else if (state.map.url) {
		document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blanc">View Your Location</a>';
	}

	console.log('New State ', store.getState());
});

fetchLocation();

store.dispatch(changeName('Alexander'));
store.dispatch(addMovie('Star wars', 'action'));
store.dispatch(addMovie('Mad Max', 'action'));
store.dispatch(addHobby('Running'));
store.dispatch(addHobby('Winning'));
console.log(store.getState());
store.dispatch(removeHobby(1));
store.dispatch(removeMovie(1));

console.log(store.getState());
