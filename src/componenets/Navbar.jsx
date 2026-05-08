import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="
      w-full
      bg-gray-900
      border-b
      border-gray-800
      shadow-lg
      px-6
      py-4
    ">

      <div className="
        max-w-6xl
        mx-auto
        flex
        items-center
        justify-between
      ">

        {/* Logo */}
        <h1 className="
          text-2xl
          font-bold
          text-blue-400
          tracking-wide
        ">
        Smart Notes App
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          <NavLink
            to='/'
            className={({ isActive }) =>
              `
              px-4
              py-2
              rounded-xl
              transition-all
              duration-200
              font-medium
              ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }
              `
            }
          >
            Home
          </NavLink>

          <NavLink
            to='/pastes'
            className={({ isActive }) =>
              `
              px-4
              py-2
              rounded-xl
              transition-all
              duration-200
              font-medium
              ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }
              `
            }
          >
            Pastes
          </NavLink>

        </div>

      </div>

    </nav>
  )
}

export default Navbar