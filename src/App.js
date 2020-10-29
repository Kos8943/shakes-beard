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
import Budget from './zihyu/Budget'
import LognIn from './yen/LognIn'
import Payment from './kos/pages/Payment'


function App() {
  return (
    <Router>
    <>
   
      <main role="main">
      <ShakesBeardNavbar/>
        <Switch>
        <Route exact path="/">
        <HeroPage />
        </Route>
        <Route exact path="/homepage">
        <HomePage />
        </Route>
<<<<<<< HEAD
        <Route path="/budget">
          <Budget />
=======
        <Route path="/GiftBox_1">
          <GiftBox_1 />
>>>>>>> a2652ebd88b9308211cbba7f50acc9e0822be585
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
      <MyFooter />
      </main>
    </>
    </Router>
  )
}

export default App