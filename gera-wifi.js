var cryptojs = require('cryptojs').Crypto
var bs58     = require('bs58')

var version = '80'

var chaveprivada = process.argv[2]

var versaoEChavePrivada = version + chaveprivada
var primeiroSha = cryptojs.SHA256(cryptojs.util.hexToBytes(versaoEChavePrivada))

var segundocha = cryptojs.SHA256(cryptojs.util.hexToBytes(primeiroSha))

var checksum = segundocha.substr(0,8)
var wif  = versaoEChavePrivada + checksum
var wifiFinal  = bs58.encode(cryptojs.util.hexToBytes(wif))
console.log(' aqui:'+wifiFinal)


