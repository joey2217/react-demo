import React, { memo } from 'react'
import { Layout, theme } from 'antd'
import { Outlet } from 'react-router-dom'
import AppMenu from './AppMenu'

const { Header, Content } = Layout

const AppLayout: React.FC = () => {
  const {
    token: { colorBgContainer, colorText },
  } = theme.useToken()
  return (
    <Layout
      className="min-h-screen"
      style={{ background: colorBgContainer, color: colorText }}
    >
      <Header className="flex items-center">
        <div className="logo">LOGO</div>
        <AppMenu />
      </Header>
      <Content style={{ padding: '16px 50px' }}>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default memo(AppLayout)
