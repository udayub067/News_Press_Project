import React from 'react'
import "./index.css"
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout'
const App = () => {
  
    const routes=createBrowserRouter(
        [{
            path:"/",
            element:<Layout/>,
            children:[
            {
               
            }]
        }]
    )

  return (
    <RouterProvider router={routes}/>
   
  )
}

export default App