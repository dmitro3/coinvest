import React from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import MaticIcon from "../data/cryptos/matic.png";
const TransactionRow = ({ token1, token2, buyer, seller, amount, currency, time, explorerUrl }) => {
  return (
    <div className="flex items-center space-x-3 mb-5">
      <div className="max-w-[80px] flex flex-col p-3 rounded-lg justify-center items-center bg-gray-700  bg-opacity-25">
        <div className="flex items-center mb-2">
          <img src={token1} className="rounded-full w-6 h-6"/>
          <IoArrowUndoSharp className="font-semibold ml-2 text-2xl text-gray-100" />
        </div>
        <div className="flex items-center">
          <IoArrowUndoSharp className="font-semibold mr-2 text-2xl rotate-180 text-gray-100" />
          <img src={token2} className="rounded-full w-6 h-6"/>
        </div>
      </div>
      <div className="flex flex-col space-y-1 text-sm text-gray-500 justify-start">
        <span>
          <b>{buyer}</b> has just buy {amount} {currency}. From <b>{seller}</b>
        </span>
        <span>
          <i>{time}</i>
        </span>
        <Link to={explorerUrl} className="underline text-green-500">
          View on explorer
        </Link>
      </div>
    </div>
  );
};

export default TransactionRow;
