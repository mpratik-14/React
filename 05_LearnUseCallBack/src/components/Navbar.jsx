import React from 'react'
import { memo } from 'react';

export const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered");
    
  return (
    <div>
        I am a {adjective} Navbar
        <button onClick={() => {getAdjective}}></button>
    </div>
  )
}


export default memo(Navbar)