import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import type { LinkProps } from 'react-router-dom'

const ActiveLink: React.FC<
  LinkProps &
    React.RefAttributes<HTMLAnchorElement> & {
      activeClassName?: string
    }
> = ({ children, to, activeClassName = 'active', className, ...props }) => {
  const { pathname } = useLocation()
  return (
    <Link
      className={`${pathname === to ? activeClassName : ' '} ${className}`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

const Header: React.FC = () => {
  return (
    <header className="flex h-10 items-center">
      <Link to="/">
        <div>LOGO</div>
      </Link>
      <nav className="flex-1 px-2">
        <ul className="flex items-center">
          <li>
            <ActiveLink
              to="/message"
              className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
            >
              message
            </ActiveLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center">
        <ThemeButton />
      </div>
    </header>
  )
}

export default memo(Header)
