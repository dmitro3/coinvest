import React, { useEffect, useState } from "react";
import SelectTradingPair from "./SelectTradingPair";
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineSwapCalls } from "react-icons/md";
import useExchange from "../../store/exchangeStore";
import useAuth from "../../store/authStore";
import { getUsdPrice } from "../../hooks/useChainlink";
import { useBalance } from "wagmi";
const CreateOrder = () => {
  const [orderType, setOrderType] = useState("buy");
  const [price, setPrice] = useState(0.0);
  const [quantity, setQuantity] = useState(0);
  const [usdPrice, setUsdPrice] = useState(0.0);
  const { userProfile } = useAuth();
  const {
    selectedTradingPair,
    createOrder,
  } = useExchange();

  const { data, isError, isLoading } = useBalance({
    addressOrName: userProfile !== null ? userProfile.eth_address : "",
    token: selectedTradingPair.token1.address !== "0x0000000000000000000000000000000000000000" ? selectedTradingPair.token1.address : "",
  })
  console.log("Data", data);
  
  useEffect(() => {
    getUsdPrice(selectedTradingPair.token1.priceAddress).then((data) => {
      setUsdPrice(data);
      setPrice(data);
    });
  }, [selectedTradingPair]);
  const handleBuyNow = () => {
    createOrder(
      userProfile._id,
      selectedTradingPair._id,
      "buy",
      price,
      quantity
    );
  };

  const handleSellNow = () => {
    createOrder(
      userProfile._id,
      selectedTradingPair._id,
      "sell",
      price,
      quantity
    );
  };


  const buyForm = () => (
    <>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
        <IoWalletOutline className="w-6 h-6" />
        <input
          type="text"
          step={0.1}
          placeholder="Price"
          className="ring-none border-none bg-transparent focus:ring-0 w-[100%] appearance-none"
          value={price}
          onChange={(e) => setPrice(e.target.value.replace(/[^0-9.]/g, ""))}
        />
        <span className="text-xs text-gray-400 font-semibold">
          {selectedTradingPair && selectedTradingPair.token2.symbol}
        </span>
        {/* <div className="flex flex-col bg-gray-100 w-14 h-[100%] rounded-r-xl">
                <span className="text-xs capitalise ">Price</span>
            </div> */}
      </div>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
        <MdOutlineSwapCalls className="w-6 h-6" />
        <input
          type="text"
          step={0.1}
          placeholder="Volume"
          className="ring-none border-none bg-transparent focus:ring-0 w-[100%]"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value.replace(/[^0-9.]/g, ""))}
        />
        <span className="text-xs text-gray-400 font-semibold">
          {selectedTradingPair && selectedTradingPair.token1.symbol}
        </span>
        {/* <div className="flex flex-col bg-gray-100 w-14 h-full rounded-r-xl">
                 <span className="text-xs capitalise ">Volume</span> 
            </div> */}
      </div>
      <div className="flex items-center justify-between text-gray-400 font-semibold">
        <p>Total</p>
        <p>
          {(price * quantity).toFixed(2)}{" "}
          <span className="text-xs text-gray-400 font-semibold">
            {selectedTradingPair && selectedTradingPair.token2.symbol}
          </span>
        </p>
      </div>
      <button
        className="flex items-center justify-center border rounded-xl text-center p-2 space-x-1 px-2 bg-green-500 text-white font-semibold"
        onClick={handleBuyNow}
        disabled={data?.formatted <= 0}
      >
        <span>Buy</span>
      </button>
    </>
  );

  const sellForm = () => (
    <>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
        <IoWalletOutline className="w-6 h-6" />
        <input
          type="text"
          step={0.1}
          placeholder="Price"
          className="ring-none border-none bg-transparent focus:ring-0 w-[100%] appearance-none"
          value={price}
          onChange={(e) => setPrice(e.target.value.replace(/[^0-9.]/g, ""))}
        />
        <span className="text-xs text-gray-400 font-semibold">
          {selectedTradingPair && selectedTradingPair.token2.symbol}
        </span>
        {/* <div className="flex flex-col bg-gray-100 w-14 h-[100%] rounded-r-xl">
                <span className="text-xs capitalise ">Price</span>
            </div> */}
      </div>
      <div className="flex items-center justify-between border rounded-xl border-gray-100 space-x-1 px-2">
        <MdOutlineSwapCalls className="w-6 h-6" />
        <input
          type="text"
          step={0.1}
          placeholder="Volume"
          className="ring-none border-none bg-transparent focus:ring-0 w-[100%]"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value.replace(/[^0-9.]/g, ""))}
        />
        <span className="text-xs text-gray-400 font-semibold">
          {selectedTradingPair && selectedTradingPair.token1.symbol}
        </span>
        {/* <div className="flex flex-col bg-gray-100 w-14 h-full rounded-r-xl">
                 <span className="text-xs capitalise ">Volume</span> 
            </div> */}
      </div>
      <div className="flex items-center justify-between text-gray-400 font-semibold">
        <p>Total</p>
        <p>
          {(price * quantity).toFixed(2)}{" "}
          <span className="text-xs text-gray-400 font-semibold">
            {selectedTradingPair && selectedTradingPair.token2.symbol}
          </span>
        </p>
      </div>
      <button
        className="flex items-center justify-center border rounded-xl text-center p-2 space-x-1 px-2 bg-red-500 text-white font-semibold"
        onClick={handleSellNow}
        disabled={data?.formatted <= 0}
      >
        <span>Sell</span>
      </button>
    </>
  );
  return (
    <div className="flex flex-col p-3">
      <SelectTradingPair />
      <div className="flex flex-col py-3 border-b-2 border-t-2 border-dashed space-y-1">
        <span className="text-gray-500 font-medium">Market Price</span>
        <span className="text-2xl font-semibold ">{usdPrice.toFixed(2)}</span>
      </div>
      <div className="flex py-3 text-sm space-x-1 justify-between mb-4">
        <span className="text-gray-900 font-semibold">
          {usdPrice.toFixed(2)}{" "}
          <span className="bg-gray-200 p-1 rounded-2xl text-gray-800 text-xs">
            USD
          </span>
        </span>
        <span className=" font-semibold">
          <span className="text-gray-400">Your Balance:</span>{" "}
          {parseFloat(data?.formatted).toFixed(3)}{' '}{data?.symbol}
        </span>
      </div>
      <div className="flex flex-col space-y-3 bg-white border p-3 rounded-xl border-gray-100">
        <div className="flex p-1 text-sm font-semibold border-b space-x-2 bg-gray-100 border border-gray-50 rounded-xl items-center">
          <span
            className={`w-full text-center p-2 px-3 rounded-lg justify-center flex items-center space-x-2 ${
              orderType === "buy" ? "bg-white" : ""
            } hover:shadow-sm cursor-pointer`}
            onClick={() => setOrderType("buy")}
          >
            Buy
          </span>
          <span
            className={`w-full text-center justify-center p-2 px-3 rounded-lg flex items-center space-x-2 ${
              orderType === "sell" ? "bg-white" : ""
            } hover:shadow-sm cursor-pointer`}
            onClick={() => setOrderType("sell")}
          >
            Sell
          </span>
        </div>
        {orderType === "buy" ? buyForm() : sellForm()}
      </div>
    </div>
  );
};

export default CreateOrder;
