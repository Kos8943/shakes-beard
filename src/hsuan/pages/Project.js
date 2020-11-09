import React, { useState, useEffect } from "react";
import "../style/Project.css";
import search from "../icon/search.svg";
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from './component/Pagination'
// import Sorts from './component/Sorts'
import {} from "react-bootstrap";
import { NavLink } from "react-router-dom"; 
import original from "../icon/original.jpg";
// import Library, { NamedComponent } from 'library';
import Resizer from 'react-image-file-resizer';
// import "project-img.js";

// const resizeFile = (file) => new Promise(resolve => {
//     Resizer.imageFileResizer(file, 300, 300, 'original', 100, 0,
//     uri => {
//       resolve(uri);
//     },
//     'base64'
//     );
// });
// const onChange = async (event) => {
//     const file = event.target.files[0];
//     const image = await resizeFile(file);
//     console.log(image);
//   }
              
function Project() {
  const [path, setPath] = useState('horizontal4.jpg')

  return (
    <>
    
    {/* <div>
        <img style={{maxWidth: '50px'}} src={imagesPath[original]} onClick={this.toggleImage} />
      </div> */}
      <body className="page-brand_detail  typesquare_option">
        <main>
          <div className="PgaeWraper">
            <div className="PgaeWrapper__inner">
              {/* <!-- start PageWraper --> */}

              <section className="SectionTile brand-SectionProductDetail">
                <div className="SectionTile__container">
                  <div className="brand-SectionProductDetail__layout">
                    <div className="brand-SectionProductDetail__image">
                      <div className="brand-SectionProductDetail__thums">                   
                        <div className="_item"  style={{width:'100%',display:'inline-block'}}>
                          <div className="_image">
                            <img src={`./imgs/hsuan/${path}`}
                              className="card-img-top"
                              ></img>
                          </div>
                        </div>
                                              
                        <div className="_item" >
                          <div className="_image">
                          <img 
                              src={require("../icon/horizontal4.jpg")}
                              className="card-img-top"
                             
                            ></img>
                          </div>
                        </div>
                       <div className="_item" onClick={() => { setPath('horizontal3.jpg') }} >
                          <div className="_image" >
                            <img 
                              src={`./imgs/hsuan/horizontal3.jpg`}
                              className="card-img-top"
                             
                            ></img>
                          </div>
                        </div>
                        <div className="_item">
                          <div className="_image">
                          <img 
                              src={require("../icon/horizontal3.jpg")}
                              className="card-img-top"
                             
                            ></img>
                          </div>
                        </div>                    
                      </div>
                  
                    </div>
                    
                    <div className="brand-SectionProductDetail__body">
                      <div className="brand-SectionProductDetail__heading">
                        <h2
                          className="_title typesquare_option finished"
                          data-anime="fadeInRight"
                          data-anime-trigger=".brand-SectionProductDetail"
                          data-anime-delay="0.6">
                          {" "}
                          商品名稱
                        </h2>
                        <div
                          className="_name finished"
                          data-anime="fadeInRight"
                          data-anime-trigger=".brand-SectionProductDetail"
                          data-anime-delay="0.3"
                        >
                          <h1 className="__name">NT$1500</h1>
                        </div>
                      </div>

                      <div
                        className="brand-SectionProductDetail__text finished"
                        data-anime="fadeInRight"
                        data-anime-trigger=".brand-SectionProductDetail"
                        data-anime-delay="0.9"
                      >
                        {" "}
                        打一些介紹
                      </div>
                      <div
                        className="brand-SectionProductDetail__info finished"
                        data-anime="fadeInRight"
                        data-anime-trigger=".brand-SectionProductDetail"
                        data-anime-delay="1.2"
                      >
                        <div className="_rows">
                          <div className="_row">
                            <div className="_col _col--1">高度</div>
                            <div className="_col _col--2">24.2mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">寬度</div>
                            <div className="_col _col--2">7.5mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">重量</div>
                            <div className="_col _col--2">17.22g</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">說明</div>
                            <div className="_col _col--2">
                              說明<span className="_tax"></span>
                            </div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">說明</div>
                            <div className="_col _col--2">說明</div>
                          </div>
                        </div>
                      </div>
                      <a href="/brand/pole_pole.php" className="ButtonA finished">
                        <span>加入購物車</span>
                      </a>
                      <br></br>
                      {/* <img src="./icon/search.svg" style="width: 15px;"> */}
                      <a href="/brand/pole_pole.php" className="ButtonA1 finished">
                        <span>♥加入追蹤♥</span>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              <section className="SectionTile brand-SectionRelatedProducts">
                <div className="SectionTile__container">
                  <h2 className="TitleA">其他推薦</h2>

                  <div className="brand-ProductItems">
                    <div className="brand-ProductItems__items">
                      <div
                        className="brand-ProductItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="../product/3"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src={require("../icon/original.jpg")}
                                className="card-img-top"
                               
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">名稱</span>
                            </div>
                            <div className="_price">價錢</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.2"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="../product/12"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src={require("../icon/original.jpg")}
                                className="card-img-top"
                               
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">名稱</span>
                            </div>
                            <div className="_price">價錢</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.4"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="../product/78"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src={require("../icon/original.jpg")}
                                className="card-img-top"
                               
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">名稱</span>
                            </div>
                            <div className="_price">價錢</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.6000000000000001"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="../product/13"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src={require("../icon/original.jpg")}
                                className="card-img-top"
                               
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">名稱</span>
                            </div>
                            <div className="_price">價錢</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* <!-- end PageWraper --> */}
        </main>
      </body>
    </>
  );
}


export default Project;