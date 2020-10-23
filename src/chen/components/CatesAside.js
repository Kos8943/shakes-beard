import React from 'react'
import { Nav } from 'react-bootstrap'
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
        {/*  defaultActiveKey="/home"  */}
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
