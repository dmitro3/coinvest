import React, { useEffect } from 'react'
import AppLayout from '../../components/App/AppLayout'
import TradingViewWidget from "react-tradingview-widget";
import useExchange from '../../store/exchangeStore';
import SelectTradingPair from '../../components/App/SelectTradingPair';
import SelectToken from '../../components/App/SelectToken';
import { useState } from 'react';

const AppHome = () => { 
    const { selectedTradingPair, tokens, getTokens } = useExchange();
    const [selectedToken, setSelectedToken] = useState(tokens[0]);
    useEffect(() => {
        if(tokens.length<= 0){
            getTokens()
        }
    },[])
  return (
    <AppLayout>
        <div className='flex flex-col'>  
        <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col h-96 bg-white p-2 rounded-xl shadow-sm">
            <SelectToken selectedToken={selectedToken} setSelectedToken={setSelectedToken}/>
            <TradingViewWidget
            symbol={
              selectedToken !== null
                ? `${selectedToken.symbol}/USDT`
                : "BTC/USDT"
            }
            autosize
          />
            </div>
            <div className="">
                <div className='flex gap-3 mb-3'>
                    <div className="flex flex-1 justify-center items-center p-8 flex-col bg-white rounded-xl shadow-sm">
                        <p className='text-sm font-semibold text-gray-500'>Total Investment</p>
                        <p className='text-3xl text-gray-700'>$ 123,000</p>
                    </div>
                    <div className="flex flex-1 justify-center items-center p-8 flex-col bg-white rounded-xl shadow-sm">
                        <p className='text-sm font-semibold text-gray-500'>Total Investment</p>
                        <p className='text-3xl text-gray-700'>$ 123,000</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className="flex flex-1 justify-center items-center p-8 flex-col bg-white rounded-xl shadow-sm">
                    <p className='text-sm font-semibold text-gray-500'>Total Investment</p>
                        <p className='text-3xl text-gray-700'>$ 123,000</p>
                    </div>
                    <div className="flex flex-1 justify-center items-center p-8 flex-col bg-white rounded-xl shadow-sm">
                    <p className='text-sm font-semibold text-gray-500'>Total Investment</p>
                        <p className='text-3xl text-gray-700'>$ 123,000</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </AppLayout>
  )
}

export default AppHome