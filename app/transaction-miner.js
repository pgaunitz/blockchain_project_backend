class TransactionMiner {
  constructor({ blockchain, transactionPool, wallet, pubsub }) {
    this.blockchain = blockchain;
    this.transactionPool = transactionPool;
    this.wallet = wallet;
    this.pubsub = pubsub;
  }

  mineTransactions() {
    // get the valid transactions from transaction pool
    //
    // generate the miner's reward
    //
    // add a block consisting of these transactions to the blockchain
    //
    // broadcast the updated blockchain
    //
    // clear the pool
  }
}

module.exports = TransactionMiner;
