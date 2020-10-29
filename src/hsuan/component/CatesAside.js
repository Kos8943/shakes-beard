import React from "react";
import { Nav, Form, InputGroup } from "react-bootstrap";
import "../../styles/custom.scss";
import search from '../icon/search.svg';
function CatesAside(props) {
  console.log("CatesAside", props);
  return (
    <>
      {/* 
        <ul>
          <li>特價優惠</li>
          <li>服務分類</li>
          <li>活動分類</li>
          <li>地區分類</li>
        </ul> 
      */}
      <aside>
        <Form.Group controlId="searchForm">
          <Form.Row>
            <InputGroup classNam="mb-3">
              <Form.Control  type="text" placeholder="搜尋產品"></Form.Control>
            </InputGroup>
            <Form.Label className="d-flex align-items-center">
              <a className="text-muted" href="#">
              {/* <div className="searchicon">
           <img src={search}></img></div> */}
           
                    
           <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              </a>
            </Form.Label>
          </Form.Row>
          
         </Form.Group>
        
        {/* <Nav className="flex-column"> */}
        <h3>分類</h3>
        <div className="container ui-state-disabled">
          <ul id="product-menu">
            <li className="ui-state-disabled1">
              <div>優惠推薦</div>

              <ul>
                <div>本月優惠</div>
                <div>免運專區</div>
              </ul>
            </li>

            <li className="ui-state-disabled">
              <div>頭髮造型</div>

              <ul>
                <div>髮蠟</div>

                <div>梳子</div>
              </ul>
            </li>
            <li className="ui-state-disabled">
              <div>刮鬍修容</div>
              <ul>
                <div>刮鬍刀</div>
                <div>刮鬍刷</div>
                <div>直立架</div>
              </ul>{" "}
            </li>
            <li className="ui-state-disabled">
              <div>服飾配件</div>
              <ul>
                <div>帽子</div>

                <div>墨鏡</div>

                <div>領帶/領結</div>

                <div>領帶夾</div>

                <div>口袋巾</div>

                <div>袖扣</div>

                <div>皮帶</div>

                <div>鈔票夾</div>
              </ul>
            </li>
          </ul>
        </div>

        {/* <Nav.Link href="#">特價優惠</Nav.Link>
          <Nav.Link eventKey="link-1">服務分類</Nav.Link>
          <Nav.Link eventKey="link-2">活動分類</Nav.Link>
          <Nav.Link eventKey="link-3">地區分類</Nav.Link> */}
        {/* </Nav> */}
      </aside>
      
    </>
  );
}

export default CatesAside;
