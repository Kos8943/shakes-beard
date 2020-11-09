import React, { useState, useEffect } from "react";
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

function Project1(props) {
  const [myProduct, setMyProduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  // 載入資料用
  async function getTotalFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const url = "http://localhost:3000/try-list";

    const request = new Request(url, {
      method: "GET",
      heades: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data);

    // setTotal(data.total)
    setMyProduct(data);
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer();
  }, []);

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500);
  }, []);
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

      <div className="PgaeWraper ">
        <div className="AllBread"></div>
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
          <Breadcrumb.Item href="http://localhost:3000/project1">
            服飾配件
          </Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3000/project1">
            領帶/領結
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

        <section className="SectionTile brand-SectionProduct">
          <div className="SectionTile__container ">
           
                <div className="brand-ProductItems ">
                  <div className="brand-ProductItems__items">
                  {myProduct.map((value, index) => {
              return (
                    <div className="brand-ProductItems__item finished col-3">
 

                      <div className="">
                        <ScrollAnimation animateIn="fadeIn" className="">
                          <div className="brand-ProductItems__card">
                            <a
                              href="http://localhost:3000/project"
                              className="brand-ProductItems__image"
                            >
                              <div className="_image">
                                <img
                                  src={`./imgs/hsuan/${myProduct[index].imgName}`}
                                  className="card-img-top"
                                  alt="..."
                                ></img>
                              </div>
                            </a>
                            <div className="brand-ProductItems__body">
                              <div className="_name typesquare_option">
                                {myProduct[index].name}
                              </div>
                              <div className="_price">
                                NT${myProduct[index].price}
                              </div>
                            </div>
                          </div>
                        </ScrollAnimation>
                      </div></div>
                  
              );
            })}  
                  </div>
                </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Project1;
