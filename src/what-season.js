const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {

  if (date === undefined) {
		return 'Unable to determine the time of year!';
	}
  if (Object.keys(date) > 0 || !(date instanceof Date) || !Date) {
		throw new Error('Invalid date!');
	}
  if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
    const month = date.getMonth();
    if (month === 0 || month === 1 || month === 11) {
			return 'winter';
		}
		if (month >= 2 && month <= 4) {
			return 'spring';
		}
		if (month >= 5 && month <= 7) {
			return 'summer';
		}
		if (month >= 8 && month <= 10) {
			return 'autumn';
		}
  } else {
     throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
