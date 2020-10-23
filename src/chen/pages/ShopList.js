import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Sorts from '../components/Sorts'
import Search from '../components/Search'
// import Carousel from '../components/Carousel'

function ShopList(props) {
  console.log('Shoplist', props)
  return (
    <>
      <Breadcrumb />
      {/* <Carousel /> */}
      <h3>商家列表</h3>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Search />
          </div>
          <div className="col-9"></div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <Sorts />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <CatesAside />
          </div>
          <div className="col-9 cardGroup">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-9 cardGroup">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <Pagination />
      </div>
    </>
  )
}

export default ShopList
