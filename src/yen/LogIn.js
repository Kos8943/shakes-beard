import React, { useState, useEffect } from "react";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";

function LogIn(props) {
  const { isAuth, setIsAuth } = props;
  const [acc, setAcc] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <div className="bagimg">
        <div className="bagimg2">
          <div className="loginCard">
            <div className="loginTittle">登入</div>

            <form
              className="loginWeb"
              method="POST"
              name="memberForm"
              onsubmit="return false;"
              novalidate
            >
              <div className="loginArea1">
                <lable for="account" className="logText">
                  帳號 </lable>
                  <input
                    className="loginInput"
                    name="account"
                    type="text"
                    id="account"
                    value={acc}
                    onChange={(e) => setAcc(e.target.value)}
                    required
                  ></input>
               


                <label for="password" className="logText">
                  密碼</label>
                  <input
                    className="loginInput"
                    name="password"
                    type="password"
                    id="password"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    required
                  ></input>
                

                <div className="logText2">忘記密碼</div>
                <button
                  type="submit"
                  className="loginCheckButton loginMobile" >
                  登入
                </button>
              </div>









              <div className="loginArea2 ">
                <div className="otherAccount">
                  <button className="otherLogButton facebook">
                    <div className="d-flex justify-content-around align-items-center">
                      <img src={facebook} className="lognIcon "></img>
                      使用Facebook登入<div></div>
                    </div>
                  </button>

                  <button className="otherLogButton twitter">
                    <div className="d-flex justify-content-around align-items-center">
                      <img src={twitter} className="lognIcon"></img>
                      使用Twitter登入<div></div>
                    </div>
                  </button>

                  <button className="otherLogButton google">
                    <div className="d-flex justify-content-around align-items-center">
                      <img src={google} className="lognIcon"></img>
                      使用Google登入<div></div>
                    </div>
                  </button>

                  <button
                    type="submit"
                    className="loginSingUpButton loginMobile"
                  >
                    註冊帳號
                  </button>
                </div>
              </div>
            </form>

            <div className="d-flex justify-content-around ">
              <button type="submit" className="loginCheckButton loginWebNone">
                登入
              </button>
              <button type="submit" className="loginSingUpButton loginWebNone">
                註冊帳號
              </button>
            </div>

            <div className="loginMobile"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
