import React, { useState, useEffect } from 'react'
import './App.css';
import ShakesBeardNavbar from './components/ShakesBeardNavbar'
import MyFooter from './components/MyFooter'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import HeroPage from './chad/HeroPage'


//以下import個人頁面
import HomePage from './chad/HomePage'
import Project from './hsuan/Project'
import Cart from './kos/pages/Cart'
import ShopList from './chen/pages/ShopList'
import ShopDetail from './chen/pages/ShopDetail'
import Reservation from './chen/pages/Reservation'
import NotFoundPage from './chen/pages/NotFoundPage'
import GiftBox_1 from './zihyu/GiftBox_1'
import LognIn from './yen/LognIn'
import Payment from './kos/pages/Payment'

function App() {
  return (
    
    <>
    <body className="body">

<Router>




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
  <ShakesBeardNavbar/>
  
    <GiftBox_1 />
   
    <MyFooter /> 
  </Route>
  <Route path="/lognin">
  <ShakesBeardNavbar/>
        <LognIn />
        <MyFooter /> 
      </Route>
      <main>
       {/* 網頁內容跟Router放在這 */}
       <Route exact path="/Project">
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <Project />
        </div>
        <MyFooter /> 
      </Route>
      <Route path="/cart">
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <Cart />
        </div>
        <MyFooter /> 
      </Route>
      <Route path="/payment">
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <Payment />
        </div>
        <MyFooter /> 
      </Route>
      <Route path="/shoplist">   
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <ShopList />
        </div>
        <MyFooter /> 
      </Route>
      <Route path="/shopdetail">
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <ShopDetail />
        </div>
        <MyFooter /> 
      </Route>
      <Route path="/reservation">
      <ShakesBeardNavbar/>
      <div className="footerFix">
        <Reservation />
        </div>
        <MyFooter /> 
      </Route>
      </main>
  </Switch>
{/* <MyFooter /> */}

{/* 輪播牆 */}

</Router>








</body>
      
    </>
  
  )
}

export default App