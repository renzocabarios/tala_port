import dotenv from 'dotenv';

dotenv.config();

interface IBlockchainConfig {
  JSON_RPC_URL: string;
  REGISTRY_CONTRACT_ADDRESS: string;
  ACCOUNT: string;
}
const SEPOLIA: IBlockchainConfig = {
  JSON_RPC_URL: process.env.SEPOLIA_URL || '',
  REGISTRY_CONTRACT_ADDRESS: process.env.SEPOLIA_REGISTRY_CONTRACT_ADDRESS || '',
  ACCOUNT: process.env.SEPOLIA_ACCOUNT || '',
};

const SKYSHARES: IBlockchainConfig = {
  JSON_RPC_URL: process.env.SKYSHARES_URL || '',
  REGISTRY_CONTRACT_ADDRESS: process.env.SKYSHARES_REGISTRY_CONTRACT_ADDRESS || '',
  ACCOUNT: process.env.SKYSHARES_ACCOUNT || '',
};

const LOCALHOST: IBlockchainConfig = {
  JSON_RPC_URL: 'http://localhost:8545/',
  REGISTRY_CONTRACT_ADDRESS: process.env.LOCALHOST_REGISTRY_CONTRACT_ADDRESS || '',
  ACCOUNT: process.env.LOCALHOST_ACCOUNT || '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
};

const MAINNET: IBlockchainConfig = {
  JSON_RPC_URL: process.env.MAINNET_URL || '',
  REGISTRY_CONTRACT_ADDRESS: process.env.MAINNET_REGISTRY_CONTRACT_ADDRESS || '',
  ACCOUNT: process.env.MAINNET_ACCOUNT || '',
};

const BLOCKCHAIN_CONFIGS = {
  SEPOLIA,
  SKYSHARES,
  MAINNET,
  LOCALHOST,
};

type NETWORKS = 'SEPOLIA' | 'MAINNET' | 'SKYSHARES' | 'LOCALHOST';

export const NETWORK: NETWORKS = (process.env.NETWORK as NETWORKS) ?? 'LOCALHOST';

export const BLOCKCHAIN_CONFIG = BLOCKCHAIN_CONFIGS[NETWORK];
