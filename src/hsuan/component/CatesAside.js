import React from 'react'
import { Nav,Form,InputGroup } from 'react-bootstrap'
import '../../styles/custom.scss'

function CatesAside(props) {
  console.log('CatesAside', props)
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
              <Form.Control type="text"></Form.Control>
              <Form.Label className="d-flex align-items-center">
                <a className="text-muted" href="#">
                  <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                </a>
              </Form.Label>
            </Form.Row>
          {/* 
            <InputGroup className="mb-2">
              <Form.Control type="text"></Form.Control>
              <InputGroup.Append>
                <InputGroup.Text>
                  <a className="text-muted" href="#">
                    <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                  </a>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup> */}
        </Form.Group>
        <Nav className="flex-column">
          <h3>分類</h3>
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
          {/* <Nav.Link href="#">特價優惠</Nav.Link>
          <Nav.Link eventKey="link-1">服務分類</Nav.Link>
          <Nav.Link eventKey="link-2">活動分類</Nav.Link>
          <Nav.Link eventKey="link-3">地區分類</Nav.Link> */}
        </Nav>
      </aside>
    </>
  )
}

export default CatesAside
