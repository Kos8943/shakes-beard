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
            
            <div className="logInArea">
              <div className="loginTittle">登入</div>

              <div className="loginArea  d-flex justify-content-center">



                <div className="logInArea1 loginWeb">

                  
                    <div className="log">

                      <div className="logText d-flex justify-content-around">信箱<div></div><div></div> </div>
                      <div className="account">
                        <input className="logInInput" type="email"></input>
                      </div>
                      
                      <div className="logText d-flex justify-content-around">密碼<div></div><div></div> </div>
                      <div className="password">
                        <input className="logInInput" type="password"></input>
                      </div> 
                      <div className="d-flex justify-content-around">忘記密碼<div></div><div></div> </div>

                    </div>

                
                    {/* <div className="buttonArea d-flex justify-content-center align-items-center">
                      <a href=""><button className="checkButton">登入</button></a>
                    </div>
                     */}
                  
                </div>

                <div className="logInArea2 loginWeb">

                  <div className="otherAccount">
                    <a href=""><button className="otherLogButton facebook"> <div className="d-flex justify-content-around align-items-center"><img src={facebook} className="lognIcon "></img>使用Facebook登入<div></div></div></button></a>

                     <a href=""><button className="otherLogButton twitter"><div className="d-flex justify-content-around align-items-center"><img src={twitter} className="lognIcon"></img>使用Twitter登入<div></div></div></button></a>

                    <a href=""><button className="otherLogButton google"><div className="d-flex justify-content-around align-items-center"><img src={google} className="lognIcon"></img>使用Google登入<div></div></div></button></a>
                  </div>
                   

                    {/* <div className="buttonArea d-flex justify-content-center">
                       <a href=""><button className="singUpButton d-flex justify-content-center align-items-center">註冊帳號</button></a>
                    </div> */} 
                </div>

              </div>

              <div className="d-flex justify-content-around ">
                  
                <a href=""><button className="loginCheckButton loginWeb">登入</button></a>
                   
                <a href=""><button className="loginSingUpButton loginWeb">註冊帳號</button></a>
                      
              </div>


            </div>
          </div>
       </div>

      </>
       
    )
      
  }



export default LogIn
