const { STRATING_BALANCE } = require('../config');
const cryptoHash = require('../util/crypto-hash')
const { ec } = require('../util');

class Wallet {
  constructor() {
    this.balance = STRATING_BALANCE;

    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode('hex');
  }

  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
}

module.exports = Wallet;
