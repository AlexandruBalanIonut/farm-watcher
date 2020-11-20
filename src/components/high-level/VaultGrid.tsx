import React from "react";
import { useRecoilValue } from "recoil";
import { F_DAI, F_TUSD, F_USDC, F_USDT, F_WBTC, F_WETH } from "../../utils/Constants";
import Vault, { getNextStrategy, getNextStrategyTime, getStrategy, loadContract } from "../../utils/HarvestVault";
import { web3EnabledAtom } from "../../utils/StateManager";
import VaultCard from "../low-level/VaultCard";

function VaultGrid() {
    let web3Enabled = useRecoilValue(web3EnabledAtom);
    let fdai = loadContract(F_DAI);
    let fweth = loadContract(F_WETH);
    let fusdc = loadContract(F_USDC);
    let fusdt = loadContract(F_USDT);
    let ftusd = loadContract(F_TUSD);
    let fwbtc = loadContract(F_WBTC);

    let vaults = [fdai, fweth, fusdc, fusdt, ftusd, fwbtc];

    /**
     * Loads the data in all provided vaults
     */
    function loadVaultsData(vaults: Vault[]) {
        vaults.forEach(async (vault) => {
            await getStrategy(vault);
            await getNextStrategy(vault);
            await getNextStrategyTime(vault);
        });
    }

    loadVaultsData(vaults);

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

    if (web3Enabled) {
        return(
            <section className="my-6 mx-4 grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-10">
                {
                    vaults.map(vault => {
                        return <VaultCard {...vault} key={vault.address}/>
                    })
                }
            </section>
        );
    }
    else {
        return null;
    }
}

export default VaultGrid;