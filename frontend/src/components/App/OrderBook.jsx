import React, { useState } from "react";
import useExchange from "../../store/exchangeStore";
import OrderRow from "./OrderRow";

const OrderBook = () => {
  const { orders } = useExchange();
  // const [buyOrders, setByOrders] = useState([1,2,3,4,5,6,7,8,9,10]);
  // const [sellOrders,setSellOrders] = useState([1,2,3,4,5,6,7,8,9,10]);
  return (
    <div className="w-full">
        <div className="p-4 text-xl font-semibold border-b w-full">
            <span >Order Book</span>
        </div>
      <table className="items-center w-full mb-0 align-top border-gray-200 text-slate-500">
        <thead className="align-bottom">
          <tr>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-sm">
              Volume
            </th>
            <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70 text-sm">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((order) => (
            <OrderRow order={order} key={order._id}/>
            ))
          }

          {/* {
            sellOrders.map((order) => (
            <tr key={order}>
              <td className="p-2 align-middle bg-transparent text-center whitespace-nowrap shadow-transparent text-xs">
                234
              </td>
              <td className="p-2 align-middle bg-transparent text-red-500 text-center whitespace-nowrap shadow-transparent text-xs">
                2455
              </td>
            </tr>
            ))
          } */}

        </tbody>
      </table>
    </div>
  );
};

export default OrderBook;
