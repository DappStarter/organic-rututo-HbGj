require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty success system normal note six purse install pet slot gesture'; 
let testAccounts = [
"0x5676af186bd402701f7ec6dc01a6ba2353458f9041063b75b6f6f76c49970b27",
"0x278712b2168a584c5f62bcde39b6674ca8fac7997b1250547e39ec4cf89db36f",
"0xbdca15f0714edb997051c76ce7fe09012aa37110140caa654587ca48b03153d1",
"0x92afbeffb79748c31568ee489e3497140935c0c69125108fc3ed279271757c2b",
"0xa1ec9720ce573da1b3b3ca09646a7e4a281b32fd0a9790948b3584c9801c550a",
"0xdd384dceb7dfff3daa02d5b45959aadf52392647c1fc2b69afdc1c7c34313b45",
"0x8cd66b30684576a90c29dbe8255585c888b8afcbfc9b8b89c845f97cafa4fa54",
"0x3d5fa28887774768dbd498ce6a31afa32f8398b0bfc061ef12153ce65c8d3742",
"0xb373c5e40fdad4a7ce29afe801332e483f3d6c977ea6d695c34d82c31440577e",
"0x62bf6f6e9d5b362845b5b6d9a9a37470f8a12656958462764b5e08efe7bb45d9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

