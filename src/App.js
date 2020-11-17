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
import ShopPage from "./chen/pages/ShopPage";
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
  let cartCount;
  if (localStorage.getItem("cart")==null){
    cartCount=0;
  }else{
    cartCount = JSON.parse(localStorage.getItem("cart")).length;  
  }
  
  // 登出/登入狀態
  const [isAuth, setIsAuth] = useState(auth);
  const [authAccount, setAuthAccount] = useState();
  const [authPassword, setAuthPassword] = useState();
  const [account, setAccount] = useState();
  const [password, setPassword] = useState();
  const [addCartCount, setAddCartCount] = useState(cartCount)
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [addReserve, setAddReserve] = useState()

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
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <HomePage isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_GiftBox">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_GiftBox isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_Budget">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_Budget isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseRazor">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_ChooseRazor isAuth={isAuth} />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseBrush">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_ChooseBrush />
              <MyFooter />
            </Route>

            <Route path="/Path_ChooseStand">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_ChooseStand />
              <MyFooter />
            </Route>

            <Route path="/Path_Color">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_Color />
              <MyFooter />
            </Route>

            <Route path="/Path_Finish">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Func_Finish />
              <MyFooter />
            </Route>

            <Route path="/login">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
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
            <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
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
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <SignUp isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <MyFooter />
            </Route>

            <Route path="/Project1">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Project1 isAuth={isAuth} setIsAuth={setIsAuth} />
              <MyFooter />
            </Route>

            {/* <Route path="/Project1/:sid?">
              <ShakesBeardNavbar/>
              <InfoSection />
              <MyFooter />
            </Route> */}

            <Route path="/Project/:sid?">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Project setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <MyFooter />
            </Route>

            <Route path="/Project">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <Project setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <MyFooter />
            </Route>

            <Route exact path="/Product">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
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
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <Cart />
              </div>
              <MyFooter />
            </Route>

            <Route path="/payment">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <Payment />
              </div>
              <MyFooter />
            </Route>

            <Route path="/paycomplete">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <Paycomplete />
              </div>
              <MyFooter />
            </Route>

            <Route path="/trylocal">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <TryLocalstrage />
              </div>
              <MyFooter />
            </Route>

            <Route path="/ordercheck">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <OrderCheck />
              </div>
              <MyFooter />
            </Route>

            <Route path="/shoppage">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix">
                <ShopPage />
              </div>
              <MyFooter />
            </Route>

            <Route path="/shoplist">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding p-0">
                <ShopList />
              </div>
              <MyFooter />
            </Route>

            <Route path="/shopdetail/:sid?">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix KosPadding">
                <ShopDetail addReserve={addReserve} setAddReserve={setAddReserve}/>
              </div>
              <MyFooter />
            </Route>

            <Route path="/memberoption">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
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
            



            <Route path="/reservation/:sid?">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix">
                <Reservation isAuth={isAuth} setIsAuth={setIsAuth} addReserve={addReserve} setAddReserve={setAddReserve}/>
              </div>
              <MyFooter />
            </Route>

            <Route path="/reservationperson">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix">
                <ReservationPerson isAuth={isAuth} setIsAuth={setIsAuth} addReserve={addReserve} setAddReserve={setAddReserve}/>
              </div>
              <MyFooter />
            </Route>

            <Route path="/reservationcheck">
              <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/>
              <div className="footerFix">
                <ReservationCheck isAuth={isAuth} setIsAuth={setIsAuth} addReserve={addReserve} setAddReserve={setAddReserve}/>
              </div>
              <MyFooter />
            </Route>

            <Route path="*">
              {/* <ShakesBeardNavbar isAuth={isAuth} setIsAuth={setIsAuth} setAddCartCount={setAddCartCount} addCartCount={addCartCount}/> */}
              <div className="footerFix">
                <NotFoundPage />
              </div>
              {/* <MyFooter /> */}
            </Route>
          </Switch>
        </main>
      </>
    </Router>
  );
}

export default App;
