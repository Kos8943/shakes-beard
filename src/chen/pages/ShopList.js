import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Sorts from '../components/Sorts'
import Cates from '../components/Cates'
import Banner from '../components/Banner'

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
            <CatesAside />
          </div>
          <div className="col-9">
            <Banner />
            <Cates />
            <Sorts />
            <div className="cardGroup">
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="cardGroup">
              <Cards />
              <Cards />
              <Cards />
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-3"></div>
          <div className="col-9">
            <Cates />
            <Sorts />
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-3"></div>
          <div className="col-9 cardGroup">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div> */}
        <Pagination />
      </div>
    </>
  )
}

export default ShopList
