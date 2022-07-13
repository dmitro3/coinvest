import React, { useState } from 'react'
import AppLayout from '../../components/App/AppLayout'
import CreateOrder from '../../components/App/CreateOrder'
import TitleBar from '../../components/App/TitleBar'
import TradingViewWidget from 'react-tradingview-widget';
import { Tab } from '@headlessui/react'
import OrderBook from '../../components/App/OrderBook';
import useExchange from '../../store/exchangeStore';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Dashboard = () => {
  let [openOrders, setOpenOrders] = useState(["1"])
  let [completeOrders, setCompleteOrders] = useState(["1"])
  const { tradingPairs, selectedTradingPair, selectPair } = useExchange()
  console.log(selectedTradingPair)
  return (
    <AppLayout>
        <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col bg-white p-2 rounded-xl shadow-sm">
              <CreateOrder/>
            </div>
            <div className="flex flex-col min-h-screen col-span-2 bg-white p-2 rounded-xl shadow-sm">
                <TradingViewWidget 
                  symbol={selectedTradingPair.symbol}
                  autosize
                />
              {/* <div className="bg-gray-50 h-[420px] w-full mb-4">
              </div> */}
              <div className="mt-2">
                <Tab.Group>
                  <Tab.List className="flex space-x-2 rounded-xl font-semibold bg-gray-100 p-1">
                    <Tab className={({ selected }) => classNames(
                        'w-full rounded-lg py-2.5 text-sm leading-5 ',
                        selected
                          ? 'bg-white shadow'
                          : 'hover:shadow-sm'
                      )
                    }>
                      Open Orders
                    </Tab>
                    <Tab className={({ selected }) => classNames(
                        'w-full rounded-lg py-2.5 text-sm leading-5 ',
                        selected
                          ? 'bg-white shadow'
                          : 'hover:shadow-sm'
                      )
                    }>
                      Complete Orders
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    <Tab.Panel className='flex w-full h-[300px] overflow-y-scroll border border-gray-100 rounded-xl no-scrollbar'>
                      {
                        openOrders.length <= 0 ? (
                          <div className='flex w-full h-full justify-center items-center'>
                            <span className="text-gray-500 text-sm">No Open Orders</span>
                          </div>
                        ) : (
                          <div className='w-full'>
                            <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                              <thead className="align-bottom">
                                <tr>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Pair</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Price</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Volume</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">WETH/USDT</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">2455</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">0.22</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">Complete</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )
                      }
                    </Tab.Panel>
                    <Tab.Panel className='flex w-full h-[300px] overflow-y-scroll border border-gray-100 rounded-xl no-scrollbar'>
                      {
                        completeOrders.length <= 0 ? (
                          <div className='flex w-full h-full justify-center items-center'>
                            <span className="text-gray-500 text-sm">No Complete Orders</span>
                          </div>
                        ) : (
                          <div className='w-full'>
                            <table className='items-center w-full mb-0 align-top border-gray-200 text-slate-500'>
                              <thead className="align-bottom">
                                <tr>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Pair</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Price</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Volume</th>
                                  <th className="px-6 py-3 font-bold text-center uppercase align-middle bg-transparent border-b border-gray-200 shadow-none text-size-xxs border-b-solid tracking-none whitespace-nowrap text-slate-400 opacity-70">Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">WETH/USDT</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">2455</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">0.22</td>
                                  <td className="p-2 align-middle bg-transparent text-center border-b whitespace-nowrap shadow-transparent">Complete</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        )
                      }
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
            <div className="flex flex-col bg-white rounded-xl shadow-sm">
              <OrderBook/>
            </div>
        </div>
    </AppLayout>
  )
}

export default Dashboard