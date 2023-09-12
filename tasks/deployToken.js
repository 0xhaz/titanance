task("deployToken", "deploy a TitananceToken")
    .addParam("name", "the token name")
    .addParam("symbol", "the symbol")
    .setAction(async (taskArgs) => {
        let accounts = await ethers.getSigners()
        let owner = accounts[0] // me
        console.log(`owner: ${owner.address}`)

        let TitananceToken = await ethers.getContractFactory("TitananceToken")
        let titananceToken = await TitananceToken.deploy(taskArgs.name, taskArgs.symbol)
        console.log(`titananceToken.address: ${titananceToken.address}`)
        console.log(`name: ${await titananceToken.name()} | symbol: ${await titananceToken.symbol()}`)
    })