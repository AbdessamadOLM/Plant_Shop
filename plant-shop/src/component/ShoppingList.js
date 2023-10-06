import React, { useEffect, useState } from 'react'
import { plantList } from '../plant'
import PlantItem from './PlantItem'

export default function ShoppingList() {
    const [cart,setCart] = useState([])
    useEffect(()=>{
        const saveLocalStrorage = JSON.parse(window.localStorage.getItem('cart'))
        console.log("from use effect in shopping list ",saveLocalStrorage);
        setCart(saveLocalStrorage)
    },[])

    useEffect(()=>{
        window.localStorage.setItem('cart',JSON.stringify(cart))
    },[cart])

    const handleClick = (name,price)=>{
        let dataTosend = {
            name:name,
            price:price,
            quatity:1
        }
        console.log("cart ",cart);
        setCart([...cart,dataTosend])
    }
  return (
    <div style={{
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap:"wrap",
        marginTop:"10px"
      }}>
        {
            plantList.map(plant =>(
                <div style={{
                    width:"33%",
                    display:"flex",
                }}>
                <PlantItem 
                    imagUrl={plant.cover} 
                    plantName={plant.name}
                    light={plant.light}
                    water={plant.water}
                    price={plant.price}
                    handleClick={()=>handleClick(plant.name,plant.price)}
                />
                </div>
            ))
        }
    </div>
  )
}
