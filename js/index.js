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
