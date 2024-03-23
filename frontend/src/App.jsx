import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Authenticate, Home, HomeLayout } from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'register', element: <Authenticate /> },
      { path: 'login', element: <Authenticate /> },
    ],
  },
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
