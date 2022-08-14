import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import ConnectWallet from './ConnectWallet';
import { BiHomeSmile, BiAtom, BiRadar } from "react-icons/bi"
const AppHeader = () => {
    const activeLinkClass = "inline-flex items-center space-x-1 font-medium hover:text-purple-600 text-purple-600";
    const linkClass = "inline-flex items-center space-x-1 font-medium hover:text-purple-600 text-gray-400";
  return (
        <div className="flex w-full py-4 px-4 bg-white shadow-sm text-gray-800 justify-between rounded-xl">
        
            <div className="flex items-center space-x-2">
                <Link to="/">
                    <p className="text-xl text-purple-600 font-semibold"><span>Coinvest</span>{' '}<span className="text-xs font-light">(Beta)</span></p>
                </Link>
            </div>
            <div className="flex items-center space-x-8">
                <NavLink exact to="/app" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
                    <BiHomeSmile/>
                    <p>Home</p>
                </NavLink>
                <NavLink exact to="/app/discover" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
                    <BiRadar/>
                    <p>Discover</p>
                </NavLink>
                <NavLink exact to="/app/mybaskets" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
                    <BiAtom/>
                    <p>My Baskets</p>
                </NavLink>
                {/* <NavLink to="/about-us" className={({ isActive }) => isActive ? activeLinkClass : linkClass}>
                    <p>About Us</p>
                </NavLink> */}
            </div>
            <div className="flex items-center space-x-2">
                {/* <Link to="/app" className="p-3 px-5 font-semibold bg-green-500 rounded-xl">Connect Wallet</Link> */}
                {/* <ConnectButton /> */}
                <ConnectWallet/>
            </div>
        </div>
  )
}

export default AppHeader