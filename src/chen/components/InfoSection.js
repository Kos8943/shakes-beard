import React, { useState, useEffect } from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { withRouter,Link } from 'react-router-dom'

function InfoSection(props) {
  console.log('InfoSection', props)
  const sid = props.match.params.sid
  console.log('props.match.params',props.match.params)
  console.log('sid',sid)

  const [shopName, setShopName] = useState('')
  const [shopid, setShopId] = useState('')
  const [shopTag, setShopTag] = useState('')
  const [shopPlace, setShopPlace] = useState('')
  const [shopAddr, setShopAddr] = useState('')
  const [shopIntro, setShopIntro] = useState('')
  const [dataIsExist, setDataIsExist] = useState(true)

  async function getShopFromServer(){
    console.log('getShopFromServer',sid)
    // json-db
    // const url = 'http://localhost:3000/try-shop/'+ shopid
    const url = 'http://localhost:3000/try-shop'
    console.log("url",url)

    const request = new Request(url, {
      method:'GET',
      headers:new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('response',response)
    console.log("data",data)
    
    const i = [sid]-1
    console.log("[sid]-1",i)
    console.log("data[i]",data[i])// index 改sid?

    if(!data[i].sid){
      setDataIsExist(false)
      console.log('no data[i].sid')
      return
    }

    setShopName(data[i].shop_name)
    setShopId(data[i].shop_id)
    setShopTag(data[i].shop_cate_tag)
    setShopPlace(data[i].shop_place_tag)
    setShopAddr(data[i].shop_address)
    setShopIntro(data[i].shop_intro)
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

  const display=(
  <>
    <div className="container">
     <div className="row">
      <img
          alt="infosection-img"
          width={350}
          className="col-sm-12 col-md-6 mt-3"
          src={require('../img/card01.jpg')} 
        />
      <div className="info col-12 col-sm-12 col-md-5 mt-3">
          <h4 className="info-title">{shopName}</h4>
          <h5>
            <Badge pill variant="secondary" className="mr-1 cate-tag">
              {shopTag}
            </Badge>
            <Badge pill variant="secondary" className="mr-1">
              {shopPlace}
            </Badge>
          </h5>
          <div className="row info-head">
            <div className="col-3">
              <p>商家編號:</p>
              <p>電話:</p>
              <p>地址:</p>
            </div>
            <div className="col-9">
              <p>{shopid}</p>
              <p>02-27375832</p>
              <p>{shopAddr}</p>
            </div>
          </div>
          <div className="row info-head">
            <div className="col-3">
              <p>商家簡介:</p>
            </div>
            <div className="col-9">
              <p>{shopIntro}</p>
            </div>
          </div>
          <div className="row info-head">
            <div className="col-3">
              <p className="col pl-0">提供服務:</p>
            </div>
            <div className="col-9">
              <h5 className="col pl-0">
                <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                <Badge pill variant="secondary" className="mr-1">修護</Badge>
                <Badge pill variant="secondary" className="mr-1">造型</Badge>
              </h5>
            </div>
          </div>
        </div>
     </div>
     <div className="row mt-1 col-sm-12 col-md-6">
      <div className="test3"></div>
      <div className="test3"></div>
      <div className="test3"></div>
      <div className="test3"></div>
      <div className="test3"></div>
     </div>
    </div>
    
    
  </>)

  return (
    <>{display}</>
  )
}

export default withRouter(InfoSection)
