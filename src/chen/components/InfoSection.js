import React, { useState, useEffect } from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { withRouter,Link } from 'react-router-dom'
import Datetime from 'react-datetime'
import "react-datetime/css/react-datetime.css";

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
  const [shopAvatar, setShopAvatar] = useState('')
  const [shopImg1, setShopImg1] = useState('')
  const [shopImg2, setShopImg2] = useState('')
  const [shopImg3, setShopImg3] = useState('')

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
    setShopAvatar(data[i].shop_avatar)
    setShopImg1(data[i].shop_img1)
    setShopImg2(data[i].shop_img2)
    setShopImg3(data[i].shop_img3)
    setShopId(data[i].shop_id)
    setShopTag(data[i].shop_cate_tag)
    setShopPlace(data[i].shop_place_tag)
    setShopAddr(data[i].shop_address)
    setShopIntro(data[i].shop_intro)
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

  function clickImg(event) {
    console.log("event.target",event.target.getAttribute('value'));
    let value = event.target.getAttribute('value');
    if (value == 1) {
      console.log('img1')
      let tmp = shopAvatar;
      setShopAvatar(shopImg1)
      setShopImg1(tmp)
    } else if (value == 2) {
      console.log('img2')
      let tmp = shopAvatar;
      setShopAvatar(shopImg2)
      setShopImg2(tmp)
    } else if (value == 3) {
      console.log('img3')
      let tmp = shopAvatar;
      setShopAvatar(shopImg3)
      setShopImg3(tmp)
    }
  }

  const display=(
  <>
    <div className="container">
     <div className="row">
      <div 
      className="col-12 col-sm-12 col-md-6"
      onClick={(event)=>clickImg(event)}
      >
        <img
            alt="infosection-img"
            width={400}
            className="mt-3"
            // className="col-sm-12 col-md-6 mt-3"
            src={`/imgs/shops/${shopAvatar}`}
          />
        <div className="mt-1 d-flex">
          <img
            className="test3 selectedImg p-0" 
            value="0"
            src={`/imgs/shops/${shopAvatar}`}
          />
          <img
            className="test3" 
            value="1"
            src={`/imgs/shops/${shopImg1}`}
          />
          <img
            className="test3" 
            value="2"
            src={`/imgs/shops/${shopImg2}`}
          />
          <img
            className="test3" 
            value="3"
            src={`/imgs/shops/${shopImg3}`}
          />
          {/* <div className="test3">d</div>
          <div className="test3">e</div> */}
        </div>
      </div>
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
              <p className="col p-0">提供服務:</p>
            </div>
            <div className="col-9">
              <h5 className="col p-0">
                <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                <Badge pill variant="secondary" className="mr-1">修護</Badge>
                <Badge pill variant="secondary" className="mr-1">造型</Badge>
              </h5>
            </div>
            <div className="col-3">
              <p className="col p-0">預約時間:</p>
            </div>
            <div className="col-9 mb-3">
              <Datetime/>
              {/* <div className="test1"><Datetime/></div> */}
            </div>
            <p className="col-12">注意事項: 如取消預約，請於預約日三天前聯絡。謝謝</p>
          </div>
          <div className="row pl-3">
            <Link to="/reservation" className="btn goReserve">
              立即預約
            </Link>
          </div>
        </div>
     </div>
     {/* <div className="row mt-1 col-sm-12 col-md-6">
      <div className="test3">a</div>
      <div className="test3">b</div>
      <div className="test3">c</div>
      <div className="test3">d</div>
      <div className="test3">e</div>
     </div> */}
    </div>
    
    
  </>)

  return (
    <>{display}</>
  )
}

export default withRouter(InfoSection)
