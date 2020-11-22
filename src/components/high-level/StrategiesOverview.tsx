import React, { Suspense, useEffect } from "react";
import { useRecoilState } from "recoil";
import { vaultsAtom } from "../../utils/StateManager";
import VaultGrid from "./VaultGrid";
import { F_CRVRENBTC, F_DAI, F_RENBTC, F_TUSD, F_USDC, F_USDT, F_WBTC, F_WETH } from "../../utils/Constants";
import { HashLoader } from "react-spinners";

function StrategiesOverview() {

    let [, setVaults] = useRecoilState(vaultsAtom);
    
    useEffect(() => {
        setVaults([F_DAI, F_WETH, F_USDC, F_USDT, F_TUSD, F_WBTC, F_RENBTC, F_CRVRENBTC]);
    }, [setVaults])

    return(
        <div className="w-100">
            <h1 className="mt-6 mb-4 text-textColorLight text-center font-semibold text-2xl sm:text-4xl">Monitor Harvest Vaults</h1>
            <Suspense fallback={
                <div className="flex justify-center">
                    <HashLoader size={200} color="#FDD854" loading={true} />
                </div>
            }>
                <VaultGrid />
            </Suspense>
        </div>
    );
}

export default StrategiesOverview;