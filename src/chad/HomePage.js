import React from 'react'
import '../chad/styles/custom.scss';
import bannerimg1 from './imgs/輪播圖1.jpg'
import bannerimg2 from './imgs/輪播圖2.jpg'
import bannerimg3 from './imgs/輪播圖3.jpg'
import {Button, Carousel} from 'react-bootstrap'
import giftimg from './imgs/禮物盒.jpg'

function HomePage() {
    return (
      <>
{/* 輪播牆 */}

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
    
{/* 品牌故事 */}     
        <div className="story-area w-100 h-100">
         <h2 className="story-title">品牌故事</h2>
            <div className="story-text-area w-50  d-flex justify-content-center">
                <p className="story-text">
                    Shakes Beard 的設計發想有著濃厚的紳士風格，以男仕用品為Logo及設計，<br/>
                    並以「莎士比亞」為諧音，呈現出別具風格的活潑樣貌。<br/>
                   Shakes Beard 發展出一種北德貴族品味的學院風，代表著注重品質的堅持，<br/>
                    又融合了英國的優雅經典，讓時尚商品能夠成為永恆的精品。
                </p>
            </div>
        </div>
        
        
{/* 禮物盒 */}

            <div className="gift-area">
                <img
                    className="gift-img w-100 h-100"
                    src={giftimg}                
                />
                <div className="gift-text-area">

                <h2 className="gift-title py-3">訂製專屬禮盒</h2>
                <p className="gift-text">您可以在網頁上設計專屬的禮物盒，即時預覽您的設計，達成最佳的個性化送禮服務。</p>
                
                </div>
                <button class="giftBtn">開始製作</button>
            </div>




      </>
    )
  }


  export default HomePage