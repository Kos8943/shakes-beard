import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Cates from '../components/Cates'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

function ShopList(props) {
  console.log('Shoplist', props)
  return (
    <>
      <Breadcrumb />
      <div className="shops container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-3">
            <CatesAside />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-9">
            <Banner />
            <Cates />
            <div className="cardGroup">
              <Cards />
              <Cards />
              <Cards />
            {/* </div>
            <div className="cardGroup"> */}
              <Cards />
              <Cards />
              <Cards />
            </div>
          <Pagination />
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

export default ShopList
