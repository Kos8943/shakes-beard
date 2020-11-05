import React from "react";
import "./Project.css";
// import original from './icon/original.jpg';
// import Breadcrumb from './component/Breadcrumb'
// import Pagination from './component/Pagination'
import CatesAside from './component/CatesAside'
import Cards from './component/Cards'
// import Sorts from './component/Sorts'
// import Cates from './component/Cates'
import Banner from './component/Banner'
import {
  Container,
  Row,
  Col,
  Button,
  Navbar,
  Form,
  FormControl,
  Accordion,
  Card,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Market() {
    return (
      <>
       <Row>
     
    </Row>
        <Container>
        <Row>
      {/* <Col><div className="form-group">
       <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="搜尋商品"
            ></input>
            <div className="searchicon">
             <img src={search}></img></div></div>
             <div class="col-md-3">
          <div className="sort">
            <h3>分類</h3>
          </div></div></Col> */}
      <Col></Col>
             {/* <Col xs={6} md={4}>
             <div className="original">
             <img src={original}></img></div>
      </Col> */}
    </Row>
             
      </Container>
       
             {/* <Carousel /> */}
        <div className="container">
          <div className="row">
            <div className="col-3">
            
             
             
            </div>
            <div className="col-9">
              {/* <Banner /> */}
              {/* <Cards /> */}
               <Cards />
              <div className="cardGroup">
               
              </div>
              <div className="cardGroup">
               
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-3"></div>
            <div className="col-9 cardGroup">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div> */}
          {/* <Pagination /> */}
        </div>
      </>
    );
  }
  
  export default Market;
  