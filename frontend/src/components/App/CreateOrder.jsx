import React, { useState } from "react";
import SelectTradingPair from "./SelectTradingPair";
import { IoWalletOutline } from "react-icons/io5";
const CreateOrder = () => {
  const [orderType, setOrderType] = useState("buy");
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
      <div className="flex flex-col space-y-3 bg-white border p-3 rounded-xl border-gray-50">
        <div className="flex p-1 text-sm font-semibold border-b border-graay-50 space-x-2 bg-gray-100 border border-gray-50 rounded-xl items-center">
          <span className={`w-full text-center p-2 px-3 rounded-lg justify-center flex items-center space-x-2 ${orderType === 'buy' ? 'bg-white' : ''} hover:shadow-sm cursor-pointer`} onClick={() => setOrderType('buy')}>
            Buy
          </span>
          <span className={`w-full text-center justify-center p-2 px-3 rounded-lg flex items-center space-x-2 ${orderType === 'sell' ? 'bg-white' : ''} hover:shadow-sm cursor-pointer`} onClick={() => setOrderType('sell')}>
            Sell
          </span>
        </div>
        <div className="flex items-center border rounded-xl border-gray-100 p-2 space-x-1">
            <IoWalletOutline/>
            <input type="nnumber" placeholder="Price" className="bg-transperent ring-none"/>
            <div className="flex flex-col">
                <span className="text-sm capitalise">Price</span>
                <span className="text-xs">INR</span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default CreateOrder;
