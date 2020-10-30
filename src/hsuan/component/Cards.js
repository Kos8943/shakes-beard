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
          
      <div className="hsuanproduct">
        <img src={require('../icon/tie-01.jpg')} className="card-img-top" alt="..." />
        
      </div>
    </>
  )
}
// FaRegHeart、FaHeart

export default Cards
