import React, { useState } from "react";
import SelectTradingPair from "./SelectTradingPair";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSwapCalls } from "react-icons/md"; 
const CreateOrder = () => {
  const [orderType, setOrderType] = useState("buy");

  const buyForm = () => (
    <>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
            <IoWalletOutline className="w-6 h-6"/>
            <input type="text" step={0.1} placeholder="Price" className="ring-none border-none bg-transparent focus:ring-0 w-[100%] appearance-none"/>
            <span className="text-xs text-gray-400 font-semibold">INR</span>
            {/* <div className="flex flex-col bg-gray-100 w-14 h-[100%] rounded-r-xl">
                <span className="text-xs capitalise ">Price</span>
            </div> */}
        </div>
        <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
            <MdOutlineSwapCalls className="w-6 h-6"/>
            <input type="text" step={0.1} placeholder="Volume" className="ring-none border-none bg-transparent focus:ring-0 w-[100%] " />
            <span className="text-xs text-gray-400 font-semibold">USDT</span>
            {/* <div className="flex flex-col bg-gray-100 w-14 h-full rounded-r-xl">
                 <span className="text-xs capitalise ">Volume</span> 
            </div> */}
        </div>
        <div className="flex items-center justify-between text-gray-400 font-semibold">
          <p>Total</p>
          <p>234 <span className="text-xs text-gray-400 font-semibold">USDT</span></p>
        </div>
        <button className="flex items-center justify-center border rounded-xl text-center p-2 space-x-1 px-2 bg-green-500 text-white font-semibold">
            <span>Buy</span>
        </button>
    </>
  );

  const sellForm = () => (
    <>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
            <IoWalletOutline className="w-6 h-6"/>
            <input type="text" step={0.1} placeholder="Price" className="ring-none border-none bg-transparent focus:ring-0 w-[100%] appearance-none"/>
            <span className="text-xs text-gray-400 font-semibold">INR</span>
            {/* <div className="flex flex-col bg-gray-100 w-14 h-[100%] rounded-r-xl">
                <span className="text-xs capitalise ">Price</span>
            </div> */}
        </div>
        <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
            <MdOutlineSwapCalls className="w-6 h-6"/>
            <input type="text" step={0.1} placeholder="Volume" className="ring-none border-none bg-transparent focus:ring-0 w-[100%] " />
            <span className="text-xs text-gray-400 font-semibold">USDT</span>
            {/* <div className="flex flex-col bg-gray-100 w-14 h-full rounded-r-xl">
                 <span className="text-xs capitalise ">Volume</span> 
            </div> */}
        </div>
        <div className="flex items-center justify-between text-gray-400 font-semibold">
          <p>Total</p>
          <p>234 <span className="text-xs text-gray-400 font-semibold">USDT</span></p>
        </div>
        <button className="flex items-center justify-center border rounded-xl text-center p-2 space-x-1 px-2 bg-red-500 text-white font-semibold">
            <span>Sell</span>
        </button>
    </>
  );
  return (
    <div className="flex flex-col p-3">
      <SelectTradingPair />
      <div className="flex flex-col py-3 border-b-2 border-t-2 border-dashed space-y-1">
        <span className="text-gray-500 font-medium">Market Price</span>
        <span className="text-2xl font-semibold ">63457.98</span>
      </div>
      <div className="flex py-3 text-sm space-x-1 justify-between mb-4">
        <span className="text-gray-900 font-semibold">
          $63457.98{" "}
          <span className="bg-gray-200 p-1 rounded-2xl text-gray-800 text-xs">
            USD
          </span>
        </span>
        <span className=" font-semibold">
          <span className="text-gray-400">Volume:</span> 972,762,277.94
        </span>
      </div>
      <div className="flex flex-col space-y-3 bg-white border p-3 rounded-xl border-gray-100">
        <div className="flex p-1 text-sm font-semibold border-b space-x-2 bg-gray-100 border border-gray-50 rounded-xl items-center">
          <span className={`w-full text-center p-2 px-3 rounded-lg justify-center flex items-center space-x-2 ${orderType === 'buy' ? 'bg-white' : ''} hover:shadow-sm cursor-pointer`} onClick={() => setOrderType('buy')}>
            Buy
          </span>
          <span className={`w-full text-center justify-center p-2 px-3 rounded-lg flex items-center space-x-2 ${orderType === 'sell' ? 'bg-white' : ''} hover:shadow-sm cursor-pointer`} onClick={() => setOrderType('sell')}>
            Sell
          </span>
        </div>
        { orderType === 'buy' ? buyForm() : sellForm() }

      </div>

    </div>
  );
};

export default CreateOrder;
