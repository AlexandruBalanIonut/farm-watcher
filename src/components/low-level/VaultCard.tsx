import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ETHERSCAN_CONTRACT_BASE_URL, NULL_ADDRESS } from "../../utils/Constants";
import Vault from "../../utils/HarvestVault";

function VaultCard(vault: Vault) {
    let cardStyle = "";
    let cardTextStyle = "";
    let dividerStyle = "";
    let linkStyle = "";
    if (vault.nextStrategyTime !== 0) {
        cardStyle = "flex flex-col justify-center text-center rounded-md p-2 bg-gradient-to-br from-primary to-secondary"
        cardTextStyle = "text-textColorDark"
        dividerStyle = "border-textColorDark"
        linkStyle = "text-indigo-900";
    }
    else {
        cardStyle = "flex flex-col justify-center text-center rounded-md p-2 bg-gradient-to-br from-gray-700 to-gray-900"
        cardTextStyle = "text-white"
        dividerStyle = "border-white"
        linkStyle = "text-blue-400"
    }

    return(
        <div className={cardStyle}>
            <div className={cardTextStyle}>
                <h3 className="font-bold text-xl sm:text-3xl">{vault.name}</h3>
                <h3 className="font-semibold text-lg sm:text-xl">Current Strategy:</h3>
                <a 
                href={ETHERSCAN_CONTRACT_BASE_URL + vault.strategy} 
                target="_blank" rel="noreferrer" 
                className={linkStyle + " font-bold text-lg break-words"}>
                    <FontAwesomeIcon icon="external-link-alt"className="mr-2"/>
                    {vault.strategy}
                </a>
            </div>

            <hr className={dividerStyle + " mt-2 mb-2 border-t-2 px-0"}/>

            <div className={cardTextStyle}>
                {/* Future strategy slot */}
                {
                    [vault].map(vault => {
                        if (vault.nextStrategy === NULL_ADDRESS) {
                            return <h4 key={vault.strategy}>No future strategy for now</h4>
                        }
                        else {
                            return <a 
                            key={vault.strategy} 
                            href={ETHERSCAN_CONTRACT_BASE_URL + vault.nextStrategy} 
                            target="_blank" rel="noreferrer" 
                            className={linkStyle + " font-bold text-lg break-words"}>
                                <FontAwesomeIcon icon="external-link-alt"className="mr-2"/>
                                Next strategy: {vault.nextStrategy}
                            </a>
                        }
                    })
                }

                {/* Future strategy time slot */}
                {
                    [vault].map(vault => {
                        if (vault.nextStrategyTime === 0) {
                            return null;
                        }
                        
                        if (vault.nextStrategyTime < new Date().getTime() / 1000) {
                            return <h4 className="font-semibold text-lg">This strategy could go live any moment! (Was scheduled for: {new Date(vault.nextStrategyTime * 1000).toLocaleString()})</h4>
                        }
                        else {
                            return <h4 className="font-semibold text-lg">The strategy is scheduled to go live at: {new Date(vault.nextStrategyTime * 1000).toLocaleString()}</h4>
                        }
                    })
                }
            </div>
        </div>
    );
}

export default VaultCard;