import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import ContactUs from './components/Contact/ContactUs.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <LayOut/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path:'about',
//         element: <About/>
//       },
//       {
//         path:'ContactUs',
//         element: <ContactUs/>
//       }
//     ]
//   }
// ])

// another way to createBrowserRouter

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LayOut/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='ContactUs' element={<ContactUs/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
