import React, { useState, useEffect } from "react";
import "./App.css";
import ShakesBeardNavbar from "./components/ShakesBeardNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HeroPage from "./chad/HeroPage";
import Sid from "./Sid";


//以下import個人頁面

import HomePage from "./chad/HomePage";
import Project from "./hsuan/Project";
import Market from "./hsuan/Market";
import Project1 from './hsuan/Project1'
import Cart from "./kos/pages/Cart";
import ShopList from "./chen/pages/ShopList";
import ShopDetail from "./chen/pages/ShopDetail";
import Reservation from "./chen/pages/Reservation";
import NotFoundPage from "./chen/pages/NotFoundPage";
import Func_GiftBox from "./zihyu/GiftBox";
import Func_Budget from "./zihyu/Budget";
import Func_ChooseRazor from "./zihyu/ChooseRazor";
import LogIn from "./yen/LogIn";
import SignUp from "./yen/SignUp";
import MemberUpdate from "./yen/MemberUpdate";
import Payment from "./kos/pages/Payment";


function App() {
  return (
    <Router>

    <>
   
   

      
        <main role="main">
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

             <Route exact path="/Project">
                <ShakesBeardNavbar />
                <div className="footerFix">
                  <Project />
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
                <div className="footerFix">
                  <Payment />
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

              <Route path="/reservation">
                <Reservation />
              </Route>

           
          </Switch>
        </main>
        
    </></Router>
  );
}

export default App;