import React from 'react'
import immmag from '../ressource/assets/logo.png'
export default function Footer() {
  return (
    <div
            style={{display:'flex',justifyContent:"center",justifyItems:"center"}}
    >
        <p>Pour les pasionnée par les plante 
            <img 
                style={{height:"10px" , width:"10px",marginLeft:'4px'}}
                src={immmag}
                alt='hhhh'
            />
        </p>
        <p style={{marginLeft:'4px'}}>laissez-nous votre mail:</p>
        <input 
                alt='' 
                placeholder='veuillez saisir votre mail'
                style={{border:"2px" , borderRadius:'5px',borderStyle:"solid", borderColor:"gray",marginLeft:'4px'}}
        >

        </input>
    </div>
  )
}
