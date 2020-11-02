import React from 'react'
import '../chad/styles/custom.scss';
import bannerimg1 from './imgs/輪播圖1.jpg'
import bannerimg2 from './imgs/輪播圖2.jpg'
import bannerimg3 from './imgs/輪播圖3.jpg'
import {Button, Carousel, Card} from 'react-bootstrap'
import giftimg from './imgs/禮物盒.jpg'
import hot1 from './imgs/hot/hot1.jpg'
import hot2 from './imgs/hot/hot2.jpeg'
import hot3 from './imgs/hot/hot3.jpg'

import hotpage from './imgs/熱銷.jpg'
import map1 from './imgs/map1.jpg'
import map2 from './imgs/map2.jpg'



function HomePage() {
    return (
      <>
      <body className="body">
 
{/* 輪播牆 */}
<div className="carosel-div">
    <Carousel>
        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg1}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    </div>
{/* 品牌故事 */}     
        <div className="story-area w-100 h-100">
         <h2 className="story-title">品牌故事</h2>
            <div className="story-text-area">
                <p className="story-text pb-2">
                    Shakes Beard 的設計發想有著濃厚的紳士風格，以男仕用品為Logo及設計，
                    並以「莎士比亞」為諧音，呈現出別具風格的活潑樣貌。</p>
                    <p className="story-text pb-2" id="story-text2"> Shakes Beard 發展出一種北德貴族品味的學院風，代表著注重品質的堅持，
                    又融合了英國的優雅經典，讓時尚商品能夠成為永恆的精品。
                </p>
            </div>
        </div>
        
        
{/* 禮物盒 */}

            <div className="gift-area d-flex justify-content-center">
                <img
                    className="gift-img"
                    src={giftimg}                
                />
                <div className="gift-text-area">

                <h2 className="gift-title py-3">訂製專屬禮盒</h2>
                <p className="gift-text">您可以在網頁上設計專屬的禮物盒，即時預覽您的設計，達成最佳的個性化送禮服務。</p>
                
                </div>
                <button class="giftBtn">開始製作</button>
            </div>


{/* 熱門商品*/}

            <div className="hot-area w-100 h-100 ">
               
                <div className="hot-text-area">
                <h2 className="hot-title py-4">熱門商品</h2>
                        <p className="hot-text mx-auto">精湛工藝呈現出迷人魅力。繁複的製作工序沒有令我們對工藝的要求卻步；反令我們力臻極佳品質。
                        </p>
                </div>
                <div className="hot-card-area d-flex justify-content-center">
                                    <Card id="cardborder" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={hot1} />
                    <Card.Body id="cardbody">
                        <Card.Title>機械質感袖扣</Card.Title>
                        <Card.Text id="price">
                        NT$1200
                        </Card.Text>
                        <Button variant="primary" id="buy">立即購買</Button>
                    </Card.Body>
                    </Card>
                    <Card id="cardborder" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={hot2} />
                    <Card.Body id="cardbody">
                        <Card.Title>質男嚴選毛刷</Card.Title>
                        <Card.Text id="price">
                        NT$1200
                        </Card.Text>
                        <Button variant="primary" id="buy">立即購買</Button>
                    </Card.Body>
                    </Card>
                    <Card id="cardborder" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src={hot3} />
                    <Card.Body id="cardbody">
                        <Card.Title>純銀刮鬍刀架</Card.Title>
                        <Card.Text id="price">
                        NT$1200
                        </Card.Text>
                        <Button variant="primary" id="buy">立即購買</Button>
                    </Card.Body>
                    </Card>
                    </div>
             </div>

{/* 熱銷單品 */}

            <div className="gift-area">
                <img
                    className="top-img w-100 h-100 my-3"
                    src={hotpage}              
                />            
                <p className="top-text">用我們獨有的工藝技術，為不甘平凡的您，點綴出更獨特的風格。</p>

                <button class="topBtn">所有系列</button>
            </div>

{/* 地圖 */}

        
       
                <div className="map-top-area d-flex justify-content-center py-5">         
                    <div className="">
                        <img className="w-75" src={map1}/>
                    </div>       
                <div className="top-text-area">
                    <p className="map-top-text">改變生活，雕塑你的生活風格。</p>                  
                </div>
                </div>

                
                <div className="map-down-area d-flex justify-content-center pb-5">       
                <div className="down-text-area">             
                    <p className="map-down-text">我們為您挑選了優質的店家，提供最高品質的服務，讓您煥然一新。 </p>    
                    <Button variant="primary" id="mapBtn">立即預約</Button> 
                    </div>   
                              
                    <img className="down-img" src={map2}/>   
                               
                </div>
         
             
</body>

      </>
    )
  }


  export default HomePage