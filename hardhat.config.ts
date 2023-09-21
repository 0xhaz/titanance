import * as dotenv from "dotenv";

// Load .env file
dotenv.config();


import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-solhint";
import "@nomiclabs/hardhat-web3";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "hardhat-contract-sizer";
import "hardhat-tracer";
import "@primitivefi/hardhat-dodoc";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
import "hardhat-spdx-license-identifier";

import "./deploy/deployToken";
import "./tasks/tokens/sendCrossChainToken"

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more4


function getMnemonic(networkName:any=undefined) {
    if (networkName) {
        const mnemonic = process.env['MNEMONIC_' + networkName.toUpperCase()]
        if (mnemonic && mnemonic !== '') {
            return mnemonic
        }
    }

    const mnemonic = process.env.MNEMONIC
    if (!mnemonic || mnemonic === '') {
        return 'test test test test test test test test test test test junk'
    }

    return mnemonic
}

function accounts(chainKey: any=undefined) {
    return { mnemonic: getMnemonic(chainKey) }
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: {
        compilers: [
          {
            version: "0.8.17",
            settings: {
              optimizer: {
                enabled: true,
                runs: 200
              }
            }
          }
        ]
      },
      contractSizer: {
        alphaSort: false,
        runOnCompile: true,
        disambiguatePaths: false,
      },
    


    // for hardhat-deploy
    namedAccounts: {
        deployer: 0,
    },
    defaultNetwork: "hardhat",
    networks: {
        goerli: {
            url: "https://ethereum-goerli.publicnode.com", // public infura endpoint
            chainId: 5,
            accounts: accounts(),
        },
        'bsc-testnet': {
            url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
            chainId: 97,
            accounts: accounts(),
        },
        mumbai: {
            url: "https://polygon-mumbai.blockpi.network/v1/rpc/public",
            chainId: 80001,
            accounts: accounts(),
        },
        'optimism-goerli': {
            url: `https://optimism-goerli.publicnode.com`,
            chainId: 420,
            accounts: accounts(),
        },
        'arbitrum-goerli': {
            url: `https://rpc.goerli.arbitrum.gateway.fm`,
            chainId: 421613 ,
            accounts: accounts(),
        },
    },
    mocha: {
        timeout: 500000,
    },
    gasReporter: {
        enabled: process.env.REPORT_GAS === "true",
        currency: "USD",
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
};
