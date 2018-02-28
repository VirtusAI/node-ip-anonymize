'use strict';

const ipaddr = require('ipaddr.js');
const ip = require('ip');

const prefixLengths = {
	'ipv4': 32-8,
	'ipv6': 128-64
};

function getCIDR(ipAddr) {
	return `${ipAddr.toString()}/${prefixLengths[ipAddr.kind()]}`;
}

function anonymizeIp(ipAddr) {
	try {
		let parsedIp = ipaddr.process(ipAddr);

		return ip.cidr(getCIDR(parsedIp));

	} catch(err) {
		return ipAddr;
	}
}

module.exports = anonymizeIp;