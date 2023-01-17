
/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "CONTRACTOWNERWALLETADDRESS";

/*
Global Configurations
*/

/*
Ethereum Goerli Testnet
*/
export var goeErc20 = "";
export var goeCustody = "";
export var goeNFT = "";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
Canto Testnet
*/
// export var canroErc20 = "";
// export var canroCustody = "";
// export var canroNFT = "";
// export var canrorpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Canto Mainnet
*/
export var cantoErc20 = "";
export var cantoCustody = "";
export var cantoNFT = "";
export var cantorpc = "https://data-seed-prebsc-1-s3.binance.org:8545";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

