import React, {Component} from 'react'
import Cart from '../icon/shopping-cart.svg'
import Logo from '../icon/logo2.svg'
import Headroom from 'react-headroom'
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
} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

function ShakesBeardNavbar(props) {
  return (
    <>
    <Headroom>
     <Navbar expand="lg" className="navBarcolor logoset" >
  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className="navbarFlex d-flex justify-content-between">
      <Nav.Link  as={NavLink} to="/homepage" href="#home" className="navBarFontSize">首頁</Nav.Link>
      <Nav.Link  as={NavLink} to="/product" className="navBarFontSize">產品列表</Nav.Link>
      <Nav.Link href="Path_GiftBox" className="navBarFontSize">客製化禮盒</Nav.Link>
      <Navbar.Brand href="#home" className="logoFont">logo</Navbar.Brand>
      
      
    
      <Nav.Link as={NavLink} to="/homepage">
       <img src={Logo} className="logo"></img>
       </Nav.Link>
      
      
      <Nav.Link href="ShopList" className="navBarFontSize">商家預約</Nav.Link>
      <Nav.Link as={NavLink} to="/memberoption" className="navBarFontSize">我的帳戶</Nav.Link>
      <div className="loginCartArea d-flex">
      {/* <div className="loginCartArea"> */}
      {/* <button className="loginBtn" href="lognin">登入</button>
      <button className="cartBtn"><img src={Cart} style={{width:"30px", height:'30px'}}/></button> */}
      <Nav.Link href="login" className="navBarFontSize" >登入</Nav.Link>
      {/* <Nav.Link as={NavLink} to="/login" className="navBarFontSize" >登入</Nav.Link> */}
      <Nav.Link as={NavLink} to="/cart" className="navBarFontSize" ><img src={Cart} style={{width:"30px", height:'30px'}}/></Nav.Link>
      </div>
      {/* </div> */}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
</Headroom>
    </>
  )
}

export default ShakesBeardNavbar