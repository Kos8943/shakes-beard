import React from "react";
import "../style/Product.css";
import Sid from "../../Sid";
import Script from "react-load-script";
// import "./Css";
// import 'animate.css';
import anime from 'react-anime'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

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
<ReactCSSTransitionGroup />
      <Script url="https://cdn.staticfile.org/jquery/3.3.1/jquery.min.js" />
      <Sid />

	  <body  className="page-top typesquare_option">



<main>


{/* <section  className="top-MainVisualCover">
	<div  className="top-MainVisualCover__navi finished" data-anime="fadeInUp" data-anime-trigger=".top-MainVisualCover__copy" data-anime-delay="1.2"  >
		<div  className="_sns">
			
		</div>
		
	</div>
</section> */}

<section class="top-BrandTile top-BrandTile--lilac brandItem" data-index="1">
				<div class="top-BrandTile__bg is-animated" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;1&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;1&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal5.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						
						<div class="_title2 finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;1&quot;]" data-anime-delay="2.05" >刮鬍修容</div>						
						<a href="/brand/pole_pole.php" class="ButtonA finished" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;1&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			<section class="top-BrandTile top-BrandTile--beige brandItem" data-index="2">
				<div class="top-BrandTile__bg is-animated" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;2&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;2&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal4.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						
						<div class="_title2 finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;2&quot;]" data-anime-delay="2.05" >頭髮造型</div>
						<a href="/brand/a.motion.php" class="ButtonA finished" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;2&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			<section class="top-BrandTile top-BrandTile--lilac brandItem" data-index="3">
				<div class="top-BrandTile__bg is-animated" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;3&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;3&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal3.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						<div class="_title2 finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;3&quot;]" data-anime-delay="2.05" >沐浴清潔</div>
						<a href="/brand/a.motion_ja.php" class="ButtonA finished" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;3&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			<section class="top-BrandTile top-BrandTile--beige brandItem" data-index="4">
				<div class="top-BrandTile__bg is-animated" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;4&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;4&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal2.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						<div class="_title2 finished" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;4&quot;]" data-anime-delay="2.05" >紳士香氛</div>
						<a href="/brand/be_moved.php" class="ButtonA finished" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;4&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			<section class="top-BrandTile top-BrandTile--lilac brandItem" data-index="5">
				<div class="top-BrandTile__bg" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;5&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;5&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal1.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						<div class="_title2" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;5&quot;]" data-anime-delay="2.05" >育鬍滋養</div>
						<a href="/brand/b.v.php" class="ButtonA" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;5&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			<section class="top-BrandTile top-BrandTile--beige brandItem" data-index="6">
				<div class="top-BrandTile__bg" data-anime="addClass" data-anime-trigger=".top-BrandTile[data-index=&quot;6&quot;]" data-anime-delay="0">
				</div>
				<div class="top-BrandTile__photo" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;6&quot;]" data-anime-delay="1.25" >
					<div class="_inner">
					<img
                          src={require("../icon/horizontal.jpg")}
                          className="card-img-top"
                          alt="..."
                        ></img>
					</div>
				</div>
				<div class="top-BrandTile__body">
					<h2 class="_inner">
						<div class="_title2" data-anime="fadeInRight" data-anime-trigger=".top-BrandTile[data-index=&quot;6&quot;]" data-anime-delay="2.05" >精選優惠</div>
						<a href="/brand/nival.php" class="ButtonA" data-anime="fadeIn" data-anime-trigger=".top-BrandTile[data-index=&quot;6&quot;]" data-anime-delay="2.9" ><span>MORE</span></a>
					</h2>
				</div>
			</section>

			
	

</main>


</body>
 </>
);
}

export default Product;
