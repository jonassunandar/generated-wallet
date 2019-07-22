Generating simple wallet with only one seed.

# Installing

``
npm install generated-wallet
``

## Generate Wallet
```
wallet = require('generated-wallet');
myWallet = wallet('my-very-secure-seed');
```

## Signing Transaction
```
let signedTransaction = myWallet.sign(tx);
```

## Get Address
```
let myAddress = myWallet.getAddress();
```