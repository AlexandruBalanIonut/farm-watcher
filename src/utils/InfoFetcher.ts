import Axios from "axios";
import { BASE_URL, COIN_ID, COIN_VS } from "./Constants";

/**
 * This class can be used to retrieve data from CoinGecko about Farm
 */
class InfoFetcher {
    
    async getCurrentStatus() {
        return Axios.get(
            BASE_URL + "/simple/price",
            {
                params: {
                    ids: COIN_ID,
                    vs_currencies: COIN_VS,
                    include_24hr_change: true
                }
            }
        );
    }

    async getWeekHistory() {
        return Axios.get(
            BASE_URL + "/coins/" + COIN_ID + "/market_chart",
            {
                params: {
                    vs_currency: COIN_VS,
                    days: 7,
                    interval: "daily"
                }
            }
        );
    }

}

export default InfoFetcher;