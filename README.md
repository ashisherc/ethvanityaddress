# BIP39 ETH Vanity Address Generator

> Vanity Address generator for ETH using BIP39 mnemonic phrase

## How to use

Add a regx pattern for the type of address you need in the variable,

regA, regB, regC

Current pattern will find three addresses starting with AA and ending with 11.
You can add multiple pattern checks in the pipeline to save the time to generate multiple addresses.

The generated address mnemonic phrase will be stored in curresponding filename. The first account from the mnemonic phrase will be matching address.
## Generate

```sh
npm install
npm start
```


## Results

The harder the patern the more time it will take.
It took around 30 days to find and address starting with AAA and ending with 111, eg 0xAAA****111 on an aws ec2 small instance.