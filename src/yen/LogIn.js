import React, { useState, useEffect } from 'react'
import LogInCss from './styles/LogInCss.scss'
import facebook from './img/facebook.svg'
import twitter from './img/twitter.svg'
import google from './img/google.svg'


function LogIn(props) {
   
    return (
      <>
        <div className="bagimg">
          <div className="bagimg2">
            
            <div className="loginCard">
              <div className="loginTittle">登入</div>

              <div className="loginWeb">

                <div className="loginArea1">
                  <div className="logText">帳號</div>
                  <input className="loginInput" type="email"></input>  
                  <div className="logText">密碼</div>
                  <input className="loginInput" type="password"></input>
                  <div className="logText2">忘記密碼</div>
                  <a href=""><button className="loginCheckButton loginMobile">登入</button></a> 
                </div>

                <div className="loginArea2 ">
                  <div className="otherAccount">
                  <button className="otherLogButton facebook"> <div className="d-flex justify-content-around align-items-center"><img src={facebook} className="lognIcon "></img>使用Facebook登入<div></div></div></button>

                  <button className="otherLogButton twitter"><div className="d-flex justify-content-around align-items-center"><img src={twitter} className="lognIcon"></img>使用Twitter登入<div></div></div></button>

                  <button className="otherLogButton google"><div className="d-flex justify-content-around align-items-center"><img src={google} className="lognIcon"></img>使用Google登入<div></div></div></button>
                    
                  <button className="loginSingUpButton loginMobile">註冊帳號</button>


                  </div>               
                </div>

              </div>

              <div className="d-flex justify-content-around ">
                  
                <a href=""><button className="loginCheckButton loginWebNone">登入</button></a>
                   
                <a href=""><button className="loginSingUpButton loginWebNone">註冊帳號</button></a>
                      
              </div>



              <div className="loginMobile">
















              </div>

            </div>
          </div>
       </div>

      </>
       
    )
      
  }



export default LogIn
