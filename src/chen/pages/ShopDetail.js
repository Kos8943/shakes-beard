import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect, withRouter  } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import InfoSection from '../components/InfoSection'
import Description from '../components/Description'
import Recommend from '../components/Recommend'
import '../styles/shops.scss'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

function ShopDetail(props) {
  // console.log('ShopDetail', props)
  // const shopid = props.match.params.shopid
  // console.log('props.match.params',props.match.params)
  // console.log('shopid',shopid)

  return (
  <>
    <div className="shops container">
      <div className="row">
        <Breadcrumb />
      </div>
      <div className="row mb-5">
        <InfoSection/>
      </div>
      <div className="row pl-3">
        <div>
          <Description/>
        </div>
      </div>
      <div className="row">
        <div className="col">
         
          <strong className="d-inline-block my-2">注意事項</strong>
          <p className="card-text mb-auto">This is a wider card with supporting text belowasanatural lead-in to additional content.</p>
          {/* map */}    
          <Link to="/reservation" className="mt-4 btn goReserve mx-auto d-flex justify-self-center justify-items-center">
            立即預約
          </Link>
        </div>
      </div>
      <div className="row">
        <div>
          <Recommend/>
        </div>
      </div>
    </div>
  </>
  )
}

export default withRouter(ShopDetail)
