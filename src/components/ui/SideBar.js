import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-black">
            <div className="p-6">
                <p className="uppercase text-white text-2xl text-center font-bold">Cintéotl</p>
                <p className="mt-3 text-gray-300 text-center">Administra tu restaurant.</p>
                <nav className="mt-8">
                    <ul>
                        <li className="mb-2">
                            <NavLink className="p-1 text-white hover:bg-gray-50 hover:text-gray-900 block rounded-full" activeClassName="bg-blue-500 border-solid border-4 border-blue-800 rounded-full" end to="/">Ordenes</NavLink>
                        </li>
                        <li>
                            <NavLink className="p-1 text-white hover:bg-gray-50 hover:text-gray-900 block rounded-full" activeClassName="bg-blue-500 border-solid border-4 border-blue-800 rounded-full" end to="/menu">Menu</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBar