import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import CatesAside from '../components/CatesAside'
import InfoSection from '../components/InfoSection'
import Description from '../components/Description'
import Recommend from '../components/Recommend'
import { Table,Tabs,Tab } from 'react-bootstrap'  
import '../styles/shops.scss'

function ShopDetail(props) {
  console.log('ShopDetail', props)
  return (
    <>
      <Breadcrumb />
      <div className="container shopdetail">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <CatesAside />
          </div>
          <div className="cardGroup mb-5 col-12 col-sm-12 col-md-9 col-lg-10">
            <InfoSection/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2"></div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
              <Description/>
              <Description/>
              <strong className="d-inline-block my-2">注意事項</strong>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              {/* map */}    
              <Link to="#" className="mt-4 btn goReserve">
                立即預約
              </Link>
              <Recommend/>
          </div>
        </div>
      </div>
      <div id="stop" className="scrollTop">
        <span><a href="">向上</a></span>
      </div>
      <div id="stop" className="helpdesk">
        <span><a href="">客服</a></span>
      </div>
    </>
  )
}

export default ShopDetail
