import React from 'react'
import { useEffect } from 'react'
import useApi from '../../hooks/api';
import useExchange from '../../store/exchangeStore';
import moment from 'moment';

const BasketRow = ({ basket }) => {
    
    const { getTokens, tokens } = useExchange()
    useEffect(() => {
        if(tokens.length <= 0){
            getTokens();
        }
    },[]);

    const renderMenu = () => {
        
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
            </div>
        </div>
        <div className="flex justify-between items-center">
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Returns</span>
                <span className="text-green-600 text-lg">5.58%</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Returns Since</span>
                <span className="text-gray-600 text-lg">{moment(new Date(basket.createdAt)).format('MMMM Do, YYYY')}</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Min. Amount</span>
                <span className="text-gray-600 text-lg">₹ 9,455.04</span>
            </div>
            <div className='flex flex-col items-center justify-center p-4 '>
                <span className="text-sm font-medium text-gray-400">Investment Assets</span>
                <div className="flex justify-center -space-x-4 p-2 overflow-hidden">   
                {
                    basket.tokens.map((token, i) => {
                    if(token){
                        return (
                        <div className="inline-block h-10 w-10 rounded-full ring-2 ring-white relative" key={i}>   
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