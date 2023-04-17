import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export default function Navbar() {
    gsap.registerPlugin(ScrollTrigger);
useEffect(() =>{
    gsap.to(".container", {opacity:1, delay:2, duration:1.1 })
})

  return (
    <>

    <div className="navbar" >
        <div className="container">
            <h1 className="logo">SAM SAMUEL</h1>
            <ul className="ul">
                <li className="li"><a href="/">HOME</a></li>
                <li className="li"><a href="/">ABOUT</a></li>
                <li className="li"><a href="/">GALLERY</a></li>
                <li className="li"><a href="/">CONTACT</a></li>
            </ul>
        </div>
    </div>

    </>
  )
}
