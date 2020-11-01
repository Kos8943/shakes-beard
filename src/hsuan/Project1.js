import React from "react";
import "./Project1.css";
import Sid from "../Sid";
import Script from "react-load-script";

import search from "./icon/search.svg";
import icon from "../icon/logo1.svg"
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from "./component/Pagination";
// import CatesAside from "./component/CatesAside";
// import Cards from "./component/Cards";
// import Sorts from "./component/Sorts";
// import Cates from "./component/Cates";
// import Banner from "./component/Banner";

import {
  Container,
  Row,
  Breadcrumb,
 } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Project1() {
  return (
   
    <>
    <Script url="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js"/>
      <Sid/>
      <Script/>
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

      <Row>
        
      </Row>
      {/* <button type="button" id="BackTop" className="toTop-arrow"></button> */}
       
      <div className="PgaeWraper">
      <section className="SectionTile brand-SectionCover">
				<div className="SectionTile__container">
					<div className="brand-SectionCover__main finished"
					data-anime="fadeInRight" data-anime-trigger=".brand-SectionCover__main">
						<img
          src={require("./icon/bathroom.jpg")}
          className="card-img-top"
          alt="..."></img>
					</div>
					<div className="brand-SectionCover__layout">
						<div className="brand-SectionCover__title finished"
						data-anime="fadeInLeft" data-anime-trigger=".brand-SectionCover__main"
							data-anime-delay="0.3">
							<div className="_card">
								<div className="_wrap">
									<h1 className="_inner">
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
							data-anime="fadeInRight" data-anime-trigger=".brand-SectionCover__main"
								data-anime-delay="0.9">
								精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；<br></br>
                反令我們力臻極佳品質。
							</div>
						</div>
					</div>
				</div>
			</section>
      
        <section className="SectionTile brand-SectionProduct">
          <div className="SectionTile__container">
            <div className="brand-ProductItems">
              <div className="brand-ProductItems__items">
              <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")} className="card-img-top"  alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                        <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")} className="card-img-top"  alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                        <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")} className="card-img-top"  alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                        <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")} className="card-img-top"  alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                        <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0">
                  <div className="brand-ProductItems__card">
                    <a href="../product/1" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")} className="card-img-top"  alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                        <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.2">
                  <div className="brand-ProductItems__card">
                    <a href="../product/2" className="brand-ProductItems__image">
                      <div className="_image">
                        <img src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                     
                      <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.4">
                  <div className="brand-ProductItems__card">
                    <a href="../product/3" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                      <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.6000000000000001">
                  <div className="brand-ProductItems__card">
                    <a href="../product/4" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                     
                      <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="0.8">
                  <div className="brand-ProductItems__card">
                    <a href="../product/11" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                      
                      <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div
                  className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1">
                  <div className="brand-ProductItems__card">
                    <a href="../product/12" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                    <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.2000000000000002">
                  <div className="brand-ProductItems__card">
                    <a href="../product/13" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                    <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
                <div className="brand-ProductItems__item finished"
                  data-anime="fadeInUp"
                  data-anime-trigger=".brand-ProductItems"
                  data-anime-delay="1.4000000000000001">
                  <div className="brand-ProductItems__card">
                    <a href="../product/77" className="brand-ProductItems__image">
                      <div className="_image">
                        <img
                          src={require("./icon/original.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
                      </div>
                    </a>
                    <div className="brand-ProductItems__body">
                    <div className="_name typesquare_option">
                        種類
                      </div>
                      <div className="_price">說明</div>
                    </div>
                  </div>
                </div>
               </div>
              <section className="SectionTile brand-SectionOtherBrands">
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
              </section>
            </div>
          </div>
        </section>
      </div>
      

      <Container></Container>
    </>
  );
}

export default Project1;
