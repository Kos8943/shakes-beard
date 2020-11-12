import React, {useState, useEffect} from 'react'
import { Link, withRouter } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Cates from '../components/Cates'
import '../styles/shops.scss' 

function ShopList(props) {
  console.log('Shoplist', props)
  
  return (
    <>
    <div className="shops container">
      <div className="row">
        <Breadcrumb />
      </div>
      <div className="row">
          <Cates />
          <div className="cardGroup">
            <Cards />
          </div>
      </div>
      <Pagination  className="justify-contents-center"/>
    </div>
    </>
  )
}

export default ShopList
