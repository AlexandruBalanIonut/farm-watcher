import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRecoilState } from "recoil";
import Web3 from "web3";
import { ethAccountAtom, web3EnabledAtom } from "../../utils/StateManager";

/**
 * This component will display the UI that lets you connect to the Ethereum network
 */
function EthUnavailable() {
    const [web3Enabled, setWeb3Enabled] = useRecoilState(web3EnabledAtom);
    const [ethAccount, setEthAccount] = useRecoilState(ethAccountAtom);

    function enableWeb3() {
        if (!web3Enabled) {
            require('web3');

            if ((window as any).ethereum) {
                (window as any).web3 = new Web3((window as any).ethereum);
                let ethereum = (window as any).ethereum;
                
                ethereum.request({ method: 'eth_requestAccounts' })
                .then((accounts: string[]) => {
                    setEthAccount(accounts[0].slice(0, 10) + "...");
                    setWeb3Enabled(true);
                })
                .catch(() => {
                    console.error("The connection to Ethereum has been interrupted!");
                });    
            }
        }
    }

    if (web3Enabled) {
        return (
            <div className="flex flex-col sm:flex-row justify-center content-center">
                <FontAwesomeIcon icon="wallet" size="2x" className="mx-auto sm:mx-0 sm:mr-6 text-green-300"/>
                <h2 className="text-white text-center font-semibold text-lg sm:text-xl">You are now connected as: {ethAccount}</h2>
            </div>
        );
    }
    else {
        return (
            <div className="flex justify-center mb-10">
                <button onClick={() => enableWeb3()} className="mr-4 p-2 bg-primary rounded-md text-black font-bold text-xl">Connect to Metamask</button>
                <img width="42" height="42" src="/assets/images/metamask.svg" alt="MetamaskLogo"/>
            </div>
        );
    }
}

export default EthUnavailable;