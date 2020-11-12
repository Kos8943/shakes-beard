import React, { useState, useEffect } from "react";
import "../style/All.css";
// import Sid from "../../Sid";
import Script from "react-load-script";
import Pagination from "../component/Pagination";
import "animate.css";
import anime from "react-anime";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Container, Row, Breadcrumb } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";


function Project1(props) {
  const [myProduct, setMyProduct] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);
  const pathname="http://localhost:3001/project/"


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
      <Dropdown/>
      <ReactCSSTransitionGroup />
      <Script url="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js" />
      {/* <Sid /> */}
      <css />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

      <Row></Row>
      {/* <button type="button" id="BackTop" className="toTop-arrow"></button> */}

      <div className="PgaeWraper ">
        <div className="AllBread"></div>
        
        <Script />
        <div className="container">
        <Breadcrumb className="HsuanBread">
          <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3001/product">
            服飾配件
          </Breadcrumb.Item>
          <Breadcrumb.Item href="http://localhost:3000/project1">
            袖扣
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item active>所有系列</Breadcrumb.Item> */}
        </Breadcrumb></div>
        <ul>
        <Dropdown.Menu show>
  <Dropdown.Header>Dropdown header</Dropdown.Header>
  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
</Dropdown.Menu></ul>

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
                            href={`/project/${myProduct[index].sid}`}
                              // href="http://localhost:3001/project/"
                              className="brand-ProductItems__image" >
                              <div className="_image">
                                <img
                                  src={`./imgs/hsuan/${myProduct[index].imgname}`}
                                  className="card-img-top"
                                  alt="..."
                                ></img>
                              </div>
                            </a>
                            <div className="brand-ProductItems__body">
                              <div className="_name typesquare_option" style={{paddingTop:"20px"}}>
                                {myProduct[index].productname}
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
        <Pagination />
      </div>
    </>
  );
}

export default Project1;
