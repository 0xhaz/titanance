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

// const infuraProjectId = process.env.INFURA_PROJECT_ID;
// console.log(`infuraProjectId: ${infuraProjectId}`);

import "./tasks/deployToken";

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
        version: "0.7.6",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
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
        ethereum: {
            url: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161", // public infura endpoint
            chainId: 1,
            accounts: accounts(),
        },
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
            url: "https://rpc-mumbai.maticvigil.com/",
            chainId: 80001,
            accounts: accounts(),
        },
        'arbitrum-rinkeby': {
            url: `https://rinkeby.arbitrum.io/rpc`,
            chainId: 421611,
            accounts: accounts(),
        },
        'optimism-kovan': {
            url: `https://kovan.optimism.io/`,
            chainId: 69,
            accounts: accounts(),
        }
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
