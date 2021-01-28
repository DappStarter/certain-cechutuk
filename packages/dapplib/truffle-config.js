require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth mirror property half produce bubble style'; 
let testAccounts = [
"0xe76fe4927ecf5b099ed9a12197e8b9138f8f946ffdc9dc95616f9db6577ac4b4",
"0x1365287131cc72dd78d8ce83666b8de96ed8c345b12999b28ef96ecc5db33b36",
"0x089aba3653db33db1a79a12a4c18b7367d2328c2fea8db12cb09865916c07348",
"0x4844a24051ef05fba2005b7a218a91ca1c5ea75ebc26524bff9f0f378ed50d49",
"0x2078531740c5bf7dae19db878518504f552e3bbd58c7e257317ffa86412c3f94",
"0x46b36c6c29940f8fa80feea3687abfd7c5e9bde83d91b7cfabf47930de934be1",
"0xa22ec2ef3a2ba526cfd408d56e07553730a63f3e9538fb14d4a46140089ee4de",
"0xd437d7893a6d0979e0a38721d4257be865fe2bebf95fd2267b385a1071aaf829",
"0xf5e31ad9d24fac8de42ef0fdf2a2f45062bd0064681df1ae1701825c1a31c8e3",
"0xb520fce10a04db54d7ff46ac96c8b15ba2a7c31eb52f209dbe8ca3efbbb7e420"
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
            version: '^0.5.11'
        }
    }
};
