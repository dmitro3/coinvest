import React from 'react';
import { Link } from 'react-router-dom';
import HeroImg from "../data/hero.png";
import { GoPrimitiveDot } from "react-icons/go";
import MaticIcon from "../data/cryptos/matic.png";
import UsdtIcon from "../data/cryptos/usdt.png";
import { IoArrowUndoSharp,IoArrowRedoSharp } from "react-icons/io5";
import TransactionRow from './TransactionRow';
const HeroSection = () => {
  return (
    <div className="flex w-full py-16 bg-gray-900">
        <div className="container flex mx-auto text-white justify-between">
            <div className="flex-1 flex-col space-y-8 pt-2">
                <h1 className="text-6xl">P2P Escrow Crypto Exchange</h1>
                <p className="text-gray-400">Learn how Escoin can help with all your bitcoin & cryptocurrency payment needs. Welcome to the new way to trade!</p>
                <div className="flex space-x-3 items-center">
                    <Link to="/app" className="p-3 px-5 font-semibold bg-green-500 rounded-xl">Go to app</Link>
                    <Link to="/app" className="p-3 px-5 font-semibold border text-green-500 border-green-500 rounded-xl">Learn More</Link>
                </div>
                <div className="flex flex-col">
                    <p className="flex items-center space-x-1 font-medium text-xl mb-5"><span>Live Transactions</span><GoPrimitiveDot className="text-green-500 mt-1"/></p>
                    <TransactionRow token1={MaticIcon} token2={UsdtIcon} buyer="Himanshu" seller="Rohit" amount={0.023} currency="MATIC" time={"12 second ago"} explorerUrl="/"/>
                    <TransactionRow token1={MaticIcon} token2={UsdtIcon} buyer="Himanshu" seller="Rohit" amount={0.023} currency="MATIC" time={"12 second ago"} explorerUrl="/"/>
                </div>
            </div>
            <div className="flex-1 justify-center items-center">
                <img src={HeroImg}/>
            </div>
        </div>
    </div>
  )
}

export default HeroSection