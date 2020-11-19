import { COIN_ID, COIN_VS } from "./Constants";
import InfoFetcher from "./InfoFetcher";

/**
 * DO NOT instantiate this class manually, use the useStatusObject() method.
 * 
 * This class contains generic information about the current status of the market regarding FARM.
 * Data is relevant to the last 24 hours.
 * Objects of this class are used to render the MarketStat component.
 */
class MarketStatObject {
    price: number = 0.0;
    change: number = 0.0;
    status: string = "neuter";

    constructor(change: number, price: number) {
        this.change = parseFloat(change.toFixed(2));
        this.price = price;

        if (change > 0) {
            this.status = "up";
        }
        else if (change < 0) {
            this.status = "down";
        }
    }
}

/**
 * Will get the CoinGecko status of FARM and return a MarketStatObject.
 * Use this method to get an instance of MarketStatObject.
 */
async function getStatusObject(): Promise<MarketStatObject> {
    let stat = await fetcher.getCurrentStatus()
    .then(response => {
        console.log("Coin status received!");

        let data = response.data[COIN_ID]
        let marketStatObject = new MarketStatObject(data[COIN_VS + "_24h_change"], data[COIN_VS]);

        return marketStatObject;
    })
    .catch(reason => {
        console.log(reason);
        return new MarketStatObject(0,0);
    });

    return stat;
}

const fetcher: InfoFetcher = new InfoFetcher;

export default MarketStatObject;
export { getStatusObject };