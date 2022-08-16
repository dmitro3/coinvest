import React from 'react'
import { Fragment, useEffect, useRef, useState } from 'react'
import useApi from '../../hooks/api';
import useExchange from '../../store/exchangeStore';
import moment from 'moment';
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Menu, Transition } from '@headlessui/react';

const BasketRow = ({ basket }) => {
    
    const { getTokens, tokens } = useExchange()
    useEffect(() => {
        if(tokens.length <= 0){
            getTokens();
        }
    },[]);

    const renderMenu = () => {
        return (
        <Menu as="div" className="relative z-50 inline-block text-left">
        <div>
          <Menu.Button className="inline-flex  w-full justify-center rounded-md px-2 py-2 font-medium text-gray-800">
            <BiDotsVerticalRounded
              className="ml-2 -mr-1 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Edit Details
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Customize
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>)
    }

  return (
    <div className="p-4 border hover:rounded-xl hover:shadow-md border-b-gray-200 hover:border-gray-200 border-white mb-3 cursor-pointer">
        <div className="flex flex-1">
            <div className="w-[9%]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS323CR-EiCEkfFMDRKnSfXcSTnsrlhqz4Ouu-wNs93jcpTOz6xzeZqiFcILt7C5bEI4L0&usqp=CAU" style={{height:'64px', width:'64px' }} alt='title' className="h-14 w-14 border"/>
            </div>
            <div className="flex w-[60%]">
                <div>
                    <p className="text-xl font-semibold">{basket.name}</p>
                    <p className="text-sm text-gray-500">{basket.description}</p>
                </div>
            </div>
            <div className="flex justify-end w-[30%]">
                <div>
                    <button className="border text-green-600 border-green-600 py-2 px-4 rounded-xl">Invest Now</button>
                </div>
                <div>
                    { renderMenu() }
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Returns</span>
                <span className="text-green-600 text-lg">{basket.returns ? basket.returns : '-'}</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Returns Since</span>
                <span className="text-gray-600 text-lg">{moment(new Date(basket.createdAt)).format('MMMM Do, YYYY')}</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Min. Amount</span>
                <span className="text-gray-600 text-lg">{basket.min_amount ? basket.min_amount : '-'}</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Investment Assets</span>
                <div className="flex justify-center -space-x-4 p-2 overflow-hidden">  
                {basket.tokens.length <= 0 && '-'} 
                {
                    basket.tokens.map((token, i) => {
                    if(token){
                        return (
                        <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white " key={i}>   
                        <img
                            src={token.icon}
                            alt={token.name}
                            layout="fill"
                            width="24px"
                            height="24px"
                            objectFit="cover"
                            className="inline-block border bg-white h-8 w-8 rounded-full ring-2 ring-white"
                            />
                        </div>
                        )
                    }
                    })
                } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasketRow