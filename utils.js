const _        = require("lodash");
const crypto   = require("crypto");
let Utils      = {};
module.exports = Utils;

Utils.computeTxId = function computeTxId(hex) {
	if (Buffer.isBuffer(hex)) {
		return Utils.sha256(Utils.sha256(hex).digest()).digest().reverse();
	}
	return computeTxId(Buffer.from(hex, "hex"));
}

Utils.sha256      = function sha256(data) {
	let algo = crypto.createHash("sha256");
	algo.update(data);
	return algo;
}
