import Vault from "./HarvestVault";
import VaultJSON from "./Vault.json"

const COIN_ID = "harvest-finance";
const COIN_VS = "usd";
const COIN_NAME = "FARM";
const BASE_URL = "https://api.coingecko.com/api/v3";
const ETHERSCAN_CONTRACT_BASE_URL = "https://etherscan.io/address/";
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000"

const Vault_ABI = VaultJSON;

export { COIN_ID, COIN_VS, COIN_NAME, BASE_URL, Vault_ABI, ETHERSCAN_CONTRACT_BASE_URL, NULL_ADDRESS }

/*****************************
 * Defining the Harvest Vaults
 *****************************/

let F_DAI = new Vault("Multicollateral DAI Farm", "0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C");
let F_WETH = new Vault("Wrapped Ethereum Farm", "0xFE09e53A81Fe2808bc493ea64319109B5bAa573e");
let F_USDC = new Vault("USDC Farm", "0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE");
let F_USDT = new Vault("USDT Farm", "0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C");
let F_TUSD = new Vault("TUSD Farm", "0x7674622c63Bee7F46E86a4A5A18976693D54441b");
let F_WBTC = new Vault("Wrapped Bitcoin Farm", "0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB")

export { F_DAI, F_WETH, F_USDC, F_USDT, F_TUSD, F_WBTC }