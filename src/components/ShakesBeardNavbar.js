import React from 'react'

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
      <Nav.Link href="#link" className="navBarFontSize">客製化禮品</Nav.Link>
      <Navbar.Brand href="#home">logo</Navbar.Brand>
      <Nav.Link href="#link" className="navBarFontSize">客製化禮品</Nav.Link>
      <Nav.Link href="#link" className="navBarFontSize">我的帳戶</Nav.Link>
      <div className="loginCartArea">
      <button className="loginBtn">登入</button>
      <button><img src="../icon/cart.png"/></button>
      </div>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  )
}

export default ShakesBeardNavbar