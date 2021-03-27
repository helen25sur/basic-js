const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

	calculateDepth(arr) {
		let counter = 1;
		let currentDeep = 0;
		for (let i = 0; i <= arr.length; i++) {
			if (arr[0] === undefined) {
				return 1;
			} else if (Array.isArray(arr[i])) {
				currentDeep = Math.max(currentDeep, this.calculateDepth(arr[i])); 
			}
		}
		return currentDeep+counter;
	}
};