import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import { pairs } from "../data/pairs";

const exchangeStore = (set) => ({
    tradingPairs: pairs,
    selectedTradingPair: pairs[0],

    selectPair: (pair) => set({ selectedTradingPair: pair }),
});

const useExchange = create(
    persist(exchangeStore, {
        name: 'exchange',
    })

);

export default useExchange;