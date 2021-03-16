const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity !== 'string' || Number.isNaN(+sampleActivity) || +sampleActivity === 0 ||
		+sampleActivity < 0 || +sampleActivity >= 9000 || +sampleActivity > MODERN_ACTIVITY) {
		return false;
	}
	sampleActivity = Number(sampleActivity);
	let years = Math.log(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD);
	years = Math.ceil(years);
	return years;
};
