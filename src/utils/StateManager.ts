import { atom, selector } from "recoil";
import Vault, { getNextStrategy, getNextStrategyTime, getStrategy, loadContract } from "./HarvestVault";
import { getHistoryObject } from "./HistoryObject";
import { getStatusObject } from "./MarketStatObject";

async function sortData(vaults: Vault[]) {
    vaults.sort((a,b) => {
        if (a.nextStrategyTime !== 0 && b.nextStrategyTime !== 0) {
            if (a.nextStrategyTime < b.nextStrategyTime) {
                return -1;
            }
            else {
                return 1
            }
        }
        else {
            if (a.nextStrategyTime === 0) {
                return 1;
            }
            else {
                return -1
            }
        }
    });

    let now = new Date();
    
    if (vaults.length !== 0) {
        /**
         * Strip the vaults of their contracts because they are not loadable into JSON
         */
        vaults.forEach(vault => {
            vault.callableContract = undefined;
        });

        localStorage.setItem("loadedVaults", JSON.stringify(vaults));
        localStorage.setItem("nextFetch", (now.getTime() + 5*60*60*1000).toString());
    }

    return vaults;
}

const web3EnabledAtom = atom({
    key: "web3EnabledAtom",
    default: true
});

const ethAccountAtom = atom({
    key: "ethAccountAtom",
    default: "0x000000"
});

const marketStatusObject = selector({
    key: "marketStatusObjectSelector",
    get: async () => {
        const object = await getStatusObject();

        return object;
    }
});

const historyObject = selector({
    key: "historyObjectSelector",
    get: async () => {
        const object = await getHistoryObject();

        return object;
    }
});

const vaultsAtom = atom({
    key: "vaultsAtom",
    default: new Array<Vault>()
});

const loadedVaultsSelector = selector({
    key: "loadedVaultsSelector",
    get: async ({get}) => {
        let vaults = JSON.parse(JSON.stringify(get(vaultsAtom))) as Array<Vault>;
        let nextFetch = localStorage.getItem("nextFetch");
        let now = new Date();

        if (nextFetch) {
            let nextFetchTimestamp = parseInt(nextFetch);
            if (nextFetchTimestamp > now.getTime()) {
                vaults = JSON.parse(localStorage.getItem("loadedVaults")!);
            }
            else {
                let vaults = JSON.parse(JSON.stringify(get(vaultsAtom))) as Array<Vault>;
                for (let index = 0; index < vaults.length; index++) {
                    loadContract(vaults[index]);
                    await getNextStrategy(vaults[index]);
                    await getStrategy(vaults[index]);
                    await getNextStrategyTime(vaults[index]);
                }

                await sortData(vaults);
            }
        }
        else {
            for (let index = 0; index < vaults.length; index++) {
                loadContract(vaults[index]);
                await getNextStrategy(vaults[index]);
                await getStrategy(vaults[index]);
                await getNextStrategyTime(vaults[index]);
            }

            await sortData(vaults);
        }

        return vaults;
    }
})

export { marketStatusObject, historyObject, web3EnabledAtom, ethAccountAtom, vaultsAtom, loadedVaultsSelector }