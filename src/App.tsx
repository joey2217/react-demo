import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { MessageProvider } from './context/MessageContext'
import { ThemeProvider } from './context/ThemeContext'
import router from './router'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MessageProvider>
        <RouterProvider router={router} />
      </MessageProvider>
    </ThemeProvider>
  )
}

export default App
