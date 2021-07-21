import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div className="md:w-2/5 xl:w-1/5 bg-yellow-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl text-center font-bold">Cintéotl</p>
                <p className="mt-3 text-gray-300">Administra tu restaurant en las siguientes Opciones: </p>
                <nav>
                    <ul>
                        <li>
                            <NavLink className="" activeClassName="text-purple-600" exact to="/">Ordenes</NavLink>
                        </li>
                        <li>
                            <NavLink className="" activeClassName="text-purple-600" exact to="/menu">Menu</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default SideBar