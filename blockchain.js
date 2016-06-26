const Block = require('./block');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 3;
    }

    createGenesisBlock() {
        const genesisDate = '2/15/1987';
        return new Block('Genesis Block', 0, genesisDate, '0');
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.previousHash = this.getLastBlock().hash;
        newBlock.index = this.getLastBlock().index + 1;
        newBlock.hash = newBlock.calculateHash();
        newBlock.mineBlock(this.difficulty);
        this.chain.push(newBlock);
    }

    isChainValid() {
        const chain = this.chain;

        for(let i = 0; i < chain.length; i++) {
            if (chain[i].hash !== chain[i].calculateHash()) {
                console.log(`Block ${i} has been corrupted`);
                return false;
            }

            if (i > 0 && chain[i].previousHash !== chain[i - 1].hash) {
                console.log(`Block ${i - 1} has been corrupted`);
                return false;
            }
        }

        console.log('The chain is valid');
        return true;
    }
}

let blocksToAdd = 5;

const Docket = new Blockchain();

for (i = 0; i < blocksToAdd; i++) {
    Docket.addNewBlock(new Block({sender: 'Blockchain', receiver: 'Ljungmark', message: `Block ${Docket.chain.length} has been added to the chain`}));
}

console.log(Docket.isChainValid());

Docket.chain.forEach((block) => {
    console.log(block);
});
