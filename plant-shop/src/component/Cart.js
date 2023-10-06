import React, { useEffect, useState } from 'react'
import '../style/cart.css'
export default function Cart() {
  const [cart,setCart] =useState([])
  useEffect(()=>{
    const interval =  setInterval(()=>{
      const savedLocalStorage = JSON.parse(window.localStorage.getItem('cart'))
    console.log("saved storage from card component",savedLocalStorage);
    if (Array.isArray(savedLocalStorage) && savedLocalStorage.length > 0) {
      setCart(savedLocalStorage);
    }
    },2000)

    return () => clearInterval(interval);

  },[])

  const totalPrice = cart.reduce((total,prod)=> total+prod.price,0)
  const handleReset = ()=>{
    window.localStorage.removeItem('cart')
    setCart([])
  }

  return (
    <div className='panier_holder' >
        <h2>
          Panier
        </h2>
        <div style={{height:"2px",backgroundColor:'black'}}></div>
         <div style={{
            height:"100px"
         }}>
          <ul>
            {
              (cart.length > 0) ?cart.map((prod,index)=>(
                <li key={index}>{prod.quantity} {prod.name} : {prod.price}</li>
              )):
              <li >Add some product</li>
            }
          </ul>
         </div>
         <div style={{height:"2px",backgroundColor:'black'}}></div>
         <h1>Total:{totalPrice}</h1>

         <p 
         className='reste_button' 
         onClick={handleReset}
         >Click to reset?</p>
      </div>
  )
}
