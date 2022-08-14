import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
// import { pairs } from "../data/pairs";
import useApi from "../hooks/api";

const exchangeStore = (set, get) => ({
    tradingPairs: [],
    tokens: [],
    selectedTradingPair: null,
    openOrders:[],
    completeOrders:[],
    orders: [],
    selectPair: (pair) => set({ selectedTradingPair: pair }),
    getPairs: () => {
        useApi.get("/orders/pairs").then((res) => set({ tradingPairs: res.data, selectedTradingPair: res.data[0] })) 
    },
    getTokens: () => {
        useApi.get("/tokens").then((res) => set({ tokens: res.data })) 
    },
    getOrders: (pair, page) => {
        useApi.get(`/orders?pair=${pair}`).then((res) => {
            if(page > 1){
                set({
                    orders: [res.data.orders, get().orders],
                })
            } else {
                set({
                    orders: res.data.orders,
                })
            }
        })
    },
    getOpenOrder: (user, page = 1) => {
        // console.log("User1",user)
        useApi.get(`/orders?user=${user}&page=${page}&status=open`).then((res) => {
            if(page > 1){
                set({
                    openOrders: [res.data.orders, get().openOrders],
                })
            } else {
                set({
                    openOrders: res.data.orders,
                })
            }
        })
    },
    getCompleteOrder: (user, page = 1) => {
        // console.log("User1",user)
        useApi.get(`/orders?user=${user}&page=${page}&status=complete`).then((res) => {
            if(page > 1){
                set({
                    completeOrders: [res.data.orders, get().completeOrders],
                })
            } else {
                set({
                    completeOrders: res.data.orders,
                })
            }
        })
    },
    createOrder: (user,pair,order_type,price,quantity) => {
        // console.log("User1",user)
        useApi.post("/orders/create", {
            user,
            pair,
            order_type,
            price,
            quantity
        }).then((res) => {
            set({
                openOrders: [res.data, get().openOrders],
            })
        })
    } 
});

const useExchange = create(
    persist(exchangeStore, {
        name: 'exchange',
    })
);

export default useExchange;