import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
// import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Search from '../components/Search'
import InfoSection from '../components/InfoSection'
import Description from '../components/Description'
import Recommend from '../components/Recommend'

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
            <Search />
          </div>
          <div className="col-9"></div>
        </div>
        <div className="row">
          <div className="col-3">
            <CatesAside />
          </div>
          {/* cardGroup */}
          <div className="col-9 cardGroup">
            <InfoSection/>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
              {/* <Services/> */}
              <Description/>
              <Description/>
              <Recommend/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopDetail
