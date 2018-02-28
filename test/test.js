'use strict';

const path = require('path');
const assert = require('assert');
const anonymizeIp = require(path.join(__dirname, '..', 'index.js'));

it('null', () => assert.equal(anonymizeIp(null), null));
it('empty', () => assert.equal(anonymizeIp(''), ''));
it('invalid ip', () => assert.equal(anonymizeIp('localhost'), 'localhost'));

it('ipv4', () => assert.equal(anonymizeIp('192.168.1.254'), '192.168.1.0'));
it('ipv4-mapped', () => assert.equal(anonymizeIp('::ffff:127.0.0.1'), '127.0.0.0'));
it('ipv6', () => assert.equal(anonymizeIp('2001:db8:0:1234:0:567:8:1'), '2001:db8:0:1234::'));
