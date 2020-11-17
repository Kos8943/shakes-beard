import React from "react";
import '../styles/shoppage.scss';
import '../styles/errors.scss'
import { Link } from 'react-router-dom'
import "animate.css";
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class ShopPage extends React.Component {
  render(){
  return (
    
   <>
   
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
  <link rel="stylesheet" href="http://cdn.bootcss.com/animate.css/3.5.1/animate.min.css"></link>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    
      <ReactCSSTransitionGroup />
      
       <section className="SectionTile brand-SectionCover mb-5">
          <div className="SectionTile__container">
            <div
              className="brand-SectionCover__main finished"
              data-anime="fadeInRight"
              data-anime-trigger=".brand-SectionCover__main">
              <img
                src={require("../img/card01.jpg")}
                className="card-img-top shopPageImg"
                alt="..."
              ></img>
            </div>
            <div className="brand-SectionCover__layout">
              <div
                className="brand-SectionCover__title finished mb-5"  style={{color:"#A232D2F"}}>
                <div className="_card">
                  <div className="_wrap">
                    <h1 className="_inner">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                      <div className="_title1">BARBER SHOPS</div>
                      <div className="_title2">
                        <div className="_b" style={{color:"#A232D2F"}}>Shakes Beard</div>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              {/* <div className="brand-SectionCover__body" >
                <div className="_text2 typesquare_option finished"
                  style={{fontSize:"20px"}}>
                  .精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；
                  反令我們力臻極佳品質。
                </div>
              </div> */}
            </div>
          </div>
        </section> 

  {/* <div class="product_wrap clearfix pt-5 mt-5 d-flex justify-content-center"> */}
  <div className="row mt-5 pt-5">   
    <div class="unit col">
      <Link to="/shoplist">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit" src="./imgs/shops/1-ST001.jpg" alt=""/>
              </div>
        <div class="title en">商家列表</div>
        </ScrollAnimation>
      </Link>
    </div>
    
    <div class="unit col" >
      <Link to="/reservation/1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show" >
                <img class="fit" src="./imgs/shops/2-ST001.jpg" alt=""/>
              </div>
        <div class="title en">預約服務</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    {/* <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src="./imgs/shops/3-ST001.jpg" alt=""/>
              </div>
        <div class="title en">男士香氛</div>
        </ScrollAnimation>
      </Link>
    </div>
      
    <div class="unit">
      <Link to="/project1">
      <ScrollAnimation animateIn='fadeIn'>
        <div class="i sa sa--down show">
                <img class="fit"  src="./imgs/shops/4-ST001.jpg" alt=""/>
              </div>
        <div class="title en">沐浴清潔</div>
        </ScrollAnimation>
      </Link>
    </div>   */}
  </div>
  {/* </div> */}
    </>
  );
}
}
export default ShopPage;