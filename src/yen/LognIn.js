import React, { useState, useEffect } from 'react'
import LognInCss from './styles/LognInCss.scss'


function LognIn(props) {
   
    return (
      <>
      <div className="area">
        <div className="bgc">
          <div className="logninArea">
          <div className="lognTittle">登入</div>

          <div className="d-flex justify-content-center ">

            <div className="d-flex flex-column area1">

              <div className="logn">

                <div className="lognText ">信箱</div>
                <input className="logninInput" type="email"></input>
                <div className="lognText">密碼</div>
                <input className="logninInput" type="password"></input>
                <a href=""><button className="checkButton">登入</button></a>

              </div>
              
            </div>

            <div className="d-flex flex-column area2">

              <a href=""><button className="lognButton facebook">使用Facebook登入</button></a>
              <a href=""><button className="lognButton twitter">使用Twitter登入</button></a>
              <a href=""><button className="lognButton google">使用Google登入</button></a>
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
