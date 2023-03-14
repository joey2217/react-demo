import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const AppLayout: React.FC = () => {
  return (
    <div className="container mx-auto px-1">
      <Header />
      <main className="py-4">
        <Outlet />
      </main>
    </div>
  )
}

export default memo(AppLayout)
