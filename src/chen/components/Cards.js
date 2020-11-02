import React from 'react'
import { Link } from 'react-router-dom'
import { Badge } from 'react-bootstrap'  
import '../styles/shops.scss'

function Cards(props) {
  console.log('Cards', props)
  return (
    <>
      <div className="card col-12 col-sm-6 col-md-6 col-lg-4 p-0 mb-3">
        <Link to="#" className="todetail">
          <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body p-2">
          <h5 className="card-title mb-1">Sculptor Barber</h5> 
          <div>
            <Badge pill variant="secondary">
              男士理髮廳
            </Badge>
          </div>
            <Badge pill variant="secondary">
              台北市大安區
            </Badge>
          <p className="card-text mb-2">提供男士理髮、染髮、護髮等服務</p>
          <Link to="#" className="linktodetail">
            詳細內容
          </Link>
        </div>
      </div>
    </>
  )
}
// FaRegHeart、FaHeart

export default Cards
