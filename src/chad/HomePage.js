import React from 'react'
import bannerimg1 from './imgs/輪播圖1.jpg'
import bannerimg2 from './imgs/輪播圖2.jpg'
import bannerimg3 from './imgs/輪播圖3.jpg'
import {Carousel} from 'react-bootstrap'

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

        <h2>品牌故事</h2>
        <p>Shakes Beard 的設計發想有著濃厚的紳士風格，以男仕用品為Logo及設計，
並以「莎士比亞」為諧音，呈現出別具風格的活潑樣貌。
Shakes Beard 發展出一種專屬北德貴族品味的學院風，代表著注重品質的堅持，
又融合了英國的優雅經典，讓時尚商品能夠成為永恆的精品。</p>
      </>
    )
  }
  
  export default HomePage