import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { spotTokens } from "../../constants/spot";
import { parseEther } from "ethers/lib/utils";
import { spotContracts } from "../../constants/spotContracts";


task("addToken", "deploy Spot exchange")
    .addParam("token", "token symbol", "")
    .addParam("address", "token address", "")
    .addParam("chain", "chain name", "goerli,bsc-testnet,mumbai,optimism-goerli,arbitrum-goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chainName = taskArgs.chain
        console.log(chainName)
        const { chainId, url } = hre.config.networks[chainName] as any;
        const token = taskArgs.token
        const tokenAddress = taskArgs.address
        const provider = new ethers.providers.JsonRpcProvider(url);
        const gas = await provider.getGasPrice()
        let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
        const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
        const _spotContracts = new ethers.Contract(spotContracts[chainId], [    
            {
                "inputs": [
                    {
                    "internalType": "string",
                    "name": "token",
                    "type": "string"
                    },
                    {
                    "internalType": "address",
                    "name": "tokenAddress",
                    "type": "address"
                    }
                ],
                "name": "addToken",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
                },
            ], 
            wallet
        );
        console.log(`addToken: ${token}`)
        try{
            const tx = await (await _spotContracts.addToken(
                token,
                tokenAddress,
                {
                    gasLimit: 3000000,
                    gasPrice: gas
                }
            )).wait()
        }catch{
            console.log(`addToken Error: ${token} ${chainId}`)
        }

    })