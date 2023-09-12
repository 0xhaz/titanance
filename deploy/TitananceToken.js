const { getLayerZeroAddress } = require("../utils/layerzero")
const CONFIG = require("../constants/config.json")
const { isTestnet, isLocalhost } = require("../utils/network")
const { getEndpointIdByName } = require("@layerzerolabs/lz-sdk")

function getDependencies() {
    if (hre.network.name === "hardhat") {
        return ["LZEndpointMock"]
    }
}

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    let lzAddress
    if (hre.network.name === "hardhat") {
        lzAddress = (await deployments.get("LZEndpointMock")).address
        // console.log(`  -> TitananceToken needs LayerZero: ${hre.network.name} LZEndpointMock: ${lzAddress}`)
    } else {
        console.log(hre.network.name)
        lzAddress = getLayerZeroAddress(hre.network.name)
        console.log(`  -> TitananceToken needs LayerZero: ${hre.network.name} LayerZeroEndpoint: ${lzAddress}`)
    }

    let mainEndpointId = CONFIG.TitananceToken.mainEndpointId // ETH
    if (isTestnet() && !isLocalhost()) {
        // for testnet, mint a bunch of tokens on every chain
        mainEndpointId = getEndpointIdByName(hre.network.name)
    }

    let tokenName = CONFIG.TitananceToken.name
    let tokenSymbol = CONFIG.TitananceToken.symbol
    if (hre.network.name !== "hardhat") {
        console.log(`TitananceToken name: ${tokenName}, symbol:${tokenSymbol} | mainEndpointId: ${mainEndpointId} | isTestnet: ${isTestnet()}`)
    }
    await deploy("TitananceToken", {
        from: deployer,
        args: [tokenName, tokenSymbol, lzAddress, mainEndpointId, CONFIG.TitananceToken.initialSupplyMainEndpoint],
        log: true,
        skipIfAlreadyDeployed: true,
        waitConfirmations: 1,
    })
}

module.exports.tags = ["TitananceToken", "test"]
module.exports.dependencies = getDependencies()
