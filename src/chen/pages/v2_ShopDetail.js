import React, { useState, useEffect } from 'react'
import { Link, Switch, useParams, Redirect, withRouter  } from 'react-router-dom'
import Breadcrumb from '../components/Breadcrumb'
import CatesAside from '../components/CatesAside'
import InfoSection from '../components/InfoSection'
import Description from '../components/Description'
import Recommend from '../components/Recommend'
import { Dropdown, Badge } from 'react-bootstrap'  
import '../styles/shops.scss'

function ShopDetail(props) {
  console.log('ShopDetail', props)
  const shopid = props.match.params.shopid
  console.log('props.match.params',props.match.params)
  console.log('shopid',shopid)
  
  const [shopName, setShopName] = useState('')
  const [shopTag, setShopTag] = useState('')
  const [shopPlace, setShopPlace] = useState('')

  const [dataIsExist, setDataIsExist] = useState(true)

  // param問題?
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
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

  const display=(
    <>
      <Breadcrumb />
      <div className="container shopdetail">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <CatesAside />
          </div>
          <div className="cardGroup mb-5 col-12 col-sm-12 col-md-9 col-lg-10">
            {/* <InfoSection/> */}
            <img
            alt="detail-img"
            width={350}
            className="col-sm-12 col-md-6 mt-3"
            src={require('../img/card01.jpg')} 
          />
          {/* <div className="test2"></div>
          <div className="test2"></div>
          <div className="test2"></div> */}
         <div className="info col-12 col-sm-12 col-md-5 mt-3">
            <h4 className="">{shopName}</h4>
            <Link to="#" className="card-link">
              {shopTag}
            </Link>
             <Link to="#" className="card-link">
              {shopPlace}
            </Link>
            <p className="mt-3">商家編號: 
            <span>{shopid}</span></p>
            <p className="mt-3">電話:  02-27375832</p>
            <p>地址:  106台北市大安區敦化南路二段265巷6號2樓</p>
            <div className="">
              <Dropdown>
              營業時間: 
              <Dropdown.Toggle id="dropdown-basic" className="day m-0 col" variant="">
                星期一
              </Dropdown.Toggle>
                <Dropdown.Menu>
                 <Dropdown.Item>星期二</Dropdown.Item>
                 <Dropdown.Item>星期三</Dropdown.Item>
                 <Dropdown.Item>星期四</Dropdown.Item>
                 <Dropdown.Item>星期五</Dropdown.Item>
                 <Dropdown.Item>星期六</Dropdown.Item>
                 <Dropdown.Item>星期日</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <span className="col">17:00 - 21:00</span>
            </div>
            <p>商家簡介:<br/>台灣男仕barbershop 第一品牌，創業六年以來，以美麗的理髮廳空間與台灣男仕理容文化薪傳聞名。</p>
            <p>提供服務:</p>
            <div className="d-flex">
              <h5>
                <Badge pill variant="secondary">理髮</Badge>
              </h5>
              <h5>
                <Badge pill variant="secondary">修護</Badge>
              </h5>
              <h5>
                <Badge pill variant="secondary">造型</Badge>
              </h5>
            </div>
          </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2"></div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
              <Description/>
              <Description/>
              <strong className="d-inline-block my-2">注意事項</strong>
              <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
              {/* map */}    
              <Link to="#" className="mt-4 btn goReserve">
                立即預約
              </Link>
              <Recommend/>
          </div>
        </div>
      </div>
      <div id="stop" className="helpdesk">
        <span><Link to="">客服</Link></span>
      </div>
    </>
  )

  return (
    <>{display}</>
  )
}

export default withRouter(ShopDetail)
