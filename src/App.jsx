import { useState } from 'react'

import './App.css'

import {createBrowserRouter,RouterProvider,Route, useOutlet, Link, Outlet,} from "react-router-dom"

import Home from './Component/Home/Home'
import Offer from './Component/Offer/Offer'
import { Cart } from './Component/Cart'
import { Foodorder } from './Component/Foodorder/Foodorder'
import { North } from './Component/Foodorder/North'
import { Briyani } from './Component/Foodorder/Briyani'
import { Pizza } from './Component/Foodorder/Pizza'
import { Sandwitch } from './Component/Foodorder/Sandwitch'
import { Cooldrinks } from './Component/Foodorder/Cooldrinks'
import Footer from './Pages/Footer'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Navbar from './Component/Navbar/Navbar'
// import { Navbar } from './Component/Navbar/Navbar'








function App() {
  const [cart, setCart] = useState([])
const Dashboard = ()=>{
  return <div>
    
    <Navbar cart={cart}/>
    <Outlet/>
    <Footer/>
  </div>
}




const router= createBrowserRouter([
  
{
  path:"/",
  element:<Dashboard/>,
 children:[
  {
    path:"/",
   element:<Home/>
 },
],
},

{
  path:"/Offer",
  element:<Dashboard/>,
 children:[
  {
    path:"/Offer",
    element:<Offer/>
 },
],
},


{
  path:"/Foodorder",
  element:<Dashboard/>,
 children:[
  {
    path:"/Foodorder",
    element:<Foodorder cart={cart} setCart={setCart}/>
 },
],
},


{
  path:"/north",
  element:<Dashboard/>,
 children:[
  {
    path:"/north",
    element:<North cart={cart} setCart={setCart}/>
 },
],
},

{
  path:"/Briyani",
  element:<Dashboard/>,
 children:[
  {
    path:"/Briyani",
    element:<Briyani cart={cart} setCart={setCart}/>
 },
],
},


{
  path:"/piz",
  element:<Dashboard/>,
 children:[
  {
    path:"/piz",
    element:<Pizza cart={cart} setCart={setCart}/>
 },
],
},


{
  path:"/sandwitch",
  element:<Dashboard/>,
 children:[
  {
    path:"/sandwitch",
    element:<Sandwitch cart={cart} setCart={setCart}/>,
 },
],
},

{
  path:"/Cooldrinks",
  element:<Dashboard/>,
 children:[
  {
    path:"/Cooldrinks",
    element:<Cooldrinks cart={cart} setCart={setCart}/>,
 },
],
},


{
  path:"/logi",
  element:<Dashboard/>,
 children:[
  {
    path:"/logi",
    element:<Login/>,
 },
],
},

{
  path:"/sig",
  element:<Dashboard/>,
 children:[
  {
    path:"/sig",
    element:<Signup/>,
 },
],
},



{
  path:"/cart",
  element:<Dashboard/>,
 children:[
  {
    path:"/cart",
    element:<Cart cart={cart}/>
 },
],
},
])

  return (
    <>
     
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
    </>
  )
}

export default App
