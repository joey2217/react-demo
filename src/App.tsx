import React from 'react'
import { ConfigProvider, theme, App as AntdApp } from 'antd'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useTheme } from './context/ThemeContext'

const { darkAlgorithm, defaultAlgorithm } = theme

const App: React.FC = () => {
  const { theme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
