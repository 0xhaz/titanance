import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";


import {testnetAddress} from '../../utils/network'

task("setDestination", "send a TitananceToken")
    .addParam("srcchain", "source chain name", "goerli")
    .addParam("dstchains", "chains to be bridged", "bsc-testnet mumbai optimism-goerli arbitrum-goerli")
    .setAction(async (tasgArgs: any, hre: HardhatRuntimeEnvironment) => {
        const { url } = hre.config.networks[tasgArgs.srcchain] as any;
        const provider = new ethers.providers.JsonRpcProvider(url);
        let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
        const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
        const dstChains = tasgArgs.dstchains.split(" ")
        const tokenContract = new ethers.Contract(process.env.TI, [    
            {
                "inputs": [
                  {
                    "internalType": "uint16",
                    "name": "_dstChainId",
                    "type": "uint16"
                  },
                  {
                    "internalType": "bytes",
                    "name": "_destinationContractAddress",
                    "type": "bytes"
                  }
                ],
                "name": "setDestination",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
            ], 
            wallet
        );
        Promise.all(dstChains.map(async (item: any) =>{
            const lzAddress = testnetAddress[item]
            await tokenContract.setDestination(
                lzAddress.chainId,
                lzAddress.endpoint
            )
        })).catch((e) =>{
            console.log("setDestination ERROR: ", e)
        })
    })