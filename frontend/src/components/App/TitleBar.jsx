import React from 'react'

const TitleBar = ({title}) => {
  return (
    <div className='py-4'>
        <span className='text-2xl font-semibold text-gray-800'>{title}</span>
    </div>
  )
}

export default TitleBar