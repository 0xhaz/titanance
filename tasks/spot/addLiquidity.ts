import { task } from "hardhat/config"
import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { spotTokens } from "../../constants/spot";
import { parseEther } from "ethers/lib/utils";
import { spotContracts } from "../../constants/spotContracts";


task("addLiquidity", "deploy Spot exchange")
    .addParam("chains", "chain name", "goerli,bsc-testnet,mumbai,optimism-goerli,arbitrum-goerli")
    .setAction(async (taskArgs, hre: HardhatRuntimeEnvironment) => {
        const chains = taskArgs.chains.split(",")
        for (const chainName of chains){
            console.log(chainName)
            const { chainId, url } = hre.config.networks[chainName] as any;
            const tokens = spotTokens[chainId].map((item: any)=> item.symbol)
            const tokenAddresses = spotTokens[chainId].map((item: any) => item.contract)
            for (let index = 0; index < tokens.length; index++){
                const value = tokens[index]
                if(index === 0)
                    continue
                console.log(`Add liquidity: ${value}`)
                const provider = new ethers.providers.JsonRpcProvider(url);
                const gas = await provider.getGasPrice()
                let mnemonicWallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC as string);
                const wallet = new ethers.Wallet( mnemonicWallet.privateKey, provider);
                const tokenContract = new ethers.Contract(tokenAddresses[index], [    
                    {
                        "inputs": [
                          {
                            "internalType": "address",
                            "name": "spender",
                            "type": "address"
                          },
                          {
                            "internalType": "uint256",
                            "name": "addedValue",
                            "type": "uint256"
                          }
                        ],
                        "name": "increaseAllowance",
                        "outputs": [
                          {
                            "internalType": "bool",
                            "name": "",
                            "type": "bool"
                          }
                        ],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      },
                  ], 
                  wallet
                );
                console.log(`increaseAllowance: ${value} ${tokenAddresses[index]} ${spotContracts[chainId]}`)
                try{
                    const _tx = await( await tokenContract.increaseAllowance(
                        spotContracts[chainId],
                        parseEther("5000000"),
                        {
                        gasLimit: 3000000,
                        gasPrice: gas
                        }
                    )).wait()
                }catch{
                    console.log(`depositToken Error: ${value} ${chainId}`)
                    continue
                }

                const _spotContracts = new ethers.Contract(spotContracts[chainId], [    
                    {
                        "inputs": [
                          {
                            "internalType": "string",
                            "name": "inToken",
                            "type": "string"
                          },
                          {
                            "internalType": "uint256",
                            "name": "amount",
                            "type": "uint256"
                          }
                        ],
                        "name": "depositToken",
                        "outputs": [],
                        "stateMutability": "nonpayable",
                        "type": "function"
                      }
                  ], 
                  wallet
                );
                console.log(`depositToken: ${value}`)
                try{
                    const tx = await (await _spotContracts.depositToken(
                        value,
                        parseEther("1"),
                        {
                          gasLimit: 3000000,
                          gasPrice: gas
                        }
                    )).wait()
                }catch{
                    console.log(`depositToken Error: ${value} ${chainId}`)
                }

            }
        }
    })