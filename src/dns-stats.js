const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dns = {};
  const helperArr = [];

  domains.forEach((item, i) => {
    helperArr.push(item.split('.'));
  });
  helperArr.forEach((item, i) => {
    const str = item.reduceRight((previousValue, currentValue) => {
      if (!(`.${previousValue}.${currentValue}` in dns)) {
          dns[`.${previousValue}.${currentValue}`] = 1;
      } else {
          dns[`.${previousValue}.${currentValue}`]++;
      }
        return `${previousValue}.${currentValue}`;
    });
    if (!(`.${item[item.length - 1]}` in dns)) {
        dns[`.${item[item.length - 1]}`] = 1;
    } else {
        dns[`.${item[item.length - 1]}`]++
    }
    })
  return dns;
}

module.exports = {
  getDNSStats
};
