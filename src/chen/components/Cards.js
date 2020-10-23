import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/custom.css'

function Cards(props) {
  console.log('Cards', props)
  return (
    <>
      {/*  style="width: 18rem;" */}
      <div className="card">
        <img src="./card01" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Sculptor Barber</h5>
          <p className="card-text">提供男士理髮、染髮、護髮等服務</p>
          <Link href="#" className="card-link">
            男士理髮廳
          </Link>
          <Link href="#" className="card-link">
            台北市大安區
          </Link>
          <Link href="#" className="btn btn-primary">
            詳細內容
          </Link>
          <Link href="#" className="btn btn-primary">
            立即預約
          </Link>
        </div>
      </div>
    </>
  )
}
// FaRegHeart、FaHeart

export default Cards
