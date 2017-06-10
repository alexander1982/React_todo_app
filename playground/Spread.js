function add (a, b) {
	return a+b;
}


console.log(add(1, 3));

var toAdd = [9, 5];
console.log(add(...toAdd));

var groupA = ['Jen', 'John'];
var groupB = ['Bob', 'Bae'];
var final = [...groupA, ...groupB];
console.log(final);

var person1 = ['Bob', 35];
var person2 = ['Jenny', 32];
var names = ['Mike', 'Ben'];
var finalArr = ['Alex', ...names];

function greeting(name, age) {
	console.log('Hi ' + name + ', ' + 'you are ' + age);
}

function hi(namesArr) {
	namesArr.forEach((name) => {
		console.log('Hi ' + name);
	})
}

greeting(...person1);
greeting(...person2);
hi(finalArr);