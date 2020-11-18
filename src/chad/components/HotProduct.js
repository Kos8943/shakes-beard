import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/custom.scss";
import { Button, Carousel, Card, CarouselItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function HotProduct(props) {
  const [dataLoading, setDataLoading] = useState(false);
  const [hotProductList, setHotProductList] = useState([]);
  // const [hotName, setHotName] = useState([]);
  // const [hotPrice, setHotPrice] = useState([]);

  // 載入資料用
  async function getTotalFromServer() {
    setDataLoading(true);
    const url = "http://localhost:3000/try-home";

    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值
    console.log(data);

    // setTotal(data.total)

    setHotProductList(data);

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

      <div className="hot-area w-100 h-100 ">
        <ScrollAnimation animateIn="flipInY">
          <div className="hot-text-area">
            <h2 className="hot-title py-3">熱門商品</h2>
            <p className="hot-text mx-auto">
              精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；反令我們力臻極佳品質。
            </p>
          </div>
        </ScrollAnimation>

        <div className="hot-card-area">
          {hotProductList.map((value, index) => {
            return (
              <Card id="cardborder" style={{ width: "20rem" }}>
                <Card.Img id="cardhover" variant="top" src={"./imgs/" + `${hotProductList[index].image_name}`} />
                <Card.Body id="cardbody">
                  <Card.Title>{hotProductList[index].hotname}</Card.Title>
                  <Card.Text id="price">NT${hotProductList[index].hotprice}</Card.Text>
                  <a href="/project/8">
                    <Button variant="primary" id="chadbuy">
                      立即購買
              </Button>
                  </a>
                </Card.Body>
              </Card>
            )
          })}

        </div>

        {/* 熱門商品手機板 */}
        <div className="hot-card-area-mobile">
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./imgs/hot1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./imgs/hot2.jpeg"
                  alt="Third slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="./imgs/hot3.jpg"
                  alt="Third slide"
                />
              </Carousel.Item>
            </Carousel>
            <Card.Body id="card-body-mobile">


              <Carousel>
                <CarouselItem>
                  <Card.Title>機械質感袖扣</Card.Title>
                  <Card.Text>NT$1200</Card.Text>
                </CarouselItem>
                <CarouselItem>
                  <Card.Title>純獾毛刮鬍刷</Card.Title>
                  <Card.Text>NT$1280</Card.Text>
                </CarouselItem>
                <CarouselItem>
                  <Card.Title>木質調刮鬍刀架</Card.Title>
                  <Card.Text>NT$1300</Card.Text>
                </CarouselItem>
              </Carousel>
              <Link as={Link} to="/project">
                <Button variant="primary" id="chadbuy">
                  立即購買
              </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>

    </>
  );
}

export default HotProduct;
