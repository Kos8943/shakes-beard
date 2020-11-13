import React, { Component } from "react";
import "../styles/custom.scss";
import brand1 from "../imgs/brands/brand_1.png"
import brand2 from "../imgs/brands/brand_2.png"
import brand3 from "../imgs/brands/brand_3.png"
import brand4 from "../imgs/brands/brand_4.png"
import brand5 from "../imgs/brands/brand_5.png"
import brand6 from "../imgs/brands/brand_6.png"
import ScrollAnimation from "react-animate-on-scroll";

function BrandArea(props) {
  return <>
  <ScrollAnimation
              animateIn="fadeIn"
               
            >
            <div className="brandbg-area">
            <div className="brand-img-area m-auto">
            <img src={brand1}></img>
            <img src={brand2}></img>
            <img src={brand3}></img>
            <img src={brand4}></img>
            <img src={brand5}></img>
            <img src={brand6}></img>
            </div>
            
            </div>
</ScrollAnimation>


  </>;
}

export default BrandArea;
