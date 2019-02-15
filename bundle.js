(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const updateWord = require("./util");

const dictionary = {
	adjectives: [
		"abominable",
		"reprehensible",
		"sorry",
		"intolerable",
		"illiterate",
		"troublesome",
		"undeserving"
	],
	expletives: [
		"shit",
		"fuck",
		"excuse",
		"ass",
		"twat",
		"cunt",
		"goddamn",
		"damn"
	],
	nouns: [
		"goblin",
		"waffle",
		"pastry",
		"truck",
		"elbow",
		"plum",
		"llama"
	]
};

/**
 * Generate a new word for each field and update document.
 */
const onGenerateBtnClick = () => {
	const elements = {
		adjectives: "#adjective-field",
		expletives: "#expletive-field",
		nouns: "#noun-field"
	};

	Object.keys(dictionary).forEach(key => {
		updateWord(dictionary[key], elements[key]);
	});
};

/**
 * Events to be handled
 */
const callback = () => {
	document
		.querySelector("#generate-btn")
		.addEventListener("click", onGenerateBtnClick);
};

/**
 * Register events on document ready
 */
if (
	document.readyState === "complete" ||
	(document.readyState === "loading" &&
		!document.documentElement.doScroll)
) {
	callback();
} else {
	document.addEventListener("DOMContentLoaded", () =>
		callback()
	);
}

},{"./util":2}],2:[function(require,module,exports){
/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 */
const _getRandomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return (
		Math.floor(Math.random() * (max - min)) + min
	);
};

/**
 * Returns a random element from a given array.
 */
const _getRandomElement = arr => {
	const max = arr.length;
	const index = _getRandomInt(0, max);

	return arr[index];
};

/**
 * Randomly chooses a new word and updates the document.
 */
module.exports = updateWord = (arr, elem) => {
	// Create a new node from a randomly chosen string
	const newNode = document.createTextNode(
		_getRandomElement(arr)
	);

	// Find element in document
	const wordField = document.querySelector(elem);

	// Remove element's first child
	wordField.removeChild(wordField.childNodes[0]);

	// Append textNode
	wordField.appendChild(newNode);
};

},{}]},{},[1]);
