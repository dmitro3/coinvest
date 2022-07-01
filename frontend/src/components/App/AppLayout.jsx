import React from 'react'
import AppHeader from './AppHeader'

const AppLayout = ({children}) => {
  return (
    <div className="flex flex-col w-full bg-gray-100">
        <AppHeader/>
        <div className='p-4'>
            {children}
        </div>
    </div>
  )
}

export default AppLayout