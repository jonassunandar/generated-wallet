let Web3 = require("web3");
let web3 = new Web3();

module.exports = function(seed) {
    return {
        sign: async function(tx) {
            let pk = web3.utils.sha3(seed +  process.env['TOKEN_SALT']);
            let acc = web3.eth.accounts.privateKeyToAccount(pk);
            tx.fromAddress = acc.address;
            let signedTx = await acc.signTransaction(tx);
            return signedTx.rawTransaction;
        },
        getAddress: async function() {
            let pk = web3.utils.sha3(seed + process.env['TOKEN_SALT']);
            return web3.eth.accounts.privateKeyToAccount(pk).address;
        }
    }
}
