import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Cates from '../components/Cates'
import Banner from '../components/Banner'
import '../styles/shops.scss' 

function ShopList(props) {
  console.log('Shoplist', props)
  return (
    <>
      <Breadcrumb />
      <div className="shops container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <CatesAside />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
            {/* <Banner /> */}
            <Cates />
            <div className="cardGroup">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div>
          <Pagination />
          </div>
        </div>
      </div>
      <div id="stop" className="helpdesk">
        <span><Link to="">客服</Link></span>
      </div>
    </>
  )
}

export default ShopList
