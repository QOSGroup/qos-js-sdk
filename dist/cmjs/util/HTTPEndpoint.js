'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createAxioRequest = function createAxioRequest(baseURL, timeout) {
	return _axios2.default.create({
		baseURL: baseURL,
		timeout: timeout
	});
};

var HTTPEndpoint = function HTTPEndpoint(config) {
	_classCallCheck(this, HTTPEndpoint);

	this.HTTPBaseURL = config.baseUrl;
	this.chainId = config.chainId;
	this.request = createAxioRequest('' + this.HTTPBaseURL, 30000);
};

exports.default = HTTPEndpoint;