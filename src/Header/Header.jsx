import React, { useEffect } from 'react'
import { useRef } from 'react';
import "./style.scss"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

export default function Header() {
gsap.registerPlugin(ScrollTrigger);


useEffect(() =>{
  
gsap.to(".bg-img", {opacity:1, delay:1.1 ,duration:1.4, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" })
gsap.to(".sub-title", {opacity:1, y:-30, delay:2.1, duration:1.3 })
})




  return (
   
    <>
      <div className="header">
      <div className="container0">
      <a href="#sections" ><div className="bg-img"></div></a> 
        <h1 className="title" >SAM SAMUEL</h1>
        <h2 className="sub-title">
          <div className="d">d</div>
          <div className="e">e</div>
          <div className="s">v</div>
          <div className="i">e</div>
          <div className="g">l</div>
          <div className="n">o</div>
          <div className="e">p</div>
          <div className="e">e</div>
          <div className="r">r</div>
        </h2>
      </div>
    </div>
    
    

{/* the horzantal scrolling */}

    </>
   
   
  )
}
