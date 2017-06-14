var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current time: ' + now.unix());

var timestamp = 1497357681;

var currentMoment = moment.unix(timestamp);
console.log('Current moment: ' + currentMoment.format('MMMM Do, YYYY h:mm:ssA'));
//Timer
setInterval(() => {
	var stamp = moment().unix();
	var current = moment.unix(stamp);
	console.log(current.format('h:mm:ssA'));
},1000);