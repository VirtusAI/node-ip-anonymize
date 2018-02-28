Sets the last octet of IPv4 addresses and the last 64 bits of IPv6 addresses to zeros.

## Install
```
npm install --save https://github.com/VirtusAI/node-ip-anonymize.git
```


### Usage

```js
const anonymizeIp = require('ip-anonymize');

anonymizeIp('127.0.0.1');
//=> 127.0.0.0

anonymizeIp(':ffff:127.0.0.1');
//=> 127.0.0.0

anonymizeIp('2001:db8:0:1234:0:567:8:1');
//=> 2001:db8:0:1234::

anonymizeIp(null);
//=> null

anonymizeIp('ABCDEF');
//=> ABCDEF
```

