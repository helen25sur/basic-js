const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
	strResult: '',
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${String(value)} )`);
		return this;
  },
  removeLink(position) {
    if (!isNaN(position) && position-1 >= 0 && position-1 < this.arr.length && Number.parseInt(position) === Number.parseFloat(position)) {
			this.arr.splice(position-1, 1);
		} else {
      this.arr.length = 0;
			throw new Error('You can\'t remove incorrect link!');
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

module.exports = {
  chainMaker
};
