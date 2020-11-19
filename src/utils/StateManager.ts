import { selector } from "recoil";
import { getHistoryObject } from "./HistoryObject";
import { getStatusObject } from "./MarketStatObject";

const marketStatusObject = selector({
    key: "marketStatusObjectSelector",
    get: async ({get}) => {
        const object = await getStatusObject();

        return object;
    }
});

const historyObject = selector({
    key: "historyObjectSelector",
    get: async ({get}) => {
        const object = await getHistoryObject();

        return object;
    }
});

export { marketStatusObject, historyObject }