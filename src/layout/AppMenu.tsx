import React, { memo } from 'react'
import { Menu } from 'antd'
import type { MenuProps } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const items: MenuProps['items'] = [
  {
    label: <Link to="/">Home</Link>,
    key: '/',
  },
]

const AppMenu: React.FC = () => {
  const location = useLocation()
  return (
    <Menu
      className="flex-1"
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={[location.pathname]}
      items={items}
    />
  )
}

export default memo(AppMenu)
