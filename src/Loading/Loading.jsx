import React, { useEffect } from 'react'
import gsap from 'gsap'
import "./style.scss"
import {ScrollTrigger} from 'gsap/ScrollTrigger'


export default function Loading() {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() =>{
        gsap.to(".first-page", { opacity:1, clipPath:"polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)", delay:1, duration:1})
        gsap.to(".title", { opacity:1, delay:1.6, duration:1})

    })
   
  return (
    <>
   { <div className="loader-wrapper">
        <div className="first-page">
            <h1 className="title">SAM SAMUEL</h1>
        </div>

    </div>}

    </>
  )
}
