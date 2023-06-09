import { createBrowserRouter } from 'react-router-dom'
import Layout from './layout'
import Error from './pages/error'
import Home from './pages/home'
import Message from './pages/message'
import Drag from './pages/drag'
import Page from './pages/page'
import Modal from './pages/modal'
import Tailwind from './pages/tailwind'
import Button from './pages/tailwind/button'

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
      {
        path: 'message',
        element: <Message />,
        errorElement: <Error />,
      },
      {
        path: 'drag',
        element: <Drag />,
        errorElement: <Error />,
      },
      {
        path: 'page',
        element: <Page />,
        errorElement: <Error />,
      },
      {
        path: 'modal',
        element: <Modal />,
        errorElement: <Error />,
      },
      {
        path: 'tailwind',
        element: <Tailwind />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Button />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])

export default router
