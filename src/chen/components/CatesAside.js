import React from 'react'
import { Nav,Form,InputGroup } from 'react-bootstrap'
import '../styles/shops.scss'

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
                  <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                </a>
              </Form.Label>
            </Form.Row>
          {/* 
            <InputGroup className="mb-2">
              <Form.Control type="text"></Form.Control>
              <InputGroup.Append>
                <InputGroup.Text>
                  <a className="text-muted" href="#">
                    <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
                  </a>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup> */}
        </Form.Group>
        <Nav className="flex-column">
          <h3>分類</h3>
          <Nav.Link href="#">特價優惠</Nav.Link>
          <Nav.Link eventKey="link-1">服務分類</Nav.Link>
          <Nav.Link eventKey="link-2">活動分類</Nav.Link>
          <Nav.Link eventKey="link-3">地區分類</Nav.Link>
        </Nav>
      </aside>
    </>
  )
}

export default CatesAside
