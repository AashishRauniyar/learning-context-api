import './App.css'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import {createBrowserRouter, RouterProvider}  from 'react-router-dom'
function App() {

  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <> <Navbar/><Home/></>
      },
      {
        path: '/login',
        element: <> <Navbar/><Login/></>
      },
      {
        path: '/profile',
        element: <> <Navbar/><Profile/></>

      }
    ]
  )

  return (
    <UserContextProvider>
      <h1>Learning context API in React JS</h1>
      <RouterProvider router={router} />
      {/* <Login />
      <Profile /> */}

    </UserContextProvider>
  )
}

export default App
