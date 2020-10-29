import React, { useState, useEffect } from 'react'
import LognInCss from './styles/LognInCss.scss'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import google from './img/google.svg'


function LognIn(props) {
   
    return (
      <>
        <div className="bag">
          <div className="bagw">
            
            <div className="logninArea">
              <div className="lognTittle">登入</div>

              <div className="d-flex justify-content-center">

                <div className="area1 logn d-flex flex-column ">
                  <div className="lognText ">信箱</div>
                  <input className="logninInput" type="email"></input>
                  <div className="lognText">密碼</div>
                  <input className="logninInput" type="password"></input>
                  <a href=""><button className="checkButton">登入</button></a>
                </div>

                <div className="area2 d-flex flex-column ">
                  <a href=""><button className="lognButton facebook"><img src={facebook} className="lognIcon"></img>使用Facebook登入</button></a>
                  <a href=""><button className="lognButton twitter"><img src={twitter} className="lognIcon"></img>使用Twitter登入</button></a>
                  <a href=""><button className="lognButton google"><img src={google} className="lognIcon"></img>使用Google登入</button></a>
                  <a href=""><button className="newLogn">註冊新帳號</button></a>
                </div>

              </div>


            </div>
          </div>
       </div>

      </>
       
    )
      
  }



export default LognIn
