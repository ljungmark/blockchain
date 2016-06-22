const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        const genesisDate = '2/15/1987';
        return new Block('Genesis Block', 0, genesisDate);
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.index = this.getLastBlock().index + 1;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}
