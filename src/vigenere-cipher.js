const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
 const ALPHABET = {
 	0: 'a', 1: 'b', 2: 'c', 3: 'd', 4: 'e', 5: 'f', 6: 'g', 7: 'h', 8: 'i', 9: 'j', 10: 'k', 11: 'l', 12: 'm', 13: 'n',
 	14: 'o', 15: 'p', 16: 'q', 17: 'r', 18: 's', 19: 't', 20: 'u', 21: 'v', 22: 'w', 23: 'x', 24: 'y', 25: 'z'
 };

 const regexp = /\s*\W/g;

 const ALPHABET_LENGTH = 26;
 class VigenereCipheringMachine {
 	constructor(isDirect) {
 		this.isDirect = isDirect;
 	}
  
 	encrypt(message, key) {
 		this.message = message;
 		this.key = key;

 		if (message === undefined || key === undefined) {
 			throw new Error('Incorrect arguments!');
 		}

 		const arrKey = [];
 		const arrMess = [];
 		const sum = [];
 		let resultArr = [];
 		let resultStr = '';

 		for (const symb of key.toLowerCase()) {
 			for (const keyAlphabet in ALPHABET) {
 				if (symb === ALPHABET[keyAlphabet]) {
 					arrKey.push(keyAlphabet);
 				}
 			}
 		}

 		for (let symb of message.toLowerCase()) {
 			for (let letter in ALPHABET) {
 				if (symb === ALPHABET[letter]) {
 					letter = Number(letter);
 					arrMess.push(letter);
 					break;
 				}
 				if (regexp.test(symb) || /[0-9]+/.test(symb)) {
 					symb = String(symb);
 					arrMess.push(symb);
 					break;
 				}
 			}
 		}

 		for (let i = 0, j = 0; i < arrMess.length; i++, j++) {
 			if (typeof arrMess[i] === 'string') {
 				sum.push(arrMess[i]);
 				j -= 1;
 			} else if (typeof arrMess[i] === 'number') {
 				sum.push(Number(arrMess[i]) + Number(arrKey[j]));
 			}
 			if (j === (arrKey.length - 1)) {
 				j = -1;
 			}
 		}

 		for (let i = 0; i < sum.length; i++) {
 			if (sum[i] >= ALPHABET_LENGTH) {
 				resultArr.push(sum[i] - ALPHABET_LENGTH);
 			} else {
 				resultArr.push(sum[i]);
 			}
 		}

 		if (this.isDirect === false) {
 			resultArr = resultArr.reverse();
 		} else if (this.isDirect === true || this.isDirect === '') {
 			resultArr = resultArr;
 		}

 		for (let i = 0; i < resultArr.length; i++) {
 			if (resultArr[i] in ALPHABET && typeof resultArr[i] === 'number') {
 				resultStr += ALPHABET[resultArr[i]];
 			} else {
 				resultStr += resultArr[i];
 			}
 		}

 		resultStr = resultStr.toUpperCase();
 		return resultStr;
 	}


 	decrypt(message, key) {
 		this.message = message;
 		this.key = key;

 		if (message === undefined || key === undefined) {
 			throw new Error('Incorrect arguments!');
 		}

 		const arrKey = [];
 		const arrMess = [];
 		const sum = [];
 		let resultArr = [];
 		let resultStr = '';

 		for (const symb of key.toLowerCase()) {
 			for (const keyAlphabet in ALPHABET) {
 				if (symb === ALPHABET[keyAlphabet]) {
 					arrKey.push(keyAlphabet);
 				}
 			}
 		}

 		for (let symb of message.toLowerCase()) {
 			for (let letter in ALPHABET) {
 				if (symb === ALPHABET[letter]) {
 					letter = Number(letter);
 					arrMess.push(letter);
 					break;
 				}
 				if (regexp.test(symb) || /[0-9]+/.test(symb)) {
 					symb = String(symb);
 					arrMess.push(symb);
 					break;
 				}
 			}
 		}

 			for (let i = 0, j = 0; i < arrMess.length; i++, j++) {
 			if (typeof arrMess[i] === 'string') {
 				sum.push(arrMess[i]);
 				j -= 1;
 			} else if (typeof arrMess[i] === 'number') {
 				sum.push(Number(arrMess[i]) + ALPHABET_LENGTH - Number(arrKey[j]));
 			}
 			if (j === (arrKey.length - 1)) {
 				j = -1;
 			}
 		}


 		for (let i = 0; i < sum.length; i++) {
 			if (sum[i] >= ALPHABET_LENGTH) {
 				resultArr.push(sum[i] - ALPHABET_LENGTH);
 			} else {
 				resultArr.push(sum[i]);
 			}
 		}

 		if (this.isDirect === false) {
 			resultArr = resultArr.reverse();
 		} else if (this.isDirect === true || this.isDirect === '') {
 			resultArr = resultArr;
 		}

 		for (let i = 0; i < resultArr.length; i++) {
 			if (resultArr[i] in ALPHABET && typeof resultArr[i] === 'number') {
 				resultStr += ALPHABET[resultArr[i]];
 			} else {
 				resultStr += resultArr[i];
 			}
 		}

 		resultStr = resultStr.toUpperCase();
 		return resultStr;
 	}
 }
module.exports = {
  VigenereCipheringMachine
};
