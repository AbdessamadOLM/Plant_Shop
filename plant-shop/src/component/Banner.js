import React from 'react'
import logo from '../ressource/assets/logo.png'
import '../style/banner.css'
export default function Banner() {
    const phrase = "la maison jungle"
  return (
    <div className='banner_holder' >
        <h3 className='phrase'>{phrase}</h3>
        <img className='image' src={logo} alt='logo'></img>
    </div>
  )
}
