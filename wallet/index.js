const { STRATING_BALANCE } = require('../config');
const { ec } = require('../util');

class Wallet {
  constructor() {
    this.balance = STRATING_BALANCE;

    const keyPair = ec.genKeyPair();
    this.publicKey = keyPair.getPublic().encode('hex');
  }
}

module.exports = Wallet;
