import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { testnetAddress } from "../utils/network";

const contractName = "CrossChainToken"

task("deployToken", "deploy a Cross Chain token")
    .addParam("name", "the token name", "Titanance")
    .addParam("symbol", "the symbol", "TI")
    .addParam("supply", "token supply", "1000000000")
    .addParam("chain", "chain name", "goerli bsc-testnet optimism-goerli arbitrum-goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chains = taskArgs.chain.split(" ")
        //deploy tokens
        const contractsAddress = await Promise.all(chains.map(async (item: any, index: number) =>{
            const { url } = hre.config.networks[item] as any;
            const lzChainId = testnetAddress[item].chainId
            const lzEndpoint = testnetAddress[item].endpoint
            console.log(`  -> -> -> TitananceToken needs LayerZero: ${item} LayerZeroId: ${lzChainId} LayerZeroEndpoint: ${lzEndpoint}`)
            const provider = new ethers.providers.JsonRpcProvider(url);
            const gas = await provider.getGasPrice()
            let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
            const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
            const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
            const factory = new ethers.ContractFactory(abi, bytecode, wallet);
            const contract = await factory.deploy(
                taskArgs.name, 
                taskArgs.symbol,
                lzEndpoint,
                taskArgs.supply,
                {gasLimit: 3000000, gasPrice: gas}
            );
            console.log(`${taskArgs.name}.address in ${item}: ${contract.address}`)
            console.log(`-> In ${item}: ${taskArgs.name}.address ${contract.address} name: ${await contract.name()} | symbol: ${await contract.symbol()}`)
            return {lzChainId: lzChainId, contract: contract.address}
        }))
        //setTrustless
        for (let i = 0; i < contractsAddress.length; i++){
            const contractSource = contractsAddress[i]
            const { url } = hre.config.networks[chains[i]] as any;
            const provider = new ethers.providers.JsonRpcProvider(url);
            const gas = await provider.getGasPrice()
            let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
            const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
            const tokenContract = new ethers.Contract(contractSource.contract, [    
                {
                    "inputs": [
                      {
                        "internalType": "uint16",
                        "name": "dstChainId",
                        "type": "uint16"
                      },
                      {
                        "internalType": "address",
                        "name": "_otherContract",
                        "type": "address"
                      }
                    ],
                    "name": "trustAddress",
                    "outputs": [],
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
            ], 
            wallet);
            for (let j = 0; j < contractsAddress.length; j++) {
                if(contractSource === contractsAddress[j]) continue
                const _otherContract = contractsAddress[j]
                await(await tokenContract.trustAddress(
                    _otherContract.lzChainId,
                    _otherContract.contract,
                    {gasLimit: 3000000, gasPrice: gas}
                )).wait()
                console.log(`set lzChainId ${_otherContract.lzChainId} lzContract ${_otherContract.contract} in ${chains[i]}`)
            }
        }
        console.log("Deploy [DONE]")
    })