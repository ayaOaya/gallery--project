import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import 'locomotive-scroll/src/locomotive-scroll.scss';



export default function useLocolScroll(start) {
 useEffect(() =>{
    if (!start) return;

    const scrollEl = document.querySelector("#main-container");

    const locolScroll = new LocomotiveScroll({
        el: scrollEl,
        smooth:true,
        multiplier:2,
        class:'is-reveal'
    })
 }, [start]);
}
