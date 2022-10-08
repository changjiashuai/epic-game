// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {

    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["Monster", "Tifa", "Groot"],
        ["https://i.imgur.com/c25eTQU.jpeg", "https://i.imgur.com/73MgFkV.jpeg", "https://i.imgur.com/qLyTY82.gif"],
        [100, 200, 300],
        [100, 50, 25],
        "Flerken", // Boss name
        "https://i.imgur.com/oJv9KJj.jpeg", // Boss image
        10000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
