const { v1: uuid } = require('uuid');

class Transaction {
  constructor({ senderWallet, recipient, amount }) {
    this.id = uuid();
  }
}

module.exports = Transaction;
