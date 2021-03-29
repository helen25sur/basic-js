const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '';
	
	const repeatTimes = options.repeatTimes > 0 ? options.repeatTimes : 0;
	const additionRepeatTimes = options.additionRepeatTimes > 0 ? options.additionRepeatTimes : 0;
	const separator = options.separator !== undefined ? options.separator  : '+';
	const addition = options.addition !== undefined ? options.addition : '';
	const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';
	
	for (let i = 1; i <= repeatTimes; i++) {
		newStr += String(str);
		for (let j = 1; j <= additionRepeatTimes; j++) {
			newStr += String(addition);
		
				if (j !== additionRepeatTimes && additionRepeatTimes > 0) {
					newStr += additionSeparator;
				}
		}
		if (i !== repeatTimes && repeatTimes > 0) {
			newStr += separator;
		}
	}
	return newStr;
	
};
  