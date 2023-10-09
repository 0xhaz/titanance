import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { spotTokens } from "../constants/spot";

const contractName = "Spot"

task("deploySpot", "deploy Spot exchange")
    .addParam("chainid", "chain id of network", "0")
    // .addParam("tokens", "symbol of tokens", "BTC,TI")
    // .addParam("address", "address of tokens", "0x,0x")
    .addParam("chains", "chain name", "goerli,bsc-testnet,mumbai,optimism-goerli,arbitrum-goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chains = taskArgs.chains.split(",")
        //deploy tokens
        const contractsAddress = await Promise.all(chains.map(async (item: any, index: number) =>{
            const { chainId, url } = hre.config.networks[item] as any;
            const tokens = spotTokens[chainId].map((item: any)=> item.symbol)
            const tokenAddresses = spotTokens[chainId].map((item: any) => item.contract)

            const provider = new ethers.providers.JsonRpcProvider(url);
            const gas = await provider.getGasPrice()
            let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
            const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
            const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
            const factory = new ethers.ContractFactory(abi, bytecode, wallet);
            const contract = await factory.deploy(
                taskArgs.chainid,
                tokens,
                tokenAddresses,
                {gasLimit: 3000000, gasPrice: gas}
            );
            console.log(`${item} Spot.address in ${item}: ${contract.address}`)
        }))
    })