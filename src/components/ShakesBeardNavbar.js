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
import { NavLink,Router, Route, Link, Switch, Redirect } from "react-router-dom";

function ShakesBeardNavbar(props) {
  const { isAuth, setIsAuth,addCartCount,setAddCartCount } = props;
  

  return (
    <>
      <Headroom>
      <Navbar expand="lg" className="navBarcolor logoset position">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbarFlex d-flex justify-content-between">
              <Nav.Link
                as={NavLink}
                to="/homepage"

                className="navBarFontSize"
              >
                首頁
              </Nav.Link>
              <Nav.Link as={NavLink} to="/product" className="navBarFontSize">
                產品列表
              </Nav.Link>
              <Nav.Link as={NavLink} to="/Path_GiftBox" className="navBarFontSize">
                客製化禮盒
              </Nav.Link>
              <Navbar.Brand as={NavLink} to="/homepage" className="logoFont">
                logo
              </Navbar.Brand>

              <Nav.Link as={NavLink} to="/homepage">
                <img src={Logo} className="logo"></img>
              </Nav.Link>

              <Nav.Link as={NavLink} to="/ShopList" className="navBarFontSize">
                商家預約
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/memberoption"
                className="navBarFontSize"
              >
                我的帳戶
              </Nav.Link>
              <div className="loginCartArea d-flex">
                {/* <div className="loginCartArea"> */}
                {/* <button className="loginBtn" href="lognin">登入</button>
      <button className="cartBtn"><img src={Cart} style={{width:"30px", height:'30px'}}/></button> */}
                <Nav.Link
                  href="/login"
                  className="navBarFontSize"
                  onClick={() =>{
                  if(isAuth === true){
                    setIsAuth(false);
                    localStorage.removeItem("data")
                    localStorage.removeItem("auth")
                  } }}
                >
                  {isAuth ? "登出" : "登入"}
                </Nav.Link>
                {/* <Nav.Link as={NavLink} to="/login" className="navBarFontSize" >登入</Nav.Link> */}
                <Nav.Link as={NavLink} to="/cart" className="navBarFontSize">
                  <img src={Cart} style={{ width: "30px", height: "30px" }} />
                </Nav.Link>
              </div>
              <div className="addCartCount" style={{borderRadius:"50%",backgroundColor:'#f25d50',height:'20px',width:'20px',textAlign:'center',paddingTop:"1px",fontSize:".5rem",position:'absolute',left:'82.5%',color:'#ffffff'}}>
              {addCartCount}
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
