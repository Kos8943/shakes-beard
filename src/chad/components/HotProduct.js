import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import "../styles/custom.scss";
import { Button, Carousel, Card } from "react-bootstrap";




function HotProduct() {
  const [dataLoading, setDataLoading] = useState(false)
  const[hotImg, setHotImg]=useState()
  const[hotName, setHotName]=useState()
  const[hotPrice, setHotPrice]=useState()
  
  
   // 載入資料用
   async function getTotalFromServer() {
    setDataLoading(true)
    const url = 'http://localhost:3000/try-db'
    
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data[0].image_name)

    // setTotal(data.total)
    setHotImg(data[0].image_name)
    setHotName(data[0].hotname)
    setHotPrice(data[0].hotprice)
      
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500)
  }, [])


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
          <Card id="cardborder" style={{ width: "20rem" }}>
            <Card.Img variant="top" src={"./imgs/" + `${hotImg}`} />
            <Card.Body id="cardbody">
              <Card.Title>{hotName}</Card.Title>
              <Card.Text id="price">NT${hotPrice}</Card.Text>
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
                <img className="d-block w-100" src="./imgs/hot2.jpeg" alt="Third slide" />
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
