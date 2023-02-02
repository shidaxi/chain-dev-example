import * as dotenv from 'dotenv'
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@typechain/hardhat'
import 'hardhat-deploy'

dotenv.config()

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    local: {
      chainId: 31337,
      url: 'http://127.0.0.1:18545',
      accounts: [],
    },
    'goerli-testnet': {
      chainId: 5,
      url: 'https://rpc.ankr.com/eth_goerli',
      accounts: [],
      gas: 'auto',
      gasPrice: 'auto',
    }
  }
};

if (
  process.env.CONTRACTS_TARGET_NETWORK &&
  process.env.CONTRACTS_DEPLOYER_KEY &&
  process.env.CONTRACTS_RPC_URL
) {
  config.networks[process.env.CONTRACTS_TARGET_NETWORK] = {
    accounts: [process.env.CONTRACTS_DEPLOYER_KEY],
    url: process.env.CONTRACTS_RPC_URL,
    live: true,
    saveDeployments: true,
    tags: [process.env.CONTRACTS_TARGET_NETWORK],
  }
}

console.log(config)

export default config;
