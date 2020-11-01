import React, { useState, useEffect } from 'react'
import SignUpCss from './styles/SignUpCss.scss'



function LogIn(props) {
   
    return (
      <>
        <div className="bagimg">
          <div className="bagimg2">
            
            <div className="signUpArea">

              <div className="logTittle">
                註冊新帳號
              </div>

              <div className="area d-flex flex-column">

                <div className="signUpText">姓名</div>
                <div className="d-flex justify-content-center">
                  <input className="signUpInput" type="text"></input>
                </div>

                <div className="signUpText">信箱</div>
                <div className="d-flex justify-content-center">
                  <input className="signUpInput" type="email"></input>
                </div>
                <div className="signUpText">手機</div>
                <div className="d-flex justify-content-center">
                  <input className="signUpInput" type="phone"></input>
                </div>
                <div className="signUpText">密碼</div>
                <div className="d-flex justify-content-center">
                  <input className="signUpInput" type="password"></input>
                </div>
                <div className="signUpText">確認密碼</div>
                <div className="d-flex justify-content-center">
                  <input className="signUpInput" type="password"></input>
                </div>

              </div>

              <div className="buttonArea d-flex justify-content-center">
                <a href="" className="singUpButton d-flex justify-content-center">完成</a>
              </div>
               
            </div>

          </div>
        </div>
        
       

      </>
       
    )
      
  }



export default LogIn
