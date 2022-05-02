const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const resultArr = [];
  arr.forEach((item, i) => {
    if (item === -1) resultArr[i] = -1;
    else resultArr[i] = undefined;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  arr.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < resultArr.length; i++) {
      if (resultArr[i] === undefined) {
        resultArr[i] = arr[j];
        break;
      }
    }
  }
  return resultArr;
}

module.exports = {
  sortByHeight
};
