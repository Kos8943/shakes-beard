import React from 'react'
import { Link } from 'react-router-dom';
import "../Project.css";
import tie from '../icon/tie-01.jpg';

function Cards(props) {
  console.log('Cards', props)
  return (
    <>
      {/*  style="width: 18rem;" src="./card01" */}
      {/* <img
            className="d-block w-100"
            src={require("../icon/horizontal2.jpg")}
            alt="Third slide"
          /> */}
          <div className="col-9">
          <nav aria-label="breadcrumb cates">
        <ol className="breadcrumb">
          <li className="breadcrumb-item cates-item">
            <Link to="#">全部</Link>
          </li>
          <li className="breadcrumb-item cates-item">
            <Link to="#">服飾配件</Link>
          </li>
          {/* 變數
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li> */}
          <li className="breadcrumb-item active" aria-current="page">
            領帶/領結
          </li>
        </ol>
      </nav></div>
      <div className="card">
        <img src={require('../icon/tie-01.jpg')} className="card-img-top" alt="..." />
        
      </div>
    </>
  )
}
// FaRegHeart、FaHeart

export default Cards
