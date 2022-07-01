import React from 'react'
import SelectTradingPair from './SelectTradingPair'

const CreateOrder = () => {
  return (
    <div className="flex flex-col p-3">
        <SelectTradingPair/>
        <div className='flex flex-col py-3 border-b-2 border-t-2 border-dashed space-y-1'>
            <span className="text-gray-500 font-medium">Market Price</span>
            <span className="text-2xl font-semibold ">63457.98</span>
        </div>
        <div className='flex py-3 text-sm space-x-1 justify-between'>
            <span className="text-gray-900 font-semibold">$63457.98 <span className="bg-gray-200 p-1 rounded-2xl text-gray-800 text-xs">USD</span></span>
            <span className=" font-semibold"><span className="text-gray-400">Volume:</span> 972,762,277.94</span>
        </div>
        <div className="flex flex-col bg-white"></div>
    </div>
  )
}

export default CreateOrder