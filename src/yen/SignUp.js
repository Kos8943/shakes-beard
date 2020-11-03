import React, { useState, useEffect } from 'react'
import SignUpCss from './styles/SignUpCss.scss'



function SignUp(props) {
   
    return (
      <>
        <div className="bagimg">
          <div className="bagimg2">
            
            <div className="signUpArea">

              <div className="signTittle">
                註冊新帳號
              </div>

              <div className="area ">

                <div className="signUpText ">姓名</div>
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
              
              <a href="" className="singUpButton d-flex justify-content-center align-items-center">完成</a>
              
            </div>

          </div>
        </div>
        
       

      </>
       
    )
      
  }



export default SignUp
