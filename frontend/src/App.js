import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dashboard from './pages/app/Dashboard';
import Welcome from './pages/Welcome';
import Discover from "./pages/app/Discover";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import CustomAvatar from './components/App/CustomAvatar';
import Mybaskets from './pages/app/Mybaskets';
import MySingleBasket from './pages/app/MySingleBasket';

const { chains, provider } = configureChains(
  [chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.REACT_APP_ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const Disclaimer = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);


function App() {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider 
        showRecentTransactions={true} 
        // avatar={CustomAvatar} 
        chains={chains}
        appInfo={{
          appName: 'P2P Escrow Exchange',
          disclaimer: Disclaimer,
        }}
      >
        <div className="flex min-h-screen bg-gray-50 dark:bg-gray-700">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/about" element={<div>About</div>}/>
            <Route path="/contact" element={<div>Contact</div>}/>
            <Route path="/app" element={<Dashboard/>}/>
            <Route path="/app/discover" element={<Discover/>}/>
            <Route path="/app/baskets" element={<Mybaskets/>}/>
            <Route path="/app/baskets/:id" element={<MySingleBasket/>}/>
          </Routes>
        </BrowserRouter>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
