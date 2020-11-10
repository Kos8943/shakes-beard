import React, { useState, useEffect } from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";

function LogIn(props) {
  const {
    isAuth,
    setIsAuth,
    authAccount,
    setAuthAccount,
    authPassword,
    setAuthPasswor,
    account,
    setAccount,
    password,
    setPassword,
  } = props;
  // const [account, setAccount] = useState("");
  // const [password, setPassword] = useState("");

  if(isAuth===true) return <Redirect to="/homepage" /> 

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
                <lable for="account" className="logText_ d-flex flex-column ">
                  帳號
                </lable>
                <input
                  className="loginInput"
                  name="account"
                  type="text"
                  id="account"
                  value={account}
                  onChange={(e) => setAccount(e.target.value)}
                  required
                ></input>

                <label for="password" className="logText_ d-flex flex-column">
                  密碼
                </label>
                <input
                  className="loginInput"
                  name="password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>

                <div className="logText_2">忘記密碼</div>

                <button
                  type="button"
                  className="loginCheckButton loginMobile"
                  onClick={() => {
                    if (authAccount === account && authPassword === password) {
                      setIsAuth(true);
                      alert("登入成功");
                    } else {
                      alert("帳號/密碼錯誤");
                    }
                  }}
                >
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
              <button type="submit" className="loginCheckButton loginWebNone" onClick={() => {
                    if (authAccount === account && authPassword === password) {
                      setIsAuth(true);
                      alert("登入成功");
                    } else {
                      alert("帳號/密碼錯誤");
                    }
                  }}>
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
