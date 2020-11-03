import React from "react";
import "./Project.css";
import search from './icon/search.svg';
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from './component/Pagination'
import CatesAside from './component/CatesAside'
import Cards from './component/Cards'
// import Sorts from './component/Sorts'
import Cates from './component/Cates'
import Banner from './component/Banner'
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Project() {
  return (
    <>
     <Row>
   
  </Row>
  <banner/>
      <Container>
      <Row>
    
    
  </Row>
           
    </Container>
     
           {/* <Carousel /> */}
      <div className="container">
        <div className="row">
          <div className="col-3">
            <CatesAside/>
          </div>
          <div className="col-9">
            <Banner />
            <Cates />
            {/* <Sorts /> */}
            <div className="cardGroup">
             
            </div>
            <div className="cardGroup">
             
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-3"></div>
          <div className="col-9 cardGroup">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div> */}
        {/* <Pagination /> */}
      </div>
      <section className="SectionTile brand-SectionOtherBrands">
                <div className="SectionTile__container">
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
                                <div>刮鬍修容</div>
                              </div>
                            </div>
                          </div>
                        </a>
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
                                <div>頭髮造型</div>
                              </div>
                            </div>
                          </div>
                        </a>
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
                                <div>沐浴清潔</div>
                              </div>
                            </div>
                          </div>
                        </a>
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
                                <div>紳士香氛</div>
                              </div>
                            </div>
                          </div>
                        </a>
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
                                <div>服飾配件</div>
                              </div>
                            </div>
                          </div>
                        </a>
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
                                <div>精選優惠</div>
                              </div>
                            </div>
                          </div>
                        </a>
                       </div>
                    </div>
                  </div>
                </div>
              </section> 
    </>
  );
}

export default Project;
