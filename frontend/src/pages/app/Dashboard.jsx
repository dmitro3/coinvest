import React from 'react'
import AppLayout from '../../components/App/AppLayout'
import CreateOrder from '../../components/App/CreateOrder'
import TitleBar from '../../components/App/TitleBar'

const Dashboard = () => {
  return (
    <AppLayout>
        <div className="grid grid-cols-4">
            <div className="flex flex-col bg-gray-50 p-2 rounded-xl shadow-sm">
              <CreateOrder/>
            </div>
        </div>
    </AppLayout>
  )
}

export default Dashboard