import React from "react";
import "../style/Product.css";
import Sid from "../../Sid";
// import Script from "react-load-script";
// import ReactDOM from 'react-dom';
import { Link, } from 'react-router-dom'
// import { Transition } from 'react-transition-group';
// import "./Css";
// import "animate.compat.css";
// import Anime, {anime} from 'react-anime';
// import "../Script.js";
import {Breadcrumb } from "react-bootstrap";
// import { NavLink } from "react-router-dom";

//animation
// import { bounceInLeft,} from 'react-animations'
// import Radium, {StyleRoot} from 'radium';
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'
// import anime from 'animejs';
import "animate.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import { TransitionGroup, Transition } from 'react-transition-group';
// const Product = (props) => (
//   <Anime delay={anime.stagger(100)}
//          scale={[.1, .9]}>
//     <div className="blue"/>
//     <div className="green"/>
//     <div className="red"/>
//   </Anime>
// );
class Product extends React.Component {
  render(){
  return (
    
   <>
   
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
  <link rel="stylesheet" href="http://cdn.bootcss.com/animate.css/3.5.1/animate.min.css"></link>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
      <ReactCSSTransitionGroup />
      
      <Sid />
       <section className="SectionTile brand-SectionCover">
          <div className="SectionTile__container">
            <div
              className="brand-SectionCover__main finished"
              data-anime="fadeInRight"
              data-anime-trigger=".brand-SectionCover__main">
              <img
                src={require("../icon/women6.jpg")}
                className="card-img-top"
                alt="..."
              ></img>
            </div>
            <div className="brand-SectionCover__layout">
              <div
                className="brand-SectionCover__title finished"  style={{color:"#A232D2F"}}>
                <div className="_card">
                  <div className="_wrap">
                    <h1 className="_inner">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                      <div className="_title1">BRAND</div>
                      <div className="_title2">
                        <div className="_b" style={{color:"#A232D2F"}}>Shakes Beard</div>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="brand-SectionCover__body" >
                <div className="_text2 typesquare_option finished"
                  style={{fontSize:"20px"}}>
                  精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；
                  反令我們力臻極佳品質。
                </div>
              </div>
            </div>
          </div>
        </section> 


        <div class="product_wrap clearfix">
        <Breadcrumb className="HsuanBread">
          <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3001/product">
            產品列表
          </Breadcrumb.Item>

        </Breadcrumb>
        
    <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit" src="./imgs/hsuan/1-5.jpg" alt=""/>
              </div>
        <div class="title en">服飾配件</div>
        </ScrollAnimation>
      </Link>
    </div>
    
    <div class="unit" >
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show" >
                <img class="fit" src="./imgs/hsuan/barbershop.jpg" alt=""/>
              </div>
        <div class="title en">刮鬍修容</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src="./imgs/hsuan/pcq.jpg" alt=""/>
              </div>
        <div class="title en">男士香氛</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src="./imgs/hsuan/lash.jpg" alt=""/>
              </div>
        <div class="title en">沐浴清潔</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src="./imgs/hsuan/cc.jpg" alt=""/>
              </div>
        <div class="title en">頭髮造型</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    <div class="unit">
      <Link to="/project1"><ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src={require("../icon/horizontal2.jpg")} alt=""/>
              </div>
        <div class="title en">精選優惠</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    
    
    </div>
        {/* </main> */}
      {/* </div> */}
    </>
  );
}
}
export default Product;