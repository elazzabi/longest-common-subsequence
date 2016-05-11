'use strict';

function createArray(dimension) {
	let array = [];

	for (let i = 0; i < dimension; i++) {
		array[i] = [];
	}

	return array;
}

module.exports = function (firstSequence, secondSequence, caseSensitive) {
	let firstString = caseSensitive ? firstSequence : firstSequence.toLowerCase();
	let secondString = caseSensitive ? secondSequence : secondSequence.toLowerCase();

	if (firstString === secondString) {
		return firstString;
	}

	if ((firstString || secondString) === '') {
		return '';
	}

	let firstStringLength = firstString.length;
	let secondStringLength = secondString.length;
	let lcsMatrix = createArray(secondStringLength + 1);

	for (let i = 0; i <= firstStringLength; i++) {
		lcsMatrix[0][i] = 0;
	}

	for (let i = 0; i <= secondStringLength; i++) {
		lcsMatrix[i][0] = 0;
	}

	for (let i = 1; i <= secondStringLength; i++) {
		for (let j = 1; j <= firstStringLength; j++) {
			if (firstString[i - 1] === secondString[j - 1]) {
				lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1;
			} else {
				lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
			}
		}
	}

	let lcs = "";
	let i = secondStringLength;
	let j = firstStringLength;

	while (i > 0 && j > 0) {
		if (firstString[i - 1] === secondString[j - 1]) {
			lcs = firstString[i - 1] + lcs;
			i--;
			j--;
		} else if (Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]) === lcsMatrix[i - 1][j]) {
			i--;
		} else {
			j--;
		}
	}

	return lcs;
};
