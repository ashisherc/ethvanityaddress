const bip39 = require('bip39');
const hdWallet = require('ethereumjs-wallet/hdkey')
const fs = require('fs-extra');

var vanityAddressFoundA = false;
var vanityAddressFoundB = false;
var vanityAddressFoundC = false;

const regA = /0xAA.*11$/;
const regB = /0xBB.*22$/;
const regC = /0xCC.*33$/;

var mnemonic;
var seed;
var HdKey;
var node;
var address;

while(!vanityAddressFoundA || !vanityAddressFoundB || !vanityAddressFoundC){

    mnemonic = bip39.generateMnemonic();
    seed = bip39.mnemonicToSeed(mnemonic);
    HdKey = hdWallet.fromMasterSeed(seed);
    node = HdKey.derivePath("m/44'/60'/0'/0/0");
    
    address = node.getWallet().getChecksumAddressString();
    if(regA.test(address) && !vanityAddressFoundA){
        vanityAddressFoundA = true;
        const result = {
            mnemonic,
            address
        }
        fs.outputJSONSync('./resultA.json', result);
    }
    if(regB.test(address) && !vanityAddressFoundB){
        vanityAddressFoundB = true;
        const result = {
            mnemonic,
            address
        }
        fs.outputJSONSync('./resultB.json', result);
    }
    if(regC.test(address) && !vanityAddressFoundC){
        vanityAddressFoundC = true;
        const result = {
            mnemonic,
            address
        }
        fs.outputJSONSync('./resultC.json', result);
    }

}
