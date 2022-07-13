import React from 'react'
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="flex w-full py-4 bg-gray-900">
        <div className="container flex mx-auto text-white justify-between">
            <div className="flex items-center space-x-2">
                <Link to="/" className="flex items-center mb-4 sm:mb-0">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-8" alt="Flowbite Logo"/>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Escoin</span>
                </Link>
            </div>
            <div className="flex items-center space-x-8">
                <NavLink to="/escorw" className="text-gray-400 font-medium">
                    <p>Escorw</p>
                </NavLink>
                <NavLink to="/explore" className="text-gray-400 font-medium">
                    <p>Explore</p>
                </NavLink>
                <NavLink to="/marketplace" className="text-gray-400 font-medium">
                    <p>Marketplace</p>
                </NavLink>
                <NavLink to="/about-us" className="text-gray-400 font-medium">
                    <p>About Us</p>
                </NavLink>
            </div>
            <div className="flex items-center space-x-2">
                <Link to="/app" className="p-3 px-5 font-semibold bg-green-500 rounded-xl">Go to app</Link>
            </div>
        </div>
    </div>
  )
}

export default Header