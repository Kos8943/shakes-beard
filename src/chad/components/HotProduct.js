import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/custom.scss";
import { Button, Carousel, Card } from "react-bootstrap";




function HotProduct() {
  return (
    <>
      <div className="hot-area w-100 h-100 ">
        <ScrollAnimation animateIn="flipInY" animateOut="flipOutY">
          <div className="hot-text-area">
            <h2 className="hot-title py-3">熱門商品</h2>
            <p className="hot-text mx-auto">
              精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；反令我們力臻極佳品質。
            </p>
          </div>
        </ScrollAnimation>
        <div className="hot-card-area">
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Card.Img variant="top" src="./imgs/hot1.jpg" />
            <Card.Body id="cardbody">
              <Card.Title>機械質感袖扣</Card.Title>
              <Card.Text id="price">NT$1200</Card.Text>
              <Button variant="primary" id="chadbuy">
                立即購買
              </Button>
            </Card.Body>
          </Card>
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Card.Img variant="top" src="./imgs/hot2.jpeg" />
            <Card.Body id="cardbody">
              <Card.Title>質男嚴選毛刷</Card.Title>
              <Card.Text id="price">NT$1200</Card.Text>
              <Button variant="primary" id="chadbuy">
                立即購買
              </Button>
            </Card.Body>
          </Card>
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Card.Img variant="top" src="./imgs/hot3.jpg" />
            <Card.Body id="cardbody">
              <Card.Title>純銀刮鬍刀架</Card.Title>
              <Card.Text id="price">NT$1200</Card.Text>
              <Button variant="primary" id="chadbuy">
                立即購買
              </Button>
            </Card.Body>
          </Card>
        </div>

        {/* 熱門商品手機板 */}
        <div className="hot-card-area-mobile">
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Carousel>
              <Carousel.Item>
                <img className="d-block w-100" src="./imgs/hot1.jpg" alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="./imgs/hot2.jepg" alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src="./imgs/hot3.jpg" alt="Third slide" />
              </Carousel.Item>
            </Carousel>
            <Card.Body id="card-body-mobile">
              <Card.Title>質男嚴選毛刷</Card.Title>
              <Card.Text>NT$1000</Card.Text>
              <Button variant="primary" id="chadbuy">
                立即購買
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default HotProduct;
