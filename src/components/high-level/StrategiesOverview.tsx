import React, { useCallback, useEffect, useRef, useState } from "react";
import Web3 from "web3";

function StrategiesOverview() {
    require('web3');

    const [web3Enabled, setWeb3Enabled] = useState(<h1>Unfortunatley we couldn't detect any Ethereum Wallet Extension</h1>);
    
    useEffect(() => {
        const ethEnabled = () => {
            if ((window as any).ethereum) {
                (window as any).web3 = new Web3((window as any).ethereum);
                (window as any).ethereum.enable();
                setWeb3Enabled(<></>);
            }
        }

        ethEnabled();
    });

    return(
        <div className="w-100">
            <h1 className="mt-6 text-white text-center font-semibold text-2xl sm:text-4xl">Monitor Harvest Vaults</h1>
            <h1 className="text-white">{web3Enabled}</h1>
        </div>
    );
}

export default StrategiesOverview;