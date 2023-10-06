import React from 'react'
import Categories from './Categories'
import ShoppingList from './ShoppingList'
import '../style/Middle.css'
import Cart from './Cart'
export default function Middle() {
  return (
    <div >
        <Categories/>
       
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-evenly",
          
       }}>
          <Cart/>
          <div  style={{
            width:"75%",
          }}className='shoppingList'>

            <ShoppingList />

          </div>
        </div>
       </div>

  )
}
