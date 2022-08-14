import React from 'react';
import { useEffect } from 'react';
import { AiFillClockCircle } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import MaticIcon from "../data/cryptos/matic.png";
import UsdtIcon from "../data/cryptos/usdt.png";
import WbtcIcon from "../data/cryptos/wbtc.png";
import useExchange from '../store/exchangeStore';
const PriceBar = () => {
    const { tradingPairs, getPairs } = useExchange()
    console.log("Pairs", tradingPairs);
    useEffect(() => {
        getPairs();
    },[]);
  return (
    <div className="flex w-full border-b border-gray-700 py-4 bg-gray-800">
        <marquee >

        <div className="container flex mx-auto text-white justify-between">
            {/* <div className="flex items-center space-x-2 text-lg text-gray-400">
                <AiFillClockCircle className="text-2xl"/>
                <p className="font-medium">Latest</p>
            </div> */}
            
            <div className="flex items-center space-x-2 mr-14">
                <img src={MaticIcon} className="rounded-full w-6 h-6"/>
                <p className="text-gray-400 font-medium">Polygon (MATIC)</p>
                <p className="text-white font-medium">$0.496249</p>
                <p className="flex items-center text-green-400"><TiArrowSortedUp/><span>1.59%</span></p>
            </div>
            <div className="flex items-center space-x-2 mr-14">
                <img src={WbtcIcon} className="rounded-full w-6 h-6"/>
                <p className="text-gray-400 font-medium">Wrapped Bitcoin (WBTC)</p>
                <p className="text-white font-medium">$38,619.91</p>
                <p className="flex items-center text-green-400"><TiArrowSortedUp/><span>2.56%</span></p>
            </div>
            <div className="flex items-center space-x-2 mr-14">
                <img src={UsdtIcon} className="rounded-full w-6 h-6"/>
                <p className="text-gray-400 font-medium">Tether (USDT)</p>
                <p className="text-white font-medium">$1.0</p>
                <p className="flex items-center text-green-400"><TiArrowSortedUp/><span>0.02%</span></p>
            </div>
        </div>
        </marquee>
    </div>
  )
}

export default PriceBar