const main = async () => {
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

    let txn;
    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
