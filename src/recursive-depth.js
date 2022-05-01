const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
		let currentDeep = 0;
    arr.forEach((item, i) => {
      if (arr[0] === undefined) return 1;
      else if (Array.isArray(item)) {
        currentDeep = Math.max(currentDeep, this.calculateDepth(item));
      }
    });

		return currentDeep+counter;
	}
}

module.exports = {
  DepthCalculator
};
