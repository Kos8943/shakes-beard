import React, { Component } from "react";
import "../chad/styles/custom.scss";
import bannerimg1 from "./imgs/輪播圖1.jpg";
import bannerimg2 from "./imgs/輪播圖2.jpg";
import bannerimg3 from "./imgs/輪播圖3.jpg";
import { Button, Carousel, Card } from "react-bootstrap";
import giftimg from "./imgs/禮物盒.jpg";
import hotpage from "./imgs/熱銷.jpg";
import map2 from "./imgs/map2.jpg";
import map3 from "./imgs/map3.jpg";
import HotProduct from "./components/HotProduct";
import all1 from "./imgs/all1.png";
import all2 from "./imgs/all2.png";
import BrandArea from "./components/BrandArea"

//animation
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Plx from "react-plx";
const parallaxData = [
  {
    start: 0,
    end: 1000,
    duration: 600,
    properties: [
      {
        startValue: 0.5,
        endValue: 1,
        property: "scale",
      },
    ],
  },
];
const parallaxData2 = [
  {
    start: 0,
    end: 1000,
    duration: 900,
    properties: [
      {
        startValue: 0.2,
        endValue: 1,
        property: "scale",
      },
    ],
  },
];
const parallaxDataBtn = [
  {
    start: 0,
    end: 1000,
    duration: 900,
    properties: [
      {
        startValue: 500,
        endValue: 0,
        property: "translateX",
      },
    ],
  },
];
const parallaxDataBtn2 = [
  {
    start: 0,
    end: 2400,
    duration: 2200,
    properties: [
      {
        startValue: 500,
        endValue: 0,
        property: "translateX",
      },
    ],
  },
];
const parallaxData3 = [
  {
    start: 0,
    end: 2400,
    duration: 2200,
    properties: [
      {
        startValue: 0.2,
        endValue: 1,
        property: "scale",
      },
    ],
  },
];
const parallaxData4 = [
  {
    start: 0,
    end: 2600,
    duration: 2500,
    properties: [
      {
        startValue: 500,
        endValue: -120,
        property: "translateX",
      },
    ],
  },
];
const parallaxDataAll = [
  {
    start: 2400,
    end: 2700,
    duration: 3000,
    properties: [
      {
        startValue:-200,
        endValue: 720,
        property: "translateX",
      },
    ],
  },
];

class HomePage extends React.Component {
  render() {
    return (
      <>
        <body className="body">
          {/* 輪播牆 */}
          <div className="carosel-div">
            <Carousel id="caroselText">
              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={bannerimg1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5 class="chad-carosel-text">男仕身分地位與品味的象徵</h5>
                  
                </Carousel.Caption>
                <a href="/project1" class="carosel-link">
                <div className="right-text-area">
                
            <h2>專為男仕挑選的修容用品</h2>
           
          </div>
          </a>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={bannerimg2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5 class="chad-carosel-text">提供優質店家做預約服務</h5>
                
                </Carousel.Caption>
                <a href="/ShopList" class="carosel-link">
                <div className="right-text-area">
                
                <h2>精湛工藝的店家</h2>
                
            
          </div>
          </a>
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100 h-100"
                  src={bannerimg3}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5 class="chad-carosel-text">用精緻的配件展現您的個人氣質</h5>
                 
                </Carousel.Caption>
                <a href="/project1" class="carosel-link">
                <div className="right-text-area">
                
            <h2>既時尚又優雅的配件</h2>
           
          </div> </a>
              </Carousel.Item>
            
            </Carousel>
          </div>

          

          {/* 品牌故事 */}
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutRight">
            <div className="story-area w-75 h-100">
              <h2 className="story-title">品牌故事</h2>
              <div className="story-text-area">
                <p className="story-text pb-2">
                  Shakes Beard
                  的設計發想有著濃厚的紳士風格，以男仕用品為Logo及設計，
                  並以「莎士比亞」為諧音，呈現出別具風格的活潑樣貌。
                </p>
                <p className="story-text pb-2" id="story-text2">
                  Shakes Beard
                  發展出一種北德貴族品味的學院風，代表著注重品質的堅持，
                  又融合了英國的優雅經典，讓時尚商品能夠成為永恆的精品。
                </p>
              </div>
            </div>
          </ScrollAnimation>

          {/* 禮物盒 */}

          <div className="gift-area d-flex justify-content-center">
            <Plx className="gift-img" parallaxData={parallaxData2}>
              <img className="gift-img" src={giftimg} />
            </Plx>
            <img className="gift-img1" src={giftimg} />
            <Plx className="gift-text-area" parallaxData={parallaxData}>
              <h2 className="gift-title py-3">訂製專屬禮盒</h2>
              <p className="gift-text">
                您可以在網頁上設計專屬的禮物盒，即時預覽您的設計，達成最佳的客製化送禮服務。
              </p>
            </Plx>
            <div className="gift-text-area1">
              <h2 className="gift-title py-3">訂製專屬禮盒</h2>
              <p className="gift-text">
                您可以在網頁上設計專屬的禮物盒，即時預覽您的設計，達成最佳的客製化送禮服務。
              </p>
            </div>

            <a href="Path_GiftBox">
              <Plx
                type="button"
                className="giftBtn"
                parallaxData={parallaxDataBtn}
              >
                開始製作
              </Plx>
            </a>

            <a href="Path_GiftBox">
              <button className="giftBtn1">開始製作</button>
            </a>
          </div>

          {/* 熱門商品*/}

          <HotProduct />
          {/* 所有系列 */}

          <div className="gift-area">
            <Plx className="top-img my-3" parallaxData={parallaxData3}>
              <img className="top-img my-3" src={all1} />
            </Plx>
            <img className="top-img1 my-3" src={hotpage} />
            <Plx className="top-text" parallaxData={parallaxData4}>
              <p className="top-text">
                用我們獨有的工藝技術，為不甘平凡的您，點綴出更獨特的風格。
              </p>
            </Plx>
            <p className="top-text1">
              用我們獨有的工藝技術，為不甘平凡的您，點綴出更獨特的風格。
            </p>
            <a href="/product">
              <Plx
                type="button"
                className="chad-topBtn"
                parallaxData={parallaxDataBtn2}
              >
                所有系列
              </Plx>
            </a>
            <a href="/product">
              <button className="chad-topBtn1">所有系列</button>
            </a>
            <Plx className="allimg2" parallaxData={parallaxDataAll}>
              <img className="allimg2" src={all2} />
            </Plx>
          </div>

          {/* 地圖 */}

          <div className="map-top-area py-5">
            <ScrollAnimation
              animateIn="bounceInLeft"
              animateOut="bounceOutLeft"
            >
              <div className="map-top-img-area">
                <img className="map-top-img" src={map3} />
              </div>
            </ScrollAnimation>
            <div className="top-text-area">
              <ScrollAnimation
                animateIn="bounceInRight"
                animateOut="bounceOutRight"
              >
                <p className="map-top-text">改變生活，雕塑你的生活風格。</p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="map-down-area pb-5">
            <div className="down-text-area">
              <ScrollAnimation
                animateIn="bounceInLeft"
                animateOut="bounceOutLeft"
              >
                <p className="map-down-text">
                  我們為您挑選了優質的店家，提供最高品質的服務，讓您煥然一新。{" "}
                </p>
                <a href="/ShopList">
                  <Button variant="primary" id="mapBtn">
                    立即預約
                  </Button>
                </a>
              </ScrollAnimation>
            </div>
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutRight"
            >
              <div className="map-down-img-area">
                <img className="down-img" src={map2} />
              </div>
            </ScrollAnimation>
          </div>
          <BrandArea/>
        </body>
      </>
    );
  }
}

export default HomePage;
