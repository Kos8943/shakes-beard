import React,{useState} from 'react'
import { Nav,Form } from 'react-bootstrap'

function CatesAside(props) {
  console.log('CatesAside', props)
  const [category, setCategory] = useState("所有商家");

  return (
    <>
        <Form.Group className="searchForm col-10">
          <Form.Row>
            <Form.Control type="text" className="col-10 col-sm-10 col-md-9"></Form.Control>
            <Form.Label className="p-1 mb-0 col-2 col-sm-2 col-md-3">
              {/* <a href="#"> */}
                <svg xmlns="https://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a69981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" focusable="false" role="img"><title>Search</title><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
              {/* </a> */}
            </Form.Label>
          </Form.Row>
        </Form.Group>
        <Nav className="sideNav">
          <Nav.Link href="/shopdetail" className={`${category === "所有商家" ? "active" : ""}`} onClick={() => { setCategory("所有商家"); }}>所有商家</Nav.Link>
          <Nav.Link href="/shopdetail?" className={`${category === "特價優惠" ? "active" : ""}`} onClick={() => { setCategory("特價優惠"); }}>特價優惠</Nav.Link>
          <Nav.Link href="/shopdetail?" eventKey="link-1" className={`${category === "男士理髮" ? "active" : ""}`} onClick={() => { setCategory("男士理髮"); }}>男士理髮</Nav.Link>
          <Nav.Link href="/shopdetail?" eventKey="link-2" className={`${category === "男士修容" ? "active" : ""}`} onClick={() => { setCategory("男士修容"); }}>男士修容</Nav.Link>
          <Nav.Link href="/shopdetail?" eventKey="link-3" className={`${category === "男士造型" ? "active" : ""}`} onClick={() => { setCategory("男士造型"); }}>男士造型</Nav.Link>
          <Nav.Link href="/shopdetail?" eventKey="link-4" className={`${category === "商家位置" ? "active" : ""}`} onClick={() => { setCategory("商家位置"); }}>商家位置</Nav.Link>
        </Nav>
    </>
  )
}

export default CatesAside
