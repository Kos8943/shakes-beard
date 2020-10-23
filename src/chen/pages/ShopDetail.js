import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
// import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Search from '../components/Search'

function ShopList(props) {
  console.log('Shoplist', props)
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
          <div className="col-9 cardGroup">{/* 詳細內容 */}</div>
        </div>
        {/* <Pagination /> */}
      </div>
    </>
  )
}

export default ShopList
