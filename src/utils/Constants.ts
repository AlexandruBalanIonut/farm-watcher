import Vault from "./HarvestVault";
import VaultJSON from "./Vault.json"

const COIN_ID = "harvest-finance";
const COIN_VS = "usd";
const COIN_NAME = "FARM";
const BASE_URL = "https://api.coingecko.com/api/v3";
const ETHERSCAN_CONTRACT_BASE_URL = "https://etherscan.io/address/";
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
const INFURA_ENDPOINT = "https://mainnet.infura.io/v3/591c49f3212a4d4e93de53866e6f6265";

const Vault_ABI = VaultJSON;

export { COIN_ID, COIN_VS, COIN_NAME, BASE_URL, Vault_ABI, ETHERSCAN_CONTRACT_BASE_URL, NULL_ADDRESS, INFURA_ENDPOINT }

/*****************************
 * Defining the Harvest Vaults
 *****************************/

let F_DAI = new Vault("Multicollateral DAI Farm", "0xab7FA2B2985BCcfC13c6D86b1D5A17486ab1e04C");
let F_WETH = new Vault("Wrapped Ethereum Farm", "0xFE09e53A81Fe2808bc493ea64319109B5bAa573e");
let F_USDC = new Vault("USDC Farm", "0xf0358e8c3CD5Fa238a29301d0bEa3D63A17bEdBE");
let F_USDT = new Vault("USDT Farm", "0x053c80eA73Dc6941F518a68E2FC52Ac45BDE7c9C");
let F_TUSD = new Vault("TUSD Farm", "0x7674622c63Bee7F46E86a4A5A18976693D54441b");
let F_WBTC = new Vault("Wrapped Bitcoin Farm", "0x5d9d25c7C457dD82fc8668FFC6B9746b674d4EcB");
let F_RENBTC = new Vault("Ren Protocol Bitcoin Farm", "0xC391d1b08c1403313B0c28D47202DFDA015633C4");
let F_CRVRENBTC = new Vault("Curve RENBTC Farm", "0x9aA8F427A17d6B0d91B6262989EdC7D45d6aEdf8");


export { F_DAI, F_WETH, F_USDC, F_USDT, F_TUSD, F_WBTC, F_RENBTC, F_CRVRENBTC }