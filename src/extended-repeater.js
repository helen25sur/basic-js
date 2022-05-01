const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strRes = '';

  const repeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator  : '+';
  const addition = options.addition !== undefined ? options.addition : '';
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  for (let i = 1; i <= repeatTimes; i++) {
		strRes += String(str);
		for (let j = 1; j <= additionRepeatTimes; j++) {
			strRes += String(addition);

				if (j !== additionRepeatTimes && additionRepeatTimes > 0) {
					strRes += additionSeparator;
				}
		}
		if (i !== repeatTimes && repeatTimes > 0) {
			strRes += separator;
		}
	}
	return strRes;
}

module.exports = {
  repeater
};
