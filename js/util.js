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
