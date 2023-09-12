import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

import { getLayerZeroAddress } from "../utils/layerzero";
import {CONFIG} from "../constants/config"

const contractName = "TitananceToken"

task("deployToken", "deploy a TitananceToken")
    .addParam("name", "the token name")
    .addParam("symbol", "the symbol")
    .addParam("chain", "chain name")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const { url } = hre.config.networks[taskArgs.chain] as any;
        const lzAddress = getLayerZeroAddress(taskArgs.chain) || "0xbfD2135BFfbb0B5378b56643c2Df8a87552Bfa23"
        console.log(`  -> -> -> TitananceToken needs LayerZero: ${taskArgs.chain} LayerZeroEndpoint: ${lzAddress}`)


        const provider = new ethers.providers.JsonRpcProvider(url);
        let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
        const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);

        const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
        const factory = new ethers.ContractFactory(abi, bytecode, wallet);
        const contract = await factory.deploy(
            taskArgs.name, 
            taskArgs.symbol,
            lzAddress,
            CONFIG.titananceToken.mainEndpointId,
            CONFIG.titananceToken.initialSupplyMainEndpoint
        );
        console.log(`titananceToken.address: ${contract.address}`)
        console.log(`name: ${await contract.name()} | symbol: ${await contract.symbol()}`)
    })