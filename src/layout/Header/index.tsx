import React, { memo } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeButton from './ThemeButton'
import { FaBrandsReact, MdiGithub } from '../../components/Icons'

// const ActiveLink: React.FC<
//   LinkProps &
//     React.RefAttributes<HTMLAnchorElement> & {
//       activeClassName?: string
//     }
// > = ({ children, to, activeClassName = 'active', ...props }) => {
//   const { pathname } = useLocation()
//   return (
//     <Link
//       className={`link ${pathname === to ? activeClassName : ' '}`}
//       to={to}
//       {...props}
//     >
//       {children}
//     </Link>
//   )
// }

const routes = [
  {
    to: '/message',
    label: 'Message',
  },
  {
    to: '/drag',
    label: 'Drag',
  },
  {
    to: '/page',
    label: 'Pagination',
  },
  {
    to: '/modal',
    label: 'Modal',
  },
  {
    to: '/tailwind',
    label: 'TailwindComponents',
  },
]

const Header: React.FC = () => {
  return (
    <header className="flex h-10 items-center">
      <Link to="/" className="flex items-center mr-4 link">
        <FaBrandsReact className="w-6 h-6 mr-1 text-teal-500" />
        <span>ReactDemo</span>
      </Link>
      <nav className="flex-1 px-2">
        <ul className="flex items-center gap-4 divide-x-1">
          {routes.map((r) => (
            <li key={r.to}>
              <NavLink className="link" to={r.to}>
                {r.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center gap-x-2">
        <ThemeButton />
        <a
          href="https://github.com/joey2217/react-demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdiGithub className="w-6 h-6" />
        </a>
      </div>
    </header>
  )
}

export default memo(Header)
