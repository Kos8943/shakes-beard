import React from 'react'
import '../chad/styles/custom.scss';
import bannerimg1 from './imgs/輪播圖1.jpg'
import bannerimg2 from './imgs/輪播圖2.jpg'
import bannerimg3 from './imgs/輪播圖3.jpg'
import bannerimg4 from './imgs/輪播圖4.jpg'
import {Button, Carousel, Card} from 'react-bootstrap'
import giftimg from './imgs/禮物盒.jpg'
import hotpage from './imgs/熱銷.jpg'
import map1 from './imgs/map1.jpg'
import map2 from './imgs/map2.jpg'
import HotProduct from './components/HotProduct'


//animation
import "animate.css/animate.min.css"
import ScrollAnimation from 'react-animate-on-scroll'





class HomePage extends React.Component {
    render(){
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
             
        </Carousel.Item>

        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg2}
                    alt="Second slide"
                />

        </Carousel.Item>
        
        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg3}
                    alt="Third slide"
                />

                
        </Carousel.Item>
        <Carousel.Item>
                <img
                    className="d-block w-100 h-100"
                    src={bannerimg4}
                    alt="Third slide"
                />

                
        </Carousel.Item>
    </Carousel>
    </div>
{/* 品牌故事 */}     
<ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutRight'>
        <div className="story-area w-75 h-100">
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
        </ScrollAnimation>
        
        
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

            <HotProduct/>
{/* 熱銷單品 */}

            <div className="gift-area">
                <img
                    className="top-img my-3"
                    src={hotpage}              
                />            
                <p className="top-text">用我們獨有的工藝技術，為不甘平凡的您，點綴出更獨特的風格。</p>

                <button class="chad-topBtn">所有系列</button>
            </div>

{/* 地圖 */}

        
       
                <div className="map-top-area py-5">   
                <ScrollAnimation animateIn='bounceInLeft'
  animateOut='bounceOutLeft'>    
                    <div className="map-top-img-area">
                        <img className="map-top-img" src={map1}/>
                    </div>   
                    </ScrollAnimation>      
                <div className="top-text-area">
                <ScrollAnimation animateIn='bounceInRight'
                                animateOut='bounceOutRight'> 
                    <p className="map-top-text">改變生活，雕塑你的生活風格。</p>    
                    </ScrollAnimation>               
                </div>
                </div>

                
                <div className="map-down-area pb-5">       
                <div className="down-text-area">  
                <ScrollAnimation animateIn='bounceInLeft'
                 animateOut='bounceOutLeft'>             
                    <p className="map-down-text">我們為您挑選了優質的店家，提供最高品質的服務，讓您煥然一新。 </p>   
                   
                    <Button variant="primary" id="mapBtn">立即預約</Button> 
                    </ScrollAnimation>  
                    </div>   
                    <ScrollAnimation animateIn='bounceInRight'
                                animateOut='bounceOutRight'> 
                      <div className="map-down-img-area">  
                    <img className="down-img" src={map2}/>   
                    </div>   
                    </ScrollAnimation> 
                               
                </div>
         
             
</body>
        </>
      
    )
    }
  }


  export default HomePage