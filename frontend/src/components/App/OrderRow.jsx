import React from 'react'
import getEllipsisText from '../../hooks/utils'

const OrderRow = ({order}) => {
  return (
    <tr key={order._id}>
      <td className="p-2 text-sm bg-transparent border-b whitespace-nowrap shadow-transparent">
        <span className='font-semibold'>{order.pair.name}</span><br/>
        { order.user && <span className="text-ellipsis">{getEllipsisText(order.user.eth_address)}</span>}
      </td>
      <td className="p-2 text-sm bg-transparent border-b whitespace-nowrap shadow-transparent align-middle text-right">
        <span>{order.quantity} {order.pair.token1.symbol} @ {order.price} {order.pair.token2.symbol}</span><br/>
        <span
          className={`text-center px-2 py-1 rounded-full ${
            order.order_type === "sell" ? "text-red-400" : "text-green-400"
          } text-sm capitalize w-64`}
        >
          {order.order_type}
        </span>
      </td>
      {/* <td className="p-2 text-sm align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">
        {order.quantity} {order.pair.token1.symbol}
      </td>
      <td className="p-2 text-sm align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent capitalize">
        <span
          className={`text-center px-2 py-1 rounded-full ${
            order.status === "open" ? "bg-yellow-400" : "bg-green-400"
          } text-sm text-gray-700`}
        >
          {order.status}
        </span>
      </td> */}
    </tr>
  )
}

export default OrderRow