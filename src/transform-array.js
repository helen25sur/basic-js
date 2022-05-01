const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next':
				if (i !== arr.length - 1) {
					i += 2;
				}
				continue;
			case '--discard-prev':
				if (arr[i - 1] !== undefined && i !== 0) {
					resultArr.pop();
				}
				continue;
			case '--double-next':
				if (arr[i + 1] !== undefined && i !== arr.length - 1) {
					resultArr.push(arr[i + 1]);
				}
				continue;
			case '--double-prev':
				if (arr[i - 1] !== undefined && i !== 0) {
					resultArr.push(arr[i - 1]);
				}
				continue;
		}
		resultArr.push(arr[i]);
	}
	return resultArr;
}

module.exports = {
  transform
};
