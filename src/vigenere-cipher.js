const CustomError = require("../extensions/custom-error");

const ALPHABET = {
	0: 'a',
	1: 'b',
	2: 'c',
	3: 'd',
	4: 'e',
	5: 'f',
	6: 'g',
	7: 'h',
	8: 'i',
	9: 'j',
	10: 'k',
	11: 'l',
	12: 'm',
	13: 'n',
	14: 'o',
	15: 'p',
	16: 'q',
	17: 'r',
	18: 's',
	19: 't',
	20: 'u',
	21: 'v',
	22: 'w',
	23: 'x',
	24: 'y',
	25: 'z'
};

const ALPHABET_LENGTH = 25; //так как в объекте начинаю с нуля, то 26 - 1
class VigenereCipheringMachine {
	encrypt(message, key) {
		this.message = message;
		this.key = key;

		if (message === undefined || key === undefined) {
			throw new Error('не переданы нужные аргументы');
		}

		const arrKey = [];
		const arrMess = [];
		const sum = [];
		const resultArr = [];
		let resultStr = '';

		for (const s of key) {
			for (const k in ALPHABET) {
				if (s === ALPHABET[k]) {
					arrKey.push(k);
				}
			}
		}
		for (const s of message) {
			for (const k in ALPHABET) {
				if (s === ALPHABET[k]) {
					arrMess.push(k);
				}
			}
		}

		for (let i = 0, j = 0; i < arrMess.length; i++, j++) {
			sum.push(Number(arrMess[i]) + Number(arrKey[j]));

			if (j === (arrKey.length - 1)) {
				j = -1;
			}

		}

		for (let i = 0; i < sum.length; i++) {
			if (sum[i] > 25) {
				resultArr.push(sum[i] - 26);
			} else {
				resultArr.push(sum[i]);
			}
		}

		for (let n = 0, startIndex = 0; n <= resultArr.length; n++) {
			let spaceIndex = message.indexOf(' ', startIndex);
			if (n === spaceIndex) {
				resultStr += ' ';
				startIndex = n-1;
			}
			resultStr += ALPHABET[resultArr[n]];

			if (n === resultArr.length - 1) {
				resultStr = resultStr.toUpperCase();
				return resultStr;
			}
		}
	}



	decrypt(message, key) {
		this.message = message;
		this.key = key;

		if (message === undefined || key === undefined) {
			throw new Error('не переданы нужные аргументы');
		}
	}
}

module.exports = VigenereCipheringMachine;
