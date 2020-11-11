import React, { Component } from "react";
import Cart from "../icon/shopping-cart.svg";
import Logo from "../icon/logo2.svg";
import Headroom from "react-headroom";
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import {
  NavLink,
  Router,
  Route,
  Link,
  Switch,
  Redirect,
} from "react-router-dom";

function ShakesBeardNavbar(props) {
  const { isAuth, setIsAuth } = props;

  return (
    <>
      <Headroom>
        <Navbar expand="lg" className="navBarcolor logoset">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbarFlex d-flex justify-content-between">
              <a href="/homepage" className="navBarFontSize">
                首頁
              </a>
              <a href="/product" className="navBarFontSize">
                產品列表
              </a>
              <a href="Path_GiftBox" className="navBarFontSize">
                客製化禮盒
              </a>
              <Navbar.Brand href="/homepage" className="logoFont">
                logo
              </Navbar.Brand>

              <a  href="/homepage">
                <img src={Logo} className="logo"></img>
              </a>

              <a href="/ShopList" className="navBarFontSize">
                商家預約
              </a>
              <a href="/memberoption" className="navBarFontSize">
                我的帳戶
              </a>
              <div className="loginCartArea d-flex">
                {/* <div className="loginCartArea"> */}
                {/* <button className="loginBtn" href="lognin">登入</button>
      <button className="cartBtn"><img src={Cart} style={{width:"30px", height:'30px'}}/></button> */}
                <Nav.Link
                  href="login"
                  className="navBarFontSize"
                  onClick={() => setIsAuth(false)}
                >
                  {isAuth ? "登出" : "登入"}
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="/login" className="navBarFontSize" >登入</Nav.Link> */}
                <Nav.Link as={NavLink} to="/cart" className="navBarFontSize">
                  <img src={Cart} style={{ width: "30px", height: "30px" }} />
                </Nav.Link>
              </div>
              {/* </div> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Headroom>
    </>
  );
}

export default ShakesBeardNavbar;
