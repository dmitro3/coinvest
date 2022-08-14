import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import { BiSun, BiMoon } from "react-icons/bi";
const AppFooter = () => {
    const [enabled, setEnabled] = useState(false)
  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-1">
        <div className="flex space-x-2 p-4 items-center">
        <BiSun className="text-2xl text-gray-600"/>
        <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-purple-700' : 'bg-gray-300'}
          relative inline-flex h-[22px] w-[45px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[18px] w-[18px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
      <BiMoon className="text-2xl text-gray-600"/>
        </div>
        <p className="text-xl text-gray-600 font-semibold"><span>Coinvest</span>{' '}<span className="text-xs font-light">(Beta)</span></p>
        <p className="text-sm text-gray-500">Copyright &copy; Coinvest {new Date().getFullYear()}</p>
    </div>
  )
}

export default AppFooter