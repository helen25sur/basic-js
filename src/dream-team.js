const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if (!Array.isArray(members)) {
		return false;
	}
	const newArr = [];
	for (let i = 0; i < members.length; i++) {
		if (typeof members[i] === 'string') {
			let name = members[i].trim();
			name = name.toUpperCase();
			newArr.push(name[0]);
		}
	}

	function findFirstLetter(arr) {
		let first = arr[0];
		let firstIndex = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] < first) {
				first = arr[i];
				firstIndex = i;
			}
		}
		return firstIndex;
	}

	const resultArr = [];
	const arrLength = newArr.length;
	for (let i = 0; i < arrLength; i++) {
		let firstLetter = findFirstLetter(newArr);
		resultArr.push(newArr[firstLetter]);
		newArr.splice(firstLetter, 1);
	}

	const resultStr = resultArr.join('');
	return resultStr;
};
