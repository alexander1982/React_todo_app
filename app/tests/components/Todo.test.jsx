var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jquery');
var Todo = require('Todo');

describe('Todo', () => {
	it('Should exist', () => {
		expect(Todo).toExist()
	});
});