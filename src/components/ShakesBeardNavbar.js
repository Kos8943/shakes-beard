import React from 'react'
import Cart from '../icon/shopping-cart.svg'

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

function ShakesBeardNavbar() {
  return (
    <>
     <Navbar expand="lg" className="navBarcolor" >
  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav  className="navbarFlex d-flex justify-content-between">
      <Nav.Link href="#home" className="navBarFontSize">首頁</Nav.Link>
      <Nav.Link href="#link" className="navBarFontSize">產品列表</Nav.Link>
      <Nav.Link href="giftBox" className="navBarFontSize">客製化禮盒</Nav.Link>
      <Navbar.Brand href="#home">logo</Navbar.Brand>
      <Nav.Link href="#link" className="navBarFontSize">商家預約</Nav.Link>
      <Nav.Link href="#link" className="navBarFontSize">我的帳戶</Nav.Link>
      <div className="loginCartArea d-flex">
      {/* <div className="loginCartArea"> */}
      {/* <button className="loginBtn" href="lognin">登入</button>
      <button className="cartBtn"><img src={Cart} style={{width:"30px", height:'30px'}}/></button> */}
      <Nav.Link href="lognin" className="navBarFontSize" >登入</Nav.Link>
      <Nav.Link href="lognin" className="navBarFontSize" ><img src={Cart} style={{width:"30px", height:'30px'}}/></Nav.Link>
      </div>
      {/* </div> */}
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default ShakesBeardNavbar