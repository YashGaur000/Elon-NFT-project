// // We require the Hardhat Runtime Environment explicitly here. This is optional
// // but useful for running the script in a standalone fashion through `node <script>`.
// //
// // You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// // will compile your contracts, add the Hardhat Runtime Environment's members to the
// // global scope, and execute the script.
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 2*60;

//   const lockedAmount = hre.ethers.parseEther("2");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });





//                ELON'S CODE HERE FOR DEPLOYMENT ONLY


// const hre=require("hardhat")

// async function main(){
// console.log("Deploying Contract...");
// const elon=await hre.ethers.deployContract("ElonNFT")
// console.log("Contract Deployed to address",elon.target);
// }

// main()
//   .then(() =>process.exit(0))
//   .catch((error) => {
//   console.log("Error: " + error)
//   process.exit(1);
// });



//            NOW MINTING THE ELON'S NFT WITH DEPLOYMENT

const {ethers}= require("hardhat");

async function main() {
const deployNFTContract = await ethers.deployContract("ElonNFT");
const elon = await deployNFTContract.waitForDeployment();
console.log("NFT address is",await elon.getAddress());

console.log("Minting NFT...");
let txn = await elon.mintNFT();
await txn.wait();
console.log("Yay... Your NFT is minted successfully");
}
main()
  .then(()=>process.exit(0))
  .catch((error)=>{
  console.log("Error: " + error);
  process.exit(1);
  })