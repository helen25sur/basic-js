const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
	let counter = 0;
	for (let i = 0; i < matrix.length; i++) {
		if (Array.isArray(matrix[i])) {
			for (const item of matrix[i]) {
				if (item === '^^') {
					counter++;
				}
			}
		}
	}
	return counter;
};
