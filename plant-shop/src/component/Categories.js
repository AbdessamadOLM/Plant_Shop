import React from 'react'
import { plantList } from '../plant'
import '../style/category.css'

export default function Categories() {

    const handleClick = ()=>{
        document.getElementById('choose  category').selectedIndex = '0'
    }
  return (
    <div className='category_holder' > 
        <label htmlFor='choose  category'>Choose category: </label>
        <select  id='choose  category' name='Category'>
            {(plantList)? 
            plantList.reduce((acc,plant)=>
                acc.includes(plant.category)?acc:acc.concat(plant.category)
            ,[]).map((category)=>(
                <option key={category} value={category}>{category}</option>
            ))
            :
            <option> no category found</option>
            }
        </select>
        <button onClick={handleClick}> Reinitialiser</button>
    </div>
  )
}
