import React, { useState } from 'react'
import data from './Offerfood.json'
import { Product } from '../Foodorder/Product'
import './Foodorder.css'
import { Order } from '../../Pages/Order'


export const Foodorder = ({cart, setCart}) => {
    const [products]=useState(data)
    
     
  return (
    <>
    <Order/>


 {/* <section id='south'> */}
    <div className='foodorder'>
      
    <div className='product-container '>
        {products.map((product)=>(
          <Product key={product.id} product={product} cart={cart} setCart={setCart}/>
        ))}
    </div>

        </div>
        {/* </section> */}

             </>

  
  )
}
