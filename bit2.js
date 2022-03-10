var cryptojs = require('cryptojs').Crypto

var chaveprivate = cryptojs.util.randomBytes(2^0-2^1-1);

var  chaveprivadahex = cryptojs.util.bytesToHex(chaveprivate).toUpperCase()
console.log(chaveprivadahex);