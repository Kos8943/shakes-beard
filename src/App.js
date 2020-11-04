import React, { useState, useEffect } from "react";
import "./App.css";
import ShakesBeardNavbar from "./components/ShakesBeardNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HeroPage from "./chad/HeroPage";
import Sid from "./Sid";
import ScrollUp from 'react-scroll-up'

//以下import個人頁面

import HomePage from "./chad/HomePage";
import Product from "./hsuan/pages/Product";
import Market from "./hsuan/Market";
import Project1 from "./hsuan/pages/Project1";
import Project from "./hsuan/Project";
import Cart from "./kos/pages/Cart";
import ShopList from "./chen/pages/ShopList";
import ShopDetail from "./chen/pages/ShopDetail";
import ReservationMake from "./chen/pages/ReservationMake";
import ReservationPerson from "./chen/pages/ReservationPerson";
import ReservationCheck from "./chen/pages/ReservationCheck";
import NotFoundPage from "./chen/pages/NotFoundPage";
import Func_GiftBox from "./zihyu/GiftBox";
import Func_Budget from "./zihyu/Budget";
import Func_ChooseRazor from "./zihyu/ChooseRazor";
import Func_ChooseBrush from "./zihyu/ChooseBrush";
import Func_ChooseStand from "./zihyu/ChooseStand";
import Func_Color from "./zihyu/Color";
import Func_Finish from "./zihyu/Finish";
import LogIn from "./yen/LogIn";
import SignUp from "./yen/SignUp";
import MemberUpdate from "./yen/MemberUpdate";
import PasswordUpdate from "./yen/PasswordUpdate";
import PreferenceSetting from "./yen/PreferenceSetting";
import FavoritesList from "./yen/FavoritesList";
import Payment from "./kos/pages/Payment";
import Paycomplete from './kos/pages/Paycomplete'
import orderCheck from './kos/pages/OrderCheck'
import OrderCheck from "./kos/pages/OrderCheck";
import TopArrow from "./icon/top-arrow.jpg"



function App() {
  return (
    <Router>

    <>
   
    

      
        <main role="main">
        <ScrollUp showUnder={150}>
          <img src={TopArrow} class="scrolltotop d-lg-block d-none"></img>
        </ScrollUp>
          <Switch>
            <Route exact path="/">
              <HeroPage />

            </Route>
            
            <Route exact path="/homepage">
              <ShakesBeardNavbar />
              <HomePage />
              <MyFooter />
            </Route>

            <Route path="/Path_GiftBox">
              <ShakesBeardNavbar />
              <Func_GiftBox />
              <MyFooter />
            </Route>

            <Route path="/Path_Budget">
              <ShakesBeardNavbar />
              <Func_Budget />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseRazor">
            <ShakesBeardNavbar />
              <Func_ChooseRazor />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseBrush">
            <ShakesBeardNavbar />
              <Func_ChooseBrush />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseStand">
            <ShakesBeardNavbar />
              <Func_ChooseStand />
              <MyFooter />
            </Route>

            <Route path="/Path_Color">
            <ShakesBeardNavbar />
              <Func_Color />
              <MyFooter />
            </Route>

            <Route path="/Path_Finish">
            <ShakesBeardNavbar />
              <Func_Finish />
              <MyFooter />
            </Route>

            <Route path="/login">
              <ShakesBeardNavbar />
              <LogIn />
              <MyFooter />
            </Route>

            <Route path="/signup">
              <ShakesBeardNavbar />
              <SignUp />
              <MyFooter />
            </Route>
           
            <Route path="/Project1">
              <ShakesBeardNavbar />
              <Project1 />
              <MyFooter />
            </Route>

            <Route path="/Project">
              <ShakesBeardNavbar />
              <Project />
              <MyFooter />
            </Route>
            
             <Route exact path="/Product">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <Product />
                </div>
                <MyFooter />
              </Route>

              <Route exact path="/Market">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <Market />
                </div>
                <MyFooter />
              </Route>

              <Route path="/cart">
                <ShakesBeardNavbar />
                <div className="footerFix KosPadding">
                  <Cart />
                </div>
                <MyFooter />
              </Route>

              <Route path="/payment">
                <ShakesBeardNavbar />
                <div className="footerFix KosPadding">
                  <Payment />
                </div>
                <MyFooter />
              </Route>

              <Route path="/paycomplete">
                <ShakesBeardNavbar />
                <div className="footerFix KosPadding">
                  <Paycomplete />
                </div>
                <MyFooter />
              </Route>

              <Route path="/ordercheck">
                <ShakesBeardNavbar />
                <div className="footerFix KosPadding">
                  <OrderCheck />
                </div>
                <MyFooter />
              </Route>

              <Route path="/shoplist">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <ShopList />
                </div>
                <MyFooter />
              </Route>

              <Route path="/shopdetail">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <ShopDetail />
                </div>
                <MyFooter />
              </Route>

              <Route path="/memberupdate">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <MemberUpdate />
                </div>
                <MyFooter />
              </Route>

              <Route path="/passwordupdate">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <PasswordUpdate />
                </div>
                <MyFooter />
              </Route>

              <Route path="/preferencesetting">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <PreferenceSetting />
                </div>
                <MyFooter />
              </Route>

              <Route path="/favoriteslist">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <FavoritesList />
                </div>
                <MyFooter />
              </Route>

              <Route path="/reservationmake">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <ReservationMake />
                </div>
                <MyFooter />
              </Route>

              <Route path="/reservationperson">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <ReservationPerson />
                </div>
                <MyFooter />
              </Route>

              <Route path="/reservationcheck">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <ReservationCheck />
                </div>
                <MyFooter />
              </Route>

              <Route path="*">
                <ShakesBeardNavbar />
                  <div className="footerFix">
                    <NotFoundPage />
                  </div>
                <MyFooter />
              </Route>
           
          </Switch>
        </main>
        
    </></Router>
  );
}

export default App;