import React, {  } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Vault from "../../utils/HarvestVault";
import { loadedVaultsSelector, vaultsAtom } from "../../utils/StateManager";
import VaultCard from "../low-level/VaultCard";

function VaultGrid() {

    let loadedVaults = useRecoilValue(loadedVaultsSelector);

    return (
            <section className="my-6 mx-4 grid grid-cols-1 xl:grid-cols-3 gap-x-8 gap-y-10">
                {
                    loadedVaults.map(vault => {
                        return <VaultCard {...vault} key={vault.address}/>
                    })
                }
            </section>
    );
}

export default VaultGrid;