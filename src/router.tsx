import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Error from './pages/error'
import Home from './pages/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
    ],
  },
])

export default router
