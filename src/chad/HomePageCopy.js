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

import ShakesBeardNavbar from '../components/ShakesBeardNavbar'
import MyFooter from '../components/MyFooter'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//以下import個人頁面
import HeroPage from '../chad/HeroPage'
import HomePage from '../chad/HomePage'
import Project from '../hsuan/Project'
import Cart from '../kos/pages/Cart'
import ShopList from '../chen/pages/ShopList'
import ShopDetail from '../chen/pages/ShopDetail'
import Reservation from '../chen/pages/Reservation'
import NotFoundPage from '../chen/pages/NotFoundPage'
import GiftBox_1 from '../zihyu/GiftBox_1'
import LognIn from '../yen/LognIn'
import Payment from '../kos/pages/Payment'

function HomePageCopy() {
    return (
      <>
      
      <body className="body">

      <Router>

   
      <main role="main">
      
        <Switch>
        <Route exact path="/">
        <HeroPage />

        </Route>
        
        <Route exact path="/homepage">
        <ShakesBeardNavbar/>
        <HomePage />
        <MyFooter /> 
        </Route>
        <Route path="/giftBox_1">
          <GiftBox_1 />
        </Route>
        <Route path="/lognin">
              <LognIn />
            </Route>
          <div className="footerFix">
            {/* 網頁內容跟Router放在這 */}
            <Route exact path="/Project">
              <Project />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/payment">
              <Payment />
            </Route>
            <Route path="/shoplist">
              <ShopList />
            </Route>
            <Route path="/shopdetail">
              <ShopDetail />
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
           
          </div>
        </Switch>
      {/* <MyFooter /> */}

      {/* 輪播牆 */}
      </main>
      </Router>
      
 




 
 
</body>

      </>
    )
  }


  export default HomePageCopy