import React, { useState } from 'react'
import "./Header.css"
import {BiMenuAltRight} from 'react-icons/bi'
// import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [collapse , setCollapse ] = useState("collapse")
  return (
    <section className='h-wrapper'>
        <div className='flexCenter paddings innerWidth h-container'>
            <img src='./logo.png' alt="logo" width={100}/>
            <div className={`flexCenter h-menu ${collapse}`}>
                <p>Residencies</p>
                <p>Our Value</p>
                <p>Contact Us</p>
                <p>Get Started</p>
                <button className='button'><p>Contact</p></button>
            </div>
            <div className='menu-icon'>
          <BiMenuAltRight size={30} onClick={() => {
            setCollapse(collapse==="collapse" ? "" : "collapse")
          }}/>
        </div>
        </div>
        
    </section>
  )
}

export default Header