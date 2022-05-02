const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = Array.from(String(n));
  let minNum = Math.min(...arr);
  let str = '';
  const index1 = arr.indexOf(String(minNum));
  arr.forEach((item, i) => {
    if (i !== index1) str += item;
  });
  let minNumNext = Math.min(...Array.from(str));
  let strAdd = '';
  const index2 = arr.indexOf(String(minNumNext));
  arr.forEach((item, i) => {
    if (i !== index2) strAdd += item;
  });

  if (+str >= +strAdd) return +str;
  if (+str < +strAdd) return +strAdd;
}

module.exports = {
  deleteDigit
};
