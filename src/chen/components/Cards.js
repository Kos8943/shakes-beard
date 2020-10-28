import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/shops.scss'

function Cards(props) {
  console.log('Cards', props)
  return (
    <>
      {/*  style="width: 18rem;" src="./card01" */}
      <div className="card">
        <img src={require('./card01.jpg')} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sculptor Barber</h5>
          <Link to="#" className="card-link">
            男士理髮廳
          </Link>
          <Link to="#" className="card-link">
            台北市大安區
          </Link>
          <p className="card-text ">提供男士理髮、染髮、護髮等服務</p>
          <Link to="#" className="btn btn-primary">
            詳細內容
          </Link>
          {/* <Link to="#" className="btn btn-primary">
            立即預約
          </Link> */}
        </div>
      </div>
    </>
  )
}
// FaRegHeart、FaHeart

export default Cards
