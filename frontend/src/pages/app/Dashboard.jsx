import React from 'react'
import AppLayout from '../../components/App/AppLayout'
import CreateOrder from '../../components/App/CreateOrder'
import TitleBar from '../../components/App/TitleBar'
import TradingViewWidget from 'react-tradingview-widget';
const Dashboard = () => {
  return (
    <AppLayout>
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col bg-white p-2 rounded-xl shadow-sm">
              <CreateOrder/>
            </div>
            <div className="flex flex-col min-h-screen col-span-2 bg-white p-2 rounded-xl shadow-sm">
              <div className="h-1/2">
                <TradingViewWidget 
                  symbol="BTCUSD"
                  autosize
                />
              </div>
            </div>
            <div className="flex flex-col bg-white p-2 rounded-xl shadow-sm">
              Order Book
            </div>
        </div>
    </AppLayout>
  )
}

export default Dashboard