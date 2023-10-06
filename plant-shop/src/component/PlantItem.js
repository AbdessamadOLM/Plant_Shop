import React from 'react'
import CareScale from './CareScale'
import '../style/plantItem.css'

export default function PlantItem({imagUrl,plantName,light,water,price,handleClick}) {
  return (
    <div style={{
        display:"flex",
        flexWrap:"wrap",
        marginTop:"5px",
        marginBottom:"5px"
    }}>
        <div  style={{
            width:"200px",
            position:"relative"
        }}
        >
                <div className='priceIcon'>
                    {price}
                </div>
                <img 
                style={{
                    width:"200px",
                    height:"200px",
                    borderRadius:"5px",
                    marginRight:"5px"
                }} 
                src={imagUrl} alt=''>

                </img>
        <h6>{plantName}</h6>
        <CareScale light={light} water={water}/>
        <button onClick={handleClick}>Ajouter</button>
        </div>
    </div>
  )
}
