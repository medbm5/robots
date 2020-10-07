import React from 'react'
import './Searchbox.style.css'


export const Search=({placeholder,handleChange})=>{
    return(
    <input 
    className='search'
    type='Search'
    placeholder={placeholder}
    onChange={handleChange}
    />

    )
    
}