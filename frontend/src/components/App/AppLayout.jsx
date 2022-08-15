import React from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const AppLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full  p-6 container mx-auto">
        <AppHeader/>
        <div className='py-4'>
            {children}
        </div>
        <AppFooter/>
    </div>
  )
}

export default AppLayout