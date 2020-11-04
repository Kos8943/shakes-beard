import React from "react";
import "../style/Project1.css";
import Sid from "../../Sid";
import Script from "react-load-script";
// import "./Css";
import "animate.css";
import anime from "react-anime";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


import { Container, Row, Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

function Project1() {
  return (
    <>
      
      <anime />
      <ReactCSSTransitionGroup />
      <Script url="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js" />
      <Sid />
      <css />
      
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

      <Row></Row>
      {/* <button type="button" id="BackTop" className="toTop-arrow"></button> */}

      <div className="PgaeWraper">
        <div className="AllBread">
       </div>
        {/* <section className="SectionTile brand-SectionCover">
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
                className="brand-SectionCover__title finished"
                data-anime="fadeInLeft"
                data-anime-trigger=".brand-SectionCover__main"
                data-anime-delay="0.3"
              >
                <div className="_card">
                  <div className="_wrap">
                    <h1 className="_inner">
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
                      <div className="_title1">BRAND</div>
                      <div className="_title2">
                        <div className="_b">Shakes Beard</div>
                      </div>
                    </h1>
                  </div>
                </div>
              </div>
              
              <div className="brand-SectionCover__body">
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
        </section> */}
        <Script />
        <Breadcrumb className="HsuanBread">
            <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              服飾配件
            </Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              領帶/領結
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
         
        <section className="SectionTile brand-SectionProduct">
          <div className="SectionTile__container">
            <div className="brand-ProductItems">
              <div className="brand-ProductItems__items">
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.2"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.4"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.6000000000000001"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.8"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.2000000000000002"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.4000000000000001"
                >
                  <ScrollAnimation animateIn='fadeIn' >
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                       <div className="_image">
                        <img
                          src={require("../icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      <div className="_name typesquare_option">種類</div>
                      <div className="_price">說明</div>
                    </div>
                  </div></ScrollAnimation>
                </div>
              </div>
              {/* <section className="SectionTile brand-SectionOtherBrands">
                <div className="SectionTile__container">
                  <h2 className="TitleA">Other</h2>
                  <div className="brand-BrandCardItems">
                    <div className="brand-BrandCardItems__items">
                     <div className="brand-BrandCardItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.6000000000000001">
                        <a href=".." className="brand-BrandCardItems__card">
                          <div className="brand-BrandCardItems__inner">
                            <div className="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div className="brand-BrandCardItems__title">
                              <div className="_inner">
                                <div>客製化禮盒</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="brand-BrandCardItems__body typesquare_option">
                        訂製你的獨一無二 客製化專屬禮物。
                        </div>
                      </div>
                      <div className="brand-BrandCardItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="0.8">
                        <a href=".." className="brand-BrandCardItems__card">
                          <div className="brand-BrandCardItems__inner">
                            <div className="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div className="brand-BrandCardItems__title">
                              <div className="_inner">
                                <div>預約商家</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="brand-BrandCardItems__body typesquare_option">
                        24小時線上預約服務讓您預約。
                        </div>
                      </div>
                      <div className="brand-BrandCardItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-BrandCardItems"
                        data-anime-delay="1">
                        <a href=".." className="brand-BrandCardItems__card">
                          <div className="brand-BrandCardItems__inner">
                            <div className="brand-BrandCardItems__image">
                              <img src={require("./icon/horizontal.jpg")}
                                className="card-img-top"
                                alt="..."></img>
                            </div>
                            <div className="brand-BrandCardItems__title">
                              <div className="_inner">
                                <div>企業專區</div>
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="brand-BrandCardItems__body typesquare_option">
                          若有企業需求請聯繫我們。
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
        </section>
      </div>

      {/* <Container></Container> */}
    </>
  );
}

export default Project1;
