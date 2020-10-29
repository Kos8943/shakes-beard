import React, { useState, useEffect } from 'react'
import LognInCss from './styles/LognInCss.scss'


function LognIn(props) {
   
    return (
      <>
      <div className="area">
        <div className="bgc">
          <div className="logninArea">
          <div className="">登入</div>

          <div className="d-flex">

            <div className="d-flex flex-column">
              <div className="">信箱</div>
              <input className=""></input>
              <div className="">密碼</div>
              <input className=""></input>
              <a href=""><button className="">登入</button></a>
            </div>

            <div className="d-flex flex-column">
              <a href=""><button className="">使用Facebook登入</button></a>
              <a href=""><button className="">使用Twitter登入</button></a>
              <a href=""><button className="">使用Google登入</button></a>
              <a href=""><button className="">註冊新帳號</button></a>






          </div>
          </div>

            
          </div>
        </div>     
      </div> 
     
      

      </>
       
    )
      
  }



export default LognIn
