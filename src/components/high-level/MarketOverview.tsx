import React from "react";
import { useRecoilValue } from "recoil";
import { COIN_NAME } from "../../utils/Constants";
import MarketStatObject from "../../utils/MarketStatObject";
import { marketStatusObject } from "../../utils/StateManager";
import MarketStat from "../low-level/MarketStat";

function MarketOverview() {
    let statObject: MarketStatObject = useRecoilValue(marketStatusObject);

    return (
        <div className="flex flex-col sm:flex-row justify-center content-center text-center text-xl sm:text-2xl font-semibold my-6">
            <h2 className="text-textColorLight sm:mr-6">1 {COIN_NAME} = ${statObject.price}</h2>
            <MarketStat {...statObject}/>
        </div>
    );
}

export default MarketOverview;