import InfoFetcher from "./InfoFetcher";

/**
 * This object represents the 7-day price history of FARM relative to USD
 */
class HistoryObject {
    prices: Array<number> = [];
    datePoints: Array<string> = [];
}

async function getHistoryObject(): Promise<HistoryObject> {
    return await fetcher.getWeekHistory()
    .then(response => {
        console.log("Week history received!");

        let data = response.data["prices"];

        let historyObject: HistoryObject = new HistoryObject();

        data.forEach((item: any) => {
            historyObject.prices.push(item[1]);
            let date = new Date(item[0]).toLocaleDateString();
            historyObject.datePoints.push(date);
        });

        return historyObject;
    })
    .catch(reason => {
        console.error(reason);

        return new HistoryObject();
    });
}

const fetcher = new InfoFetcher();

export default HistoryObject;
export { getHistoryObject }