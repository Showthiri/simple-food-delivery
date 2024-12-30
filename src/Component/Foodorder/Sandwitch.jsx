import React, { useEffect, useState } from 'react'

import data4 from './Sandwitch.json'
import { Product } from '../Foodorder/Product'
import './Foodorder.css'
import { Order } from '../../Pages/Order'

export const Sandwitch = ({cart, setCart}) => {
    const [productss]=useState(data4)

    useEffect(()=>{
                window.scrollTo(0,0);
              }, []);
  return (
    <>
    <Order/>
    <div className='foodorder'>
    <div className='product-container '>
     {productss.map((product)=>(
         <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
     ))}
   </div>
 </div>
         </>

  )
}
