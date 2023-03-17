import React, { useEffect } from 'react'
import "./style.scss"
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import barba from '@barba/core';

export default function Header() {
gsap.registerPlugin(ScrollTrigger);
const animationEnter = (container) =>{
  return gsap.from(container,{
    opacity:1, duration:2
  })
};
const animationLeave =(container) =>{
  return gsap.to(container, {opacity:1, duration2})
};

barba.init({
  transitions: [{
    name: 'opacity-transition',
    leave(data) {
      return gsap.to(data.current.container, {
        opacity: 0
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 1
      });
    }
  }]
})


/* useEffect(() =>{
  
gsap.to(".bg-img", {opacity:1, delay:1.1 ,duration:1.4, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" })
gsap.to(".sub-title", {opacity:1, y:-30, delay:2.1, duration:1.3 })
}) */


  return (
    <>
    <div data-barba="wrapper">
      <div className='wrapper-inner'>
  
      <div className="header" data-barba="container" data-barba-namespace="header">
      <div className="container0">
        <div className="bg-img"></div>
        <h1 className="title">SAM SAMUEL</h1>
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
    </div>
    </div>

{/* the horzantal scrolling */}


<section className='sections' data-barba="container" data-barba-namespace="sections">

      <div className="section1">
        <div className="container1">
          <a  href="/"><div className="bg-img1"></div></a>
          <h1 className="title1">PARIS</h1>
          <h3 className="sub-title1">LATOURFEL</h3>
        </div>
      </div>

      <div className="section2">
    

      </div>

      <div className="section3">

      </div>

      <div className="section4"></div>

    </section>
   
    </>
  )
}
