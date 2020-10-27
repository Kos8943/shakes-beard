import React from "react";
import "./Project.css";
import search from './icon/search.svg';
import original from './icon/original.jpg';
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

function Project() {
  return (
    <>
     <Row>
   
  </Row>
      <Container>
      <Row>
    <Col><div className="form-group">
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
        </div></div></Col>
    <Col></Col>
           <Col xs={6} md={4}>
           <div className="original">
           <img src={original}></img></div>
    </Col>
  </Row>
           
    </Container>
      <div class="container ui-state-disabled">
        <div class="col-md-3">
          <ul id="product-menu">
            <li class="ui-state-disabled1">
              <div>優惠推薦</div>
            </li>
        

            <ul>
              <li class="ui-state-disabled">
                <div>本月優惠</div>
              </li>
              <li>
                <div>免運專區</div>
              </li>
            </ul>
          

          <li class="ui-state-disabled">
            <div>頭髮造型</div>
          </li>
          <ul>
            <li class="ui-state-disabled">
              <div>髮蠟</div>
            </li>
            <li>
              <div>梳子</div>
            </li>
          </ul>
          <li class="ui-state-disabled">
            <div>刮鬍修容</div>
          </li>
          <ul>
            <li class="ui-state-disabled">
              <div>刮鬍刀</div>
            </li>
            <li>
              <div>刮鬍刷</div>
            </li>
            <li>
              <div>直立架</div>
            </li>
          </ul>
          <li class="ui-state-disabled">
            <div>服飾配件</div>
          </li>
          <ul>
            <li class="ui-state-disabled">
              <div>帽子</div>
            </li>
            <li>
              <div>墨鏡</div>
            </li>
            <li>
              <div>領帶/領結</div>
            </li>
            <li>
              <div>領帶夾</div>
            </li>
            <li>
              <div>口袋巾</div>
            </li>
            <li>
              <div>袖扣</div>
            </li>
            <li>
              <div>皮帶</div>
            </li>
            <li>
              <div>鈔票夾</div>
            </li>
          </ul>
        </ul></div>
      </div>
    </>
  );
}

export default Project;
