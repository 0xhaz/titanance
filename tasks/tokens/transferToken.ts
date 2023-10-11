import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import {testnetAddress} from '../../utils/network'
import { spotTokens } from "../../constants/spot";


task("transferToken", "send a CrossChainToken")
    .addParam("tokens", "tokens symbol", "TI,USDT,USDC,DAI")
    .addParam("chains", "chain name", "arbitrum-goerli")
    .addParam("qty", "quantity amount of token to send", "5000000")
    .setAction(async (tasgArgs: any, hre: HardhatRuntimeEnvironment) => {
        const chainNames = tasgArgs.chains.split(",")
        const tokens = tasgArgs.tokens.split(",")
        const qty = ethers.utils.parseEther(tasgArgs.qty)
        for (const chainName of  chainNames){
            console.log(`chain Name: ${chainName}`)
            const { chainId, url } = hre.config.networks[chainName] as any;
            const provider = new ethers.providers.JsonRpcProvider(url);
            const gas = await provider.getGasPrice()
            let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
            const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
            for (const token of tokens){
                const tokenAddress = spotTokens[chainId].filter((item: any) => item.symbol === token)[0].contract
                console.log(`Token: ${token} ${tokenAddress}`)
                const tokenContract = new ethers.Contract(tokenAddress, [    
                    {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "to",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                          }
                        ],
                        "name": "transfer",
                        "outputs": [
                          {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                          }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      }
                  ], 
                  wallet
                );
                const tx = await(await tokenContract.transfer(
                    "0xfcC85B2E6E587F643F4Caa6EB9894ce33C6b8F32",
                    qty,
                    // {
                    //   gasLimit: 3000000,
                    //   gasPrice: gas
                    // }
                )).wait()
            }
        }
    })