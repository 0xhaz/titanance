import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const contractName = "Spot"

task("deploySpot", "deploy Spot exchange")
    .addParam("tokens", "symbol of tokens", "BTC,TI")
    .addParam("address", "address of tokens", "0x,0x")
    .addParam("chains", "chain name", "goerli,bsc-testnet,mumbai,optimism-goerli,arbitrum-goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chains = taskArgs.chains.split(",")
        const tokens = taskArgs.tokens.split(",")
        const tokenAddresses = taskArgs.address.split(",")
        //deploy tokens
        const contractsAddress = await Promise.all(chains.map(async (item: any, index: number) =>{
            const { url } = hre.config.networks[item] as any;
            // const lzChainId = testnetAddress[item].chainId
            // const lzEndpoint = testnetAddress[item].endpoint
            // console.log(`  -> -> -> ${taskArgs.name} needs LayerZero: ${item} LayerZeroId: ${lzChainId} LayerZeroEndpoint: ${lzEndpoint}`)

            const provider = new ethers.providers.JsonRpcProvider(url);
            const gas = await provider.getGasPrice()
            let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
            const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
            const { abi, bytecode } = await hre.artifacts.readArtifact(contractName);
            const factory = new ethers.ContractFactory(abi, bytecode, wallet);
            const contract = await factory.deploy(
                tokens,
                tokenAddresses,
                {gasLimit: 3000000, gasPrice: gas}
            );
            console.log(`${item} Spot.address in ${item}: ${contract.address}`)
        }))
    })