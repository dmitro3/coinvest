import create from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";
import useApi from "../hooks/api";

const initialState = {
    userProfile: null,
    nonce: 0,
    loginStatus: 'not',
    address: ""
};

const authStore = (set) => ({
    userProfile: null,
    nonce: 0,
    loginStatus: 'not',
    address: "",
    addUser: (user) => set({ userProfile: user }),
    removeUser: () => set({ userProfile: null }),
    logoutUser: () => set(initialState),
    setConnectedAddress: (address) => set({ address: address }),
    setLoginStatus: (status) => set({ loginStatus: status }),
    getUserNonce: (address) => {
        useApi.post("/user/nonce",{
            eth_address: address
        }).then((res) => set({ nonce: res.data.nonce })) 
    },
    loginUser: ({eth_address, signature}) => {
        useApi.post("/user/auth", {
            eth_address,
            signature
        }).then((res) => set({ userProfile: res.data, loginStatus: 'loggedin' }))
    }
});

const useAuth = create(
    persist(authStore, {
        name: 'auth'
    })
);

export default useAuth;