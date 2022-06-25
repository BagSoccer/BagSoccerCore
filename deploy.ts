import { ethers } from "hardhat";
import { Bags__factory } from "./../typechain/factories/Bags__factory";

async function main() {
  const accounts = await ethers.getSigners();
  const deploymentAccount = accounts[1];
  const bagfactory = new Bags__factory(deploymentAccount);
  const instance = await bagfactory.deploy();
  await instance.deployed();
}

//npx hardhat run deploy/deploy.ts --network mainnet
//npx hardhat verify 0xC7d38bccFf9Cd27FcE989e7ad60A3C3496Ac52E1 --network mainnet

main();
