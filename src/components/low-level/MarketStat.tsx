import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import MarketStatObject from "../../utils/MarketStatObject";

function MarketStat(statObject: MarketStatObject) {
    let chevronElement: JSX.Element = (<div></div>);

    if (statObject.status === "up") {
        chevronElement = (<FontAwesomeIcon icon="caret-up" size="lg" className="text-green-500 mr-2"/>)
    }
    else if (statObject.status === "down") {
        chevronElement = (<FontAwesomeIcon icon="caret-down" size="lg" className="text-red-500 mr-2" />)
    }

    return (
        <div className="dark flex justify-center content-center text-center">
            {chevronElement}
            <p className="dark:text-textColorLight">{statObject.change}% in the last 24 hours</p>
        </div>
    );
}

export default MarketStat;