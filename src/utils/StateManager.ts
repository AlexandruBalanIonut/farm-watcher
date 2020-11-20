import { atom, selector } from "recoil";
import { getHistoryObject } from "./HistoryObject";
import { getStatusObject } from "./MarketStatObject";

const web3EnabledAtom = atom({
    key: "web3EnabledAtom",
    default: false
});

const ethAccountAtom = atom({
    key: "ethAccountAtom",
    default: "0x000000"
});

const marketStatusObject = selector({
    key: "marketStatusObjectSelector",
    get: async ({}) => {
        const object = await getStatusObject();

        return object;
    }
});

const historyObject = selector({
    key: "historyObjectSelector",
    get: async ({}) => {
        const object = await getHistoryObject();

        return object;
    }
});

export { marketStatusObject, historyObject, web3EnabledAtom, ethAccountAtom }