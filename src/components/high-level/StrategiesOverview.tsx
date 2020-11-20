import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { web3EnabledAtom } from "../../utils/StateManager";
import EthUnavailable from "../low-level/EthUnavailable";
import VaultGrid from "./VaultGrid";

function StrategiesOverview() {
    require('web3');

    let web3Enabled = useRecoilValue(web3EnabledAtom);
    let web3ConnectComponent = (<EthUnavailable />);

    useEffect(() => {
        if (web3Enabled) {
            console.log("Connected to Ethereum network");
        }
    }, [web3Enabled]);

    return(
        <div className="w-100">
            <h1 className="mt-6 mb-4 text-white text-center font-semibold text-2xl sm:text-4xl">Monitor Harvest Vaults</h1>
            {web3ConnectComponent}
            <VaultGrid />
        </div>
    );
}

export default StrategiesOverview;