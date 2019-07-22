Generating simple wallet with only one seed.

# Installing

``
npm install generated-wallet
``
## Set Environment Variables
First you need to define environment variable
```
    export TOKEN_SALT=my_token_salt
```

## Generate Wallet
```
wallet = require('generated-wallet');
myWallet = wallet('my-very-secure-seed');
```

## Signing Transaction
Signing raw transaction and returns the raw signed transaction
```
let signedTransaction = myWallet.sign(tx);
```

## Get Address
return sender address
```
let myAddress = myWallet.getAddress();
```