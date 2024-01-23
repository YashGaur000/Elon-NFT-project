require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const {API_URL_KEY, PRIVATE_KEY}=process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: API_URL_KEY,
      account: [`0x${PRIVATE_KEY}`]
    },
  },
};
