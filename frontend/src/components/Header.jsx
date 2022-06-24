import React from 'react'
import { Link, NavLink } from "react-router-dom"
const Header = () => {
  return (
    <div className="flex w-full py-4 bg-gray-900">
        <div className="container flex mx-auto text-white justify-between">
            <div className="flex items-center space-x-2">
                <Link to="/">
                    <p className="text-xl font-semibold">Escoin</p>
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