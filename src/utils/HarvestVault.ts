import { Vault_ABI } from "./Constants";

var Contract = require('web3-eth-contract');

Contract.setProvider("wss://mainnet.infura.io/ws/v3/591c49f3212a4d4e93de53866e6f6265");

/**
 * General description of a Harvest Vault
 */
class Vault {
    address: string = ""
    name: string = ""
    contract = Vault_ABI.result
    strategy: string = ""
    nextStrategy: string = ""
    nextStrategyTime: number = 0
    startegyTimeLock: Date = new Date()
    callableContract: any = undefined;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
}

/**
     * This method must be called before you want to query the Vault
     */
    function loadContract(vault: Vault): Vault {
        vault.callableContract = new Contract(JSON.parse(vault.contract), vault.address);
        return vault;
    }

    /**
     * Retrieves the current strategy used by this valut
     */
    async function getStrategy(vault: Vault): Promise<Vault> {
        await vault.callableContract.methods.strategy().call()
        .then((result: string) => {
            vault.strategy = result;
        })
        .catch((reason: any) => {
            console.error(reason);
        });

        return vault;
    }

    async function getNextStrategy(vault: Vault): Promise<Vault> {
        await vault.callableContract.methods.futureStrategy().call()
        .then((result: string) => {
            vault.nextStrategy = result;
        })
        .catch((reason: any) => {
            console.error(reason);
        });

        return vault;
    }

    async function getNextStrategyTime(vault: Vault): Promise<Vault> {
        await vault.callableContract.methods.strategyUpdateTime().call()
        .then((result: string) => {
            vault.nextStrategyTime = parseInt(result);
        })
        .catch((reason: any) => {
            console.error(reason);
        });

        return vault;
    }

export default Vault;

export { loadContract, getStrategy, getNextStrategy, getNextStrategyTime }