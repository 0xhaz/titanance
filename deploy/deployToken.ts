import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { testnetAddress } from "../utils/network";

const contractName = "TitananceToken"

task("deployToken", "deploy a TitananceToken")
    .addParam("name", "the token name", "TI")
    .addParam("symbol", "the symbol", "TI")
    .addParam("supply", "token supply", "1000000000000000")
    .addParam("chain", "chain name", "goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const { url } = hre.config.networks[taskArgs.chain] as any;
        const lzAddress = testnetAddress[taskArgs.chain]
        console.log(`  -> -> -> TitananceToken needs LayerZero: ${taskArgs.chain} LayerZeroId: ${lzAddress.chainId} LayerZeroEndpoint: ${lzAddress.endpoint}`)

        const provider = new ethers.providers.JsonRpcProvider(url);
        let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
        const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);

        const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
        const factory = new ethers.ContractFactory(abi, bytecode, wallet);
        const contract = await factory.deploy(
            taskArgs.name, 
            taskArgs.symbol,
            lzAddress.endpoint,
            lzAddress.chainId,
            taskArgs.supply
        );
        console.log(`titananceToken.address: ${contract.address}`)
        console.log(`name: ${await contract.name()} | symbol: ${await contract.symbol()}`)
    })