const CustomError = require("../extensions/custom-error");

const chainMaker = {
	arr: [],
	strResult: '',
	getLength() {
		this.arr.length();
		return this.arr.length();
	},
	addLink(value) {
		this.arr.push(`( ${String(value)} )`);
		return this;
	},
	removeLink(position) {
		if (position-1 >= 0 && !isNaN(position) && position-1 < this.arr.length) {
			this.arr.splice(position-1, 1);
		} else {
			this.arr.length = 0;
			throw new Error('position - is invalid');
		}
		return this;
	},
	reverseChain() {
		this.arr.reverse();
		return this;
	},
	finishChain() {
		this.strResult = this.arr.join('~~');
		this.arr.length = 0;
		return this.strResult;
	}
};

module.exports = chainMaker;
