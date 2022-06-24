import React from 'react'
import Header from './Header'
import PriceBar from './PriceBar'

const PageLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full">
        <PriceBar/>
        <Header/>
        {children}
    </div>
  )
}

export default PageLayout