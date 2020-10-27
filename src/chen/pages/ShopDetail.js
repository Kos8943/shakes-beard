import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
// import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import InfoSection from '../components/InfoSection'
import Description from '../components/Description'
import Recommend from '../components/Recommend'
import { Table,Tabs,Tab } from 'react-bootstrap'  

function ShopDetail(props) {
  console.log('ShopDetail', props)
  return (
    <>
      <Breadcrumb />
      {/* <Carousel /> */}
      <h3>商家頁面</h3>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <CatesAside />
          </div>
          {/* cardGroup */}
          <div className="col-9 cardGroup mb-5">
            <InfoSection/>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
              {/* <Services/> */}
              <Description/>
              <Description/>
              <strong className="d-inline-block my-2">注意事項</strong>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              <Recommend/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopDetail
