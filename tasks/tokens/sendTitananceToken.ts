import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";


import {testnetAddress} from '../../utils/network'

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000"

task("sendTitananceToken", "send a TitananceToken")
    .addParam("srcchain", " source chain name", "goerli")
    .addParam("dstchain", "destination token name", "bsc-testnet")
    .addParam("qty", "quantity amount of token to send", "10")
    .setAction(async (tasgArgs: any, hre: HardhatRuntimeEnvironment) => {
        const qty = ethers.utils.parseEther(tasgArgs.qty)
        const { url } = hre.config.networks[tasgArgs.srcchain] as any;
        const provider = new ethers.providers.JsonRpcProvider(url);
        let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
        const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
        const lzAddress = testnetAddress[tasgArgs.dstchain]
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
                    "name": "_to",
                    "type": "bytes"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_qty",
                    "type": "uint256"
                  },
                  {
                    "internalType": "address",
                    "name": "_zroPaymentAddress",
                    "type": "address"
                  },
                  {
                    "internalType": "bytes",
                    "name": "_adapterParam",
                    "type": "bytes"
                  }
                ],
                "name": "sendTokens",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
              }
            ], 
            wallet
        );
        const tx = await tokenContract.sendTokens(
            lzAddress.chainId,
            wallet.address,
            qty,
            ZERO_ADDRESS,
            "0x",
            {
                value: ethers.utils.parseEther("0.1"),
            }
        )
    })