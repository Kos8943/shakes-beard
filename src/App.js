import React, { useState, useEffect } from "react";
import "./App.css";
import ShakesBeardNavbar from "./components/ShakesBeardNavbar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HeroPage from "./chad/HeroPage";
import Sid from "./Sid";
import ScrollUp from "react-scroll-up";


import firebase from "firebase";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



//以下import個人頁面

import HomePage from "./chad/HomePage";
import Product from "./hsuan/pages/Product";
import Project1 from "./hsuan/pages/Project1";
import Project from "./hsuan/pages/Project";
import Cart from "./kos/pages/Cart";
import ShopList from "./chen/pages/ShopList";
import ShopDetail from "./chen/pages/ShopDetail";
import Reservation from "./chen/pages/Reservation";
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
import LogIn2 from "./yen/LogIn2";
import SignUp from "./yen/SignUp";
import MemberOption from "./yen/MemberOption";
import Payment from "./kos/pages/Payment";
import Paycomplete from "./kos/pages/Paycomplete";
import orderCheck from "./kos/pages/OrderCheck";
import OrderCheck from "./kos/pages/OrderCheck";
import TopArrow from "./icon/top-arrow.jpg";
import { set } from "animejs";
import InfoSection from "./chen/components/InfoSection";
import TryLocalstrage from "./kos/pages/TryLocalstrage";



function App() {
  // localStorage.setItem('auth', false)
  const auth = JSON.parse(localStorage.getItem("auth"));

  // 登出/登入狀態
  const [isAuth, setIsAuth] = useState(auth);
  const [authAccount, setAuthAccount] = useState();
  const [authPassword, setAuthPassword] = useState();
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <>
        <main role="main">
          <ScrollUp showUnder={150}>
            <img src={TopArrow} class="scrolltotop d-lg-block d-none"></img>
          </ScrollUp>

          <Switch>
            <Route exact path="/">
              <HeroPage isAuth={isAuth} />
            </Route>

            <Route exact path="/homepage">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <HomePage isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_GiftBox">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_GiftBox isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_Budget">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_Budget isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseRazor">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_ChooseRazor isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseBrush">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_ChooseBrush />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseStand">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_ChooseStand />
              <MyFooter />
            </Route>

            <Route path="/Path_Color">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_Color />
              <MyFooter />
            </Route>

            <Route path="/Path_Finish">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Func_Finish />
              <MyFooter />
            </Route>

            <Route path="/login">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <LogIn
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                account={account}
                setAccount={setAccount}
                password={password}
                setPassword={setPassword}
              />
              <MyFooter />
            </Route>




            <Route path="/login2">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <LogIn2
                isAuth={isAuth}
                setIsAuth={setIsAuth}
                account={account}
                setAccount={setAccount}
                password={password}
                setPassword={setPassword}
              />
              <MyFooter />
            </Route>











            <Route path="/signup">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <SignUp isAuth={isAuth} setIsAuth={setIsAuth} />
              <MyFooter />
            </Route>

            <Route path="/Project1">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Project1 />
              <MyFooter />
            </Route>

            {/* <Route path="/Project1/:sid?">
              <ShakesBeardNavbar/>
              <InfoSection />
              <MyFooter />
            </Route> */}

            <Route path="/Project/:sid?">
              <ShakesBeardNavbar />
              <Project />
              <MyFooter />
            </Route>

            <Route path="/Project">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <Project />
              <MyFooter />
            </Route>

            <Route exact path="/Product">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix">
                <Product />
              </div>
              <MyFooter />
            </Route>

            {/* <Route exact path="/Market">
              <ShakesBeardNavbar />
              <div className="footerFix">
                <Market />
              </div>
              <MyFooter />
            </Route> */}

            <Route path="/cart">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix KosPadding">
                <Cart />
              </div>
              <MyFooter />
            </Route>

            <Route path="/payment">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix KosPadding">
                <Payment />
              </div>
              <MyFooter />
            </Route>

            <Route path="/paycomplete">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix KosPadding">
                <Paycomplete />
              </div>
              <MyFooter />
            </Route>

            <Route path="/trylocal">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix KosPadding">
                <TryLocalstrage />
              </div>
              <MyFooter />
            </Route>

            <Route path="/ordercheck">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix KosPadding">
                <OrderCheck />
              </div>
              <MyFooter />
            </Route>

            <Route path="/shoplist">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              {/* <div className="footerFix"> */}
                <ShopList />
              {/* </div> */}
              <MyFooter />
            </Route>

            <Route path="/shopdetail/:sid?">
              <ShakesBeardNavbar />
              <div className="footerFix KosPadding">
                <ShopDetail />
              </div>
              <MyFooter />
            </Route>

            <Route path="/memberoption">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="memFooterFix ">
                <MemberOption
                  isAuth={isAuth}
                  setIsAuth={setIsAuth}
                  authAccount={authAccount}
                  setAuthAccount={setAuthAccount}
                  authPassword={authPassword}
                  setAuthPassword={setAuthPassword}
                  account={account}
                  setAccount={setAccount}
                  password={password}
                  setPassword={setPassword}
                />
              </div>
              <MyFooter />
            </Route>
            



            <Route path="/reservation">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix">
                <Reservation />
              </div>
              <MyFooter />
            </Route>

            <Route path="/reservationperson">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix">
                <ReservationPerson />
              </div>
              <MyFooter />
            </Route>

            <Route path="/reservationcheck">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix">
                <ReservationCheck />
              </div>
              <MyFooter />
            </Route>

            <Route path="*">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} />
              <div className="footerFix">
                <NotFoundPage />
              </div>
              <MyFooter />
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
}

export default App;
