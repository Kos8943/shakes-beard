import React, { useState, useEffect } from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { withRouter,Link } from 'react-router-dom'

function InfoSection(props) {
  console.log('InfoSection', props)
  const shopid = props.match.params.shopid
  console.log('props.match.params',props.match.params)
  console.log('shopid',shopid)

  const [shopName, setShopName] = useState('')
  const [shopTag, setShopTag] = useState('')
  const [shopPlace, setShopPlace] = useState('')
  const [shopAddr, setShopAddr] = useState('')
  const [shopIntro, setShopIntro] = useState('')
  const [dataIsExist, setDataIsExist] = useState(true)

  async function getShopFromServer(){
    console.log('getShopFromServer',shopid)
    // json-db
    const url = 'http://localhost:3000/shop/'+ shopid
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

    if(!data.id){
      setDataIsExist(false)
      console.log('no data.id')
      return
    }

    setShopName(data.name)
    setShopTag(data.tag)
    setShopPlace(data.place)
    setShopAddr(data.address)
    setShopIntro(data.intro)
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

  const display=(
  <>
    <img
      alt="infosection-img"
      width={350}
      className="col-sm-12 col-md-6 mt-3"
      src={require('../img/card01.jpg')} 
    />
    {/* <div className="test2"></div>
    <div className="test2"></div>
    <div className="test2"></div> */}
   <div className="info col-12 col-sm-12 col-md-5 mt-3">
      <h4 className="info-title">{shopName}</h4>
      <Badge pill variant="secondary" className="mr-1">
        {shopTag}
      </Badge>
      <Badge pill variant="secondary" className="mr-1">
        {shopPlace}
      </Badge>
      <p className="mt-3">商家編號: 
        <span>{shopid}</span>
      </p>
      <p className="mt-3">電話:  02-27375832</p>
      <p>地址: 
        <span>{shopAddr}</span>
      </p>
      <div className="mb-3 openday">
        營業時間: 
        <select className="opendaySelect m-1">
          <option value="星期一">星期一</option>
          <option value="星期二">星期二</option>
          <option value="星期三">星期三</option>
          <option value="星期四">星期四</option>
          <option value="星期五">星期五</option>
          <option value="星期六">星期六</option>
          <option value="星期日">星期日</option>
        </select>
        <span className="col p-1">17:00 - 21:00</span>
      </div>
      <p>商家簡介:<br/>
        <span>{shopIntro}</span>
      </p>
      <p>提供服務:
      <div className="d-flex">
          <Badge pill variant="secondary" className="mr-1">理髮</Badge>
          <Badge pill variant="secondary" className="mr-1">修護</Badge>
          <Badge pill variant="secondary" className="mr-1">造型</Badge>
      </div>
      </p>
    </div>
  </>)

  return (
    <>{display}</>
  )
}

export default withRouter(InfoSection)
