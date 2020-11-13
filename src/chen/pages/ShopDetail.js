import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect, withRouter  } from 'react-router-dom'
import BreadcrumbSecond from '../components/BreadcrumbSecond'
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
        <BreadcrumbSecond />
      </div>
      <div className="row mb-5">
        <InfoSection/>
      </div>
      <div className="row pl-3 mt-3">
        <div>
          <Description/>
        </div>
      </div>
     {/*  <div className="row">
        <div className="col">
          map 
        </div>
      </div> */}   
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
