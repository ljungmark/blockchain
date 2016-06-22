const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        const genesisDate = '2/15/1987';
        return new Block('Genesis Block', 0, genesisDate);
    }
}
