import React, { useEffect } from "react";
import Web3 from "web3";

function StrategiesOverview() {
    const web3 = require('web3');

    useEffect(() => {
        const ethEnabled = () => {
            if ((window as any).ethereum) {
                (window as any).web3 = new Web3((window as any).ethereum);
                (window as any).ethereum.enable();
                return true;
            }
            else {
                return false;
            }
        }

        console.log(ethEnabled());
    })

    return(
        <div className="w-100">
            <h1 className="mt-6 text-white text-center font-semibold text-2xl sm:text-4xl">Monitor Harvest Vaults</h1>
        </div>
    );
}

export default StrategiesOverview;