import React from 'react'
import Footer from './Footer'
import Header from './Header'
import PriceBar from './PriceBar'

const PageLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full">
        {/* <PriceBar/> */}
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default PageLayout