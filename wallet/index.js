const { STRATING_BALANCE } = require('../config');

class Wallet {
  constructor() {
    this.balance = STRATING_BALANCE;
  }
}

module.exports = Wallet;
