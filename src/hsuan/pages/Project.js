import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "../style/All.css";
// import "../style/Project1.scss";
import search from "../icon/search.svg";
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from './component/Pagination'
// import Sorts from './component/Sorts'
import {} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";
import original from "../icon/original.jpg";

// import Library, { NamedComponent } from 'library';
import Resizer from "react-image-file-resizer";
// import "project-img.js";

function Project(props) {
  const [path, setPath] = useState("[horizontal4.jpg]");
  //  console.log('InfoSection', props)
  const sid = props.match.params.sid;
  // console.log("props.match.params", props.match.params);
  // console.log("sid", sid);

  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [imgname, setImgname] = useState("");
  const [imgname1, setImgname1] = useState("");
  const [imgname2, setImgname2] = useState("");
  const [imgname3, setImgname3] = useState("");
  const [detail, setDetail] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [weight, setWeight] = useState("");

  const [showImg, setShowImg] = useState(true);
  const [showImg1, setShowImg1] = useState(false);
  const [showImg2, setShowImg2] = useState(true);
  const [showImg3, setShowImg3] = useState(false);
  // const [dataIsExist, setDataIsExist] = useState(true)
 
  async function getmyProduct() {
    //  console.log('getmyProduct',sid)
    // json-db
    // const url = 'http://localhost:3000/try-shop/'+ shopid
    const url = "http://localhost:3000/try-list";
    // console.log("url", url);

    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    // console.log("response", response);
    // console.log("data", data);

    //  const i =1
    const i = [sid] - 1;
    // console.log("[sid]-1", i);
    // console.log("data[i]", data[i]); // index 改sid?

    // if(!data[i].sid){
    //   setDataIsExist(false)
    //   console.log('no data[i].sid')
    //   return
    // }

    setProductName(data[i].productname);
    setPrice(data[i].price);
    setImgname(data[i].imgname);
    setImgname1(data[i].imgname1);
    setImgname2(data[i].imgname2);
    setImgname3(data[i].imgname3);
    setDetail(data[i].detail);
    setHeight(data[i].height);
    setWidth(data[i].width);
    setWeight(data[i].weight);
  }

  useEffect(() => {
    getmyProduct();
  }, []);


  //Fetch save data
  // setAllData(data)
  // setShowData(data)

  //JSX
  // {ShowData.map(()=>{
  //   component
  // })}

  // useEffect(()=>{
  //   for (let i=0; i < allData.length ; i++){
  //     if(data[i].productname.indexOf(filterInput) !== -1){
  //       showData.push(data[i])
  //     }
  //   }
  // },[filterInput])

  function ABC(event) {
    console.log("event.target",event.target.getAttribute('value'));
    // let target = document.querySelector(".card-img-top");
    // console.log(target.attributes.src);
    // target.attributes.src = `/imgs/hsuan/`
    // console.log(target.attributes.src)
    let value = event.target.getAttribute('value');
    if (value == 1) {
      let tmp = imgname;
      setImgname(imgname1)
      setImgname1(tmp)
    } else if (value == 2) {
      let tmp = imgname;
      setImgname(imgname2)
      setImgname2(tmp)
    } else if (value == 3) {
      let tmp = imgname;
      setImgname(imgname3)
      setImgname3(tmp)
    }
    
    // if(showImg1){
    //   setShowImg1(false)
    //   setShowImg2(true)
    // } if(showImg2){
    //   setShowImg1(true)
    //   setShowImg2(false)
  }

  return (
    <>
      <Breadcrumb />
      {/* <div>
        <img style={{maxWidth: '50px'}} src={imagesPath[original]} onClick={this.toggleImage} />
      </div> */}
      <body className="page-brand_detail  typesquare_option">
        <main>
          <div className="PgaeWraper">
            <div className="PgaeWrapper__inner">
            <div className="container">
              <Breadcrumb className="HsuanBread">
                <Breadcrumb.Item href="#">首頁</Breadcrumb.Item>
                <Breadcrumb.Item href="http://localhost:3000/project1">
                  服飾配件
                </Breadcrumb.Item>
                <Breadcrumb.Item href="http://localhost:3001/project1">
                  袖扣
                </Breadcrumb.Item>
                <Breadcrumb.Item active>所有系列</Breadcrumb.Item>
              </Breadcrumb></div>
              {/* <!-- start PageWraper --> */}

              <section className="SectionTile brand-SectionProductDetail">
                <div className="SectionTile__container">
                  <div className="brand-SectionProductDetail__layout">
                    <div className="brand-SectionProductDetail__image">
                      <div
                        className="brand-SectionProductDetail__thums"
                        onClick={(event)=>ABC(event)} >
                        <div
                          className="_item"
                          style={{ width: "100%", display: "inline-block" }}   >
                          <div className="_image">
                          <img
                                src={`/imgs/hsuan/${imgname}`}
                                className="card-img-top"
                                alt=""
                              ></img>
                          
                            {/* {showImg1 && (
                              <img
                                src={`/imgs/hsuan/${imgname}`}
                                className="card-img-top"
                                alt=""
                              ></img>
                            )}
                            {showImg2 && (
                              <img
                                src={`/imgs/hsuan/${imgname1}`}
                                className="card-img-top"
                                alt=""
                              ></img>
                            )} */}
                          </div>
                        </div>

                        <div className="_item" value="1">
                          <div className="_image">
                          <img
                                src={`/imgs/hsuan/${imgname1}`}
                                className="card-img-top"
                                alt=""
                              ></img>
                          </div>
                        </div>
                        <div className="_item" value="2">
                          <div className="_image">
                          <img
                                src={`/imgs/hsuan/${imgname2}`}
                                className="card-img-top"
                                alt=""
                              ></img>
                          </div>
                        </div>
                        <div className="_item" value="3">
                          <div className="_image">
                          <img
                                src={`/imgs/hsuan/${imgname3}`}
                                className="card-img-top"
                                alt=""
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
                          data-anime-delay="0.6"
                        >
                          {productname}
                        </h2>
                        <div
                          className="_name finished"
                          data-anime="fadeInRight"
                          data-anime-trigger=".brand-SectionProductDetail"
                          data-anime-delay="0.3"
                        >
                          <h1 className="__name" style={{ fontSize: "1.5rem" }}>
                            NT${price}
                          </h1>
                        </div>
                      </div>

                      <div
                        className="brand-SectionProductDetail__text finished"
                        data-anime="fadeInRight"
                        data-anime-trigger=".brand-SectionProductDetail"
                        data-anime-delay="0.9"
                      >
                        {" "}
                        {detail}
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
                            <div className="_col _col--2">{height}mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">寬度</div>
                            <div className="_col _col--2">{width}mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">重量</div>
                            <div className="_col _col--2">{weight}g</div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="/"
                        className="ButtonA finished"
                      >
                        <span>加入購物車</span>
                      </a>
                      <br></br>
                      {/* <img src="./icon/search.svg" style="width: 15px;"> */}
                      <a
                        href="/"
                        className="ButtonA finished"
                      >
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
                        className="brand-ProductItems__item1 finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="http://localhost:3001/project/5"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src="/imgs/hsuan/5-1.jpg"
                                className="card-img-top"
                                alt=""
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">方形鋼琴黑袖扣</span>
                            </div>
                            <div className="_price">NT$1488</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item1 finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.2"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="http://localhost:3001/project/7"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src="/imgs/hsuan/7-1.jpg"
                                className="card-img-top"
                                alt=""
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">陀飛輪軸白色袖扣</span>
                            </div>
                            <div className="_price">NT$2555</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item1 finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.4"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="http://localhost:3001/project/8"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <div className="zoom">
                                <img
                                  src="/imgs/hsuan/8-1.jpg"
                                  className="card-img-top"
                                  alt=""
                                ></img>
                              </div>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">機械機芯黑色袖扣</span>
                            </div>
                            <div className="_price">NT$2300</div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="brand-ProductItems__item1 finished"
                        data-anime="fadeInUp"
                        data-anime-trigger=".brand-ProductItems"
                        data-anime-delay="0.6000000000000001"
                      >
                        <div className="brand-ProductItems__card">
                          <a
                            href="http://localhost:3001/project/2"
                            className="brand-ProductItems__image"
                          >
                            <div className="_image">
                              <img
                                src="/imgs/hsuan/1-1.jpg"
                                className="card-img-top"
                                alt=""
                              ></img>
                            </div>
                          </a>
                          <div className="brand-ProductItems__body">
                            <div className="_no">
                              <span className="_code">星空石袖扣</span>
                            </div>
                            <div className="_price">NT$1200</div>
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

export default withRouter(Project);
