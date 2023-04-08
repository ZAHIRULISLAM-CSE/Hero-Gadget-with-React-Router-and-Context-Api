import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import AllProduct from './components/Cards/AllProduct'
import SavedCart from './components/cartIcon/SavedCart'

const router=createBrowserRouter([{
    path:"/",
    element:<App></App>,
    children:[
        {
            path:"/",
            element:<Home></Home>,
        },
        {
            path:'/shop',
            element:<AllProduct></AllProduct>,
            loader:()=>fetch('products.json')
        },
        {
            path:'/cart',
            element:<SavedCart></SavedCart>,

        },
    ]

}])



ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} ></RouterProvider>)
