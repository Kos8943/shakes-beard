import React,{ useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Badge } from 'react-bootstrap'  
import { FaRegHeart, FaHeart } from "react-icons/fa";
import '../styles/shops.scss'
import shop01 from "../img/1-ST001.jpg";
import shop02 from "../img/1-ST002.jpg";
import shop03 from "../img/1-ST003.png";
import shop04 from "../img/1-ST004.jpg";
import shop05 from "../img/1-ST005.jpg";
import shop06 from "../img/1-ST006.jpg";
import shop07 from "../img/1-ST007.jpg";
import shop08 from "../img/1-ST008.jpg";

function CardsCateIsHair(props) {
  console.log('CardsCateIsHair', props)
  const[heart, setHeart] = useState("dislike");
  const [shops, setShops] = useState([])
  
  async function getBarberShopsFromServer(){
    // setDataLoading(true)

    // json-db
    const url = 'http://localhost:3000/try-hair'

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
    getBarberShopsFromServer()
  },[])

  const display=(
  <>
    {shops.map((value, index)=>{
      return(
      <div className="col-12 col-sm-6 col-md-6 col-lg-4 p-0" key={index}>
        <div className="shopcard" key={value.shop_id}>
        <Link
          className="todetail"
          to={{
            pathname:'/shopdetail/'+ value.sid
        }}>
          {/* <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." /> */}
          <img src={shop01} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body p-2">
          <h6>
            <Badge pill variant="secondary" className="mr-1 cate-tag">
              {value.shop_cate_tag}
            </Badge>
            <Badge pill variant="secondary" className="mr-1">
              {value.shop_place_tag}
            </Badge>
            <FaHeart
              className={heart}
              onClick={
                ()=>{
                  if(heart==="like"){setHeart("dislike")}
                  else{setHeart("like")}
                  }}/>
            <span className="heartsValue">{value.hearts}</span>
          </h6>
          <h5 className="card-title mb-1" className="mr-1">
            {value.shop_name}
          </h5>
          {/* <Link className="addlike">
             <FaHeart className="like"/>
             <FaRegHeart className="dislike"/>
          </Link> */}
        </div>
      </div>
    </div>)
    })}
  </>)

  return (
    <>{display}</>
  )
}

export default withRouter(CardsCateIsHair)