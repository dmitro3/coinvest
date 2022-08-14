import React from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'

const AppLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full bg-gray-100 p-6">
        <AppHeader/>
        <div className='py-4'>
            {children}
        </div>
        <AppFooter/>
    </div>
  )
}

export default AppLayout