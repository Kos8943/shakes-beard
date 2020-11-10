import React from "react";
import "../style/Product.css";
import Sid from "../../Sid";
import Script from "react-load-script";
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
// import "./Css";
// import "animate.compat.css";
// import Anime, {anime} from 'react-anime';
// import "../Script.js";
import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";

//animation
import { bounceInLeft,} from 'react-animations'
import Radium, {StyleRoot} from 'radium';
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'
import anime from 'animejs';
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
   
	<link rel="stylesheet" href="http://cdn.bootcss.com/animate.css/3.5.1/animate.min.css"></link>
     
      <ReactCSSTransitionGroup />
      
      <Sid />
       <section className="SectionTile brand-SectionCover">
          <div className="SectionTile__container">
            <div
              className="brand-SectionCover__main finished"
              data-anime="fadeInRight"
              data-anime-trigger=".brand-SectionCover__main">
              <img
                src={require("../icon/bathroom.jpg")}
                className="card-img-top"
                alt="..."
              ></img>
            </div>
            <div className="brand-SectionCover__layout">
              <div
                className="brand-SectionCover__title finished"  style={{color:"#A69981"}}>
                <div className="_card">
                  <div className="_wrap">
                    <h1 className="_inner">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                      <div className="_title1">BRAND</div>
                      <div className="_title2">
                        <div className="_b" style={{color:"#A69981"}}>Shakes Beard</div>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="brand-SectionCover__body" >
                <div className="_text2 typesquare_option finished"
                  data-anime="fadeInRight"
                  data-anime-trigger=".brand-SectionCover__main"
                  data-anime-delay="0.9">
                  精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；
                  <br></br>
                  反令我們力臻極佳品質。
                </div>
              </div>
            </div>
          </div>
        </section> 


          <section className="top-BrandTile top-BrandTile--lilac brandItem "  data-index="1">
						{/* 圖片後面的方塊顏色 */}
            {/* <div className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="1"]'
              data-anime-delay="0"></div> */}
         
            <div className="top-BrandTile__photo finished "  >
               <div className="_inner" >
               <img src={require("../icon/24K.png")}
                  className="card-img-top" 
                  alt="..."></img>
              </div>
            </div>
            <div className="top-BrandTile__body" >
              <h2 className="_inner">
                <ScrollAnimation animateIn='fadeIn'><div className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="1"]'
                  data-anime-delay="2.05">
                  刮鬍修容
                </div></ScrollAnimation>
				         {/* more的按鈕效果 */}
                <a href=""
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="1"]'
                  data-anime-delay="2.9">
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>
 
 
          <section
            className="top-BrandTile top-BrandTile--beige brandItem"
            data-index="2"
          >
            {/* <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="2"]'
              data-anime-delay="0"
            ></div> */}
            <div
              className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="2"]'
              data-anime-delay="1.25">
              
               <div className="_inner">
               <img src={require("../icon/3.jpg")}
                  className="card-img-top" alt="..."></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner ">
              <ScrollAnimation animateIn='fadeIn'>
                <div 
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="2"]'
                  data-anime-delay="2.05" >
                  頭髮造型
                </div></ScrollAnimation>
                <a
                 href="http://localhost:3000/project1"
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="2"]'
                  data-anime-delay="2.9">
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>

          <section
            className="top-BrandTile top-BrandTile--lilac brandItem"
            data-index="3"
          >
            {/* <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="3"]'
              data-anime-delay="0"
            ></div> */}
            <div
              className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="3"]'
              data-anime-delay="1.25"
            >
               <div className="_inner">
              <img
                  src={require("../icon/horizontal.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
              <ScrollAnimation animateIn='fadeIn'>
                <div
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="3"]'
                  data-anime-delay="2.05"
                >
                  沐浴清潔
                </div></ScrollAnimation>
                <a
                 href="http://localhost:3000/project1"
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile'
                  data-anime-delay="2.9"
                >
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>

          <section
            className="top-BrandTile top-BrandTile--beige brandItem"
            data-index="4"
          >
            {/* <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="4"]'
              data-anime-delay="0"
            ></div> */}
            <div
              className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="4"]'
              data-anime-delay="1.25"
            >
              <div className="_inner">
                <img
                  src={require("../icon/horizontal2.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
              <ScrollAnimation animateIn='fadeIn'>
                <div
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="4"]'
                  data-anime-delay="2.05"
                >
                  紳士香氛
                </div></ScrollAnimation>
                <a
                 href="http://localhost:3000/project1"
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="4"]'
                  data-anime-delay="2.9"
                >
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>

          <section
            className="top-BrandTile top-BrandTile--lilac brandItem"
            data-index="5"
          >
            <div
              className="top-BrandTile__bg"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="5"]'
              data-anime-delay="0"
            ></div>
            <div
              className="top-BrandTile__photo"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="5"]'
              data-anime-delay="1.25"
            >
              <div className="_inner">
                <img
                  src={require("../icon/1-5.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
              <ScrollAnimation animateIn='fadeIn'>
                <div
                  className="_title2"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="5"]'
                  data-anime-delay="2.05"
                >
                  服飾配件
                </div></ScrollAnimation>
                <a
                 href="http://localhost:3000/project1"
                  className="ButtonA"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="5"]'
                  data-anime-delay="2.9"
                >
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>

          <section
            className="top-BrandTile top-BrandTile--beige brandItem"
            data-index="6"
          >
            <div
              className="top-BrandTile__bg"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="6"]'
              data-anime-delay="0"
            ></div>
            <div
              className="top-BrandTile__photo"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="6"]'
              data-anime-delay="1.25"
            >
              <div className="_inner">
                <img
                  src={require("../icon/horizontal2.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
              <ScrollAnimation animateIn='fadeIn'>
                <div
                  className="_title2"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="6"]'
                  data-anime-delay="2.05"
                >
                  精選優惠
                </div></ScrollAnimation>
                <a
                 href="http://localhost:3000/project1"
                  className="ButtonA"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="6"]'
                  data-anime-delay="2.9"
                >
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>
        {/* </main> */}
      {/* </div> */}
    </>
  );
}
}
export default Product;
