import React, {useState, useEffect} from 'react'
import '../styles/shops.scss'
import Breadcrumb from '../components/Breadcrumb'
import Pagination from '../components/Pagination'
import CatesAside from '../components/CatesAside'
import Cards from '../components/Cards'
import Cates from '../components/Cates'
import Banner from '../components/Banner'
import { Link, withRouter } from 'react-router-dom'
import { Button, Badge } from 'react-bootstrap'  

function ShopList(props) {
  console.log('Shoplist', props)

  const [shops, setShops] = useState([])
  
  async function getShopsFromServer(){
    // setDataLoading(true)

    // json-db
    const url = 'http://localhost:3000/shop'

    const request = new Request(url, {
      method:'GET',
      headers:new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log("data",data)
    //console.log("response",response)
    setShops(data)
  }

  useEffect(()=>{
    getShopsFromServer()
  },[])

  const display=(
    <>
      <Breadcrumb />
      <div className="shops container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-3 col-lg-2">
            <CatesAside />
          </div>
          <div className="col-12 col-sm-12 col-md-9 col-lg-10">
            {/* <Banner /> */}
            <Cates />
            <div className="cardGroup">
            {shops.map((value, index)=>{
                return(
                <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-0" key={index}>
                  <div className="shopcard" key={value.id}>
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                  <div className="card-body p-2">
                    <h5 className="card-title mb-1">
                      {value.name}
                    </h5>
                    <Badge pill variant="secondary">
                      {value.tag}
                    </Badge>
                    <Badge pill variant="secondary">
                      {value.place}
                    </Badge>
                    <p className="card-text mb-2">提供男士理髮、染髮、護髮等服務</p>
                    <Link 
                      className="linktodetail"
                      to={{
                        pathname:'/shopdetail/'+ value.id,
                        // search:'?sort=name',
                        // hash:'#the-hash',
                        // state:{fromDashboard:true}
                    }}>
                      詳細內容
                    </Link>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
            {/* <div className="cardGroup">
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
              <Cards />
            </div> */}
          <Pagination />
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

export default withRouter(ShopList)
