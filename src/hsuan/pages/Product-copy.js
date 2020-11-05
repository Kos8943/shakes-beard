import React from "react";
import "../style/Product.css";
import Sid from "../../Sid";
import Script from "react-load-script";
// import "./Css";
// import "animate.compat.css";

import "animate.css";
import anime from "react-anime";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
// import "../Script.js";

// import search from "./icon/search.svg";
// import icon from "../icon/logo1.svg";
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from "./component/Pagination";
// import CatesAside from "./component/CatesAside";
// import Cards from "./component/Cards";
// import Sorts from "./component/Sorts";
// import Cates from "./component/Cates";
// import Banner from "./component/Banner";

import { Carousel } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Product() {
  return (
   
   <>
	
      <h1 className="animate__animated animate__bounce">An animated element</h1>
      <ReactCSSTransitionGroup />
      
      <Sid />
      {/* <animate/>	   */}

      {/* <div className="page-top typesquare_option"> */}
        {/* <main> */}
          {/* <section  className="top-MainVisualCover">
	<div  className="top-MainVisualCover__navi finished" data-anime="fadeInUp" data-anime-trigger=".top-MainVisualCover__copy" data-anime-delay="1.2"  >
		<div  className="_sns">
			
		</div>
		
	</div>
</section> */}

          <section
            className="top-BrandTile top-BrandTile--lilac brandItem"
            data-index="1">
			{/* 圖片後面的方塊顏色 */}
            {/* <div className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="1"]'
              data-anime-delay="0"></div> */}
            <div className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="1"]'
              data-anime-delay="1.25" >
              <div className="_inner">
                <img src={require("../icon/horizontal5.jpg")}
                  className="card-img-top"
                  alt="..."></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
                <div className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="1"]'
                  data-anime-delay="2.05">
                  刮鬍修容
                </div>
				{/* more的按鈕效果 */}
                <a href="/brand/pole_pole.php"
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
            <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="2"]'
              data-anime-delay="0"
            ></div>
            <div
              className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="2"]'
              data-anime-delay="1.25"
            >
              <div className="_inner">
                <img
                  src={require("../icon/horizontal4.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
                <div
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="2"]'
                  data-anime-delay="2.05" >
                  頭髮造型
                </div>
                <a
                  href="/brand/a.motion.php"
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="2"]'
                  data-anime-delay="2.9"
                >
                  <span>MORE</span>
                </a>
              </h2>
            </div>
          </section>

          <section
            className="top-BrandTile top-BrandTile--lilac brandItem"
            data-index="3"
          >
            <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="3"]'
              data-anime-delay="0"
            ></div>
            <div
              className="top-BrandTile__photo finished"
              data-anime="fadeInRight"
              data-anime-trigger='.top-BrandTile[data-index="3"]'
              data-anime-delay="1.25"
            >
              <div className="_inner">
                <img
                  src={require("../icon/horizontal3.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
                <div
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="3"]'
                  data-anime-delay="2.05"
                >
                  沐浴清潔
                </div>
                <a
                  href="/brand/a.motion_ja.php"
                  className="ButtonA finished"
                  data-anime="fadeIn"
                  data-anime-trigger='.top-BrandTile[data-index="3"]'
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
            <div
              className="top-BrandTile__bg is-animated"
              data-anime="addClass"
              data-anime-trigger='.top-BrandTile[data-index="4"]'
              data-anime-delay="0"
            ></div>
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
                <div
                  className="_title2 finished"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="4"]'
                  data-anime-delay="2.05"
                >
                  紳士香氛
                </div>
                <a
                  href="/brand/be_moved.php"
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
                  src={require("../icon/horizontal1.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
                <div
                  className="_title2"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="5"]'
                  data-anime-delay="2.05"
                >
                  育鬍滋養
                </div>
                <a
                  href="/brand/b.v.php"
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
                  src={require("../icon/horizontal.jpg")}
                  className="card-img-top"
                  alt="..."
                ></img>
              </div>
            </div>
            <div className="top-BrandTile__body">
              <h2 className="_inner">
                <div
                  className="_title2"
                  data-anime="fadeInRight"
                  data-anime-trigger='.top-BrandTile[data-index="6"]'
                  data-anime-delay="2.05"
                >
                  精選優惠
                </div>
                <a
                  href="/brand/nival.php"
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

export default Product;
