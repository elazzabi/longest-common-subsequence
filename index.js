'use strict';

function createArray(dimension) {
	var array = [];

	for (var i = 0; i < dimension; i++) {
		array[i] = [];
	}

	return array;
}

module.exports = function (firstSequence, secondSequence, caseSensitive) {
	var firstString = caseSensitive ? firstSequence : firstSequence.toLowerCase();
	var secondString = caseSensitive ? secondSequence : secondSequence.toLowerCase();

	if (firstString === secondString) {
		return firstString;
	}

	if ((firstString || secondString) === '') {
		return '';
	}

	var firstStringLength = firstString.length;
	var secondStringLength = secondString.length;
	var lcsMatrix = createArray(secondStringLength + 1);

	var i;
	var j;
	for (i = 0; i <= firstStringLength; i++) {
		lcsMatrix[0][i] = 0;
	}

	for (i = 0; i <= secondStringLength; i++) {
		lcsMatrix[i][0] = 0;
	}

	for (i = 1; i <= secondStringLength; i++) {
		for (j = 1; j <= firstStringLength; j++) {
			if (firstString[j - 1] === secondString[i - 1]) {
				lcsMatrix[i][j] = lcsMatrix[i - 1][j - 1] + 1;
			} else {
				lcsMatrix[i][j] = Math.max(lcsMatrix[i - 1][j], lcsMatrix[i][j - 1]);
			}
		}
	}

	var lcs = "";
	i = secondStringLength;
	j = firstStringLength;

	while (i > 0 && j > 0) {
		if (firstString[j - 1] === secondString[i - 1]) {
			lcs = firstString[j - 1] + lcs;
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
