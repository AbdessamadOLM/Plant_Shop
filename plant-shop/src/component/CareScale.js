import React from 'react'
import waterrrr from '../ressource/assets/sun.svg'
import sun from '../ressource/assets/water.svg'
export default function CareScale({light,water}) {
    return (
    <div>
        <div style={{
            display:"flex",
            flexDirection:"row"
        }}>
            {
                Array.from({ length: water }, (_, index) => (
                    // <div key={index}>
                        <img src={waterrrr} alt=''></img>
                    // </div>
                  ))
            }
        </div>
        <div style={{
            display:"flex",
            flexDirection:"row"
        }}>
            {
                Array.from({ length: light }, (_, index) => (
                    // <div key={index}>
                        <img src={sun} alt=''></img>
                    // </div>
                  ))
            }
        </div>
    </div>
  )
}
