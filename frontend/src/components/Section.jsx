import React from 'react'

const Section = ({children}) => {
  return (
    <div className="flex w-full py-14 bg-gray-900 border-gray-600">
        <div className="container flex flex-col mx-auto text-white">
            {children}
        </div>
    </div>
  )
}

export default Section