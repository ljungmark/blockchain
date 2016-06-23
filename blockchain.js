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

let blocksToAdd = 5;

const Docket = new Blockchain();

for (i = 0; i < blocksToAdd; i++) {
    Docket.addNewBlock(new Block({sender: 'Blockchain', receiver: 'Ljungmark', message: `Block ${Docket.chain.length} has been added to the chain`}));
}

Docket.chain.forEach((block) => {
    console.log(block);
});
