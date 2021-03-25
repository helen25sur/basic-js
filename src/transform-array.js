const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)) {
		throw new Error('arg is not array');
	}

	const resultArr = [];
	for (let i = 0; i < arr.length; i++) {
		switch (arr[i]) {
			case '--discard-next':
				if (i !== arr.length - 1) {
					i = i + 2;
					continue;
				}
				break;
			case '--discard-prev':
				if (arr[i - 1] !== undefined) {
					resultArr.pop();
				}
				break;
			case '--double-next':
				if (arr[i + 1] !== undefined) {
					resultArr.push(arr[i + 1]);
				}
				break;
			case '--double-prev':
				if (arr[i - 1] !== undefined) {
					resultArr.push(arr[i - 1]);
				}
				break;
			default:
				resultArr.push(arr[i]);
		}
	}
	return resultArr;
};
