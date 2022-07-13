import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { RiArrowDownSLine } from "react-icons/ri";
import { Pairs } from "../../data"
import useExchange from '../../store/exchangeStore';

const SelectTradingPair = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [selectedPair, setSelectedPair] = useState(Pairs[0]);
  const { tradingPairs, selectedTradingPair, selectPair } = useExchange()
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const selectTradingPair = (pair) => {
    selectPair(pair);
    closeModal();
  }

  return (
    <>
      <div className="inset-0 flex items-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md py-2 mb-2 text-md font-semibold text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 w-full flex items-center justify-between"
        >
          <div className="flex items-center space-x-2">
          <div className="flex -space-x-5">
              <img className="w-10 h-10 mt-1 border-2 border-white rounded-full dark:border-gray-800 z-10" src={selectedTradingPair.token1.icon} alt=""/>
              <img className="w-10 mt-4 h-10 border-2 border-white rounded-full dark:border-gray-800" src={selectedTradingPair.token2.icon} alt=""/>
          </div>
            {/* <img src={require("../../data/cryptos/wbtc.png")} className="w-10 h-10 rounded-full"/> */}
            <div className="flex flex-col items-start">
              <span>{selectedTradingPair.name}</span>
              <span className="text-sm text-gray-400">{selectedTradingPair.token1.name}</span>
            </div>
          </div>
          <RiArrowDownSLine className="w-5 h-5 text-gray-400"/>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 border-b border-gray-100 pb-2"
                  >
                    Select Trading Pair
                  </Dialog.Title>
                  <div className="mt-2 max-h-[500px] overflow-y-scroll">
                    {
                      tradingPairs.map((pair, index) => (
                        <div className="flex items-center space-x-2 border-b py-2 border-gray-50 hover:bg-gray-50 px-2 cursor-pointer" key={index} onClick={() => selectTradingPair(pair)}>
                          <div className="flex -space-x-5">
                              <img className="w-10 h-10 mt-1 border-2 border-white rounded-full dark:border-gray-800 z-10" src={pair.token1.icon} alt=""/>
                              <img className="w-10 mt-4 h-10 border-2 border-white rounded-full dark:border-gray-800" src={pair.token2.icon} alt=""/>
                          </div>
                            {/* <img src={require("../../data/cryptos/wbtc.png")} className="w-10 h-10 rounded-full"/> */}
                            <div className="flex flex-col items-start">
                              <span>{pair.name}</span>
                              <span className="text-sm text-gray-400">{pair.token1.name}</span>
                            </div>
                        </div>
                      ))
                    }
                  </div>

                  <div className="mt-4 pt-2">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default SelectTradingPair