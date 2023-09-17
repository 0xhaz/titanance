import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import {testnetAddress} from '../../utils/network'


task("sendCrossChainToken", "send a CrossChainToken")
    .addParam("tokenaddress", "token address to be sent", "0x860C6A5aef4A268102B807a8ADF4e38B7a4657D7")
    .addParam("srcchain", "source chain token name", "goerli")
    .addParam("dstchain", "destination token name", "bsc-testnet")
    .addParam("qty", "quantity amount of token to send", "10")
    .setAction(async (tasgArgs: any, hre: HardhatRuntimeEnvironment) => {
      const qty = ethers.utils.parseEther(tasgArgs.qty)
      const { url } = hre.config.networks[tasgArgs.srcchain] as any;
      const provider = new ethers.providers.JsonRpcProvider(url);
      const gas = await provider.getGasPrice()
      let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
      const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
      const lzAddress = testnetAddress[tasgArgs.dstchain]
      const tokenContract = new ethers.Contract(tasgArgs.tokenaddress, [    
          {
            "inputs": [
              {
                "internalType": "uint16",
                "name": "dstChainId",
                "type": "uint16"
              },
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "bridge",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
          }
        ], 
        wallet
      );
      const tx = await tokenContract.bridge(
          lzAddress.chainId,
          qty,
          {
            value: ethers.utils.parseEther("0.01"),
            gasLimit: 3000000,
            gasPrice: gas
          }
      )
    })