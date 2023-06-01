import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Tailwind: React.FC = () => {
  return (
    <div>
      <nav className="flex-1 px-2">
        <ul className="flex items-center gap-4">
          <NavLink to="" end className="link">
            Button
          </NavLink>
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Tailwind)
