import React, { useState, useEffect } from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";
import { FaDAndDBeyond } from "react-icons/fa";

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


  function memberIoginForm() {

    const url = 'http://localhost:3000/yen/try-log'

<<<<<<< HEAD
    // const fd = new FormData(document.memberForm)
=======
<<<<<<< HEAD
  function data() {
    const d = {
      account: account,
      password: password,
      authAccount:authAccount,
      authPassword:authPassword
    }

    fetch("http://localhost:3001/member/login", {
      method: "POST",
      body: JSON.stringify(d)
    })

      .then((res) => res.JSON)

  }
=======
  // function data() {
  //   const d = {
  //     account: account,
  //     password: password,
  //     authAccount:authAccount,
  //     authPassword:authPassword
  //   }
>>>>>>> e90326973525916392f10d675a5cf8b360ebf767

    // console.log(fd)
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ account, password }),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(r => r.json())

      .then(o => {
        console.log(o);
      })

<<<<<<< HEAD
  }
=======
  // }
>>>>>>> becb5e077ad3b707d785812c670eccd3a693893f
>>>>>>> e90326973525916392f10d675a5cf8b360ebf767



  //   // 注意資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'POST',
  //     body: JSON.stringify(newData),
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     }),
  //   })

  //   console.log(JSON.stringify(newData))

  //   const response = await fetch(request)
  //   const data = await response.json()

  //   console.log('伺服器回傳的json資料', data)
  //   // 要等驗証過，再設定資料(簡單的直接設定)

  //   //直接在一段x秒關掉指示器
  //   setTimeout(() => {
  //     alert('儲存完成')
  //     props.history.push('/')
  //   }, 500)
  // }


  // // const [account, setAccount] = useState("");
  // // const [password, setPassword] = useState("");

  if (isAuth === true) return <Redirect to="/homepage" />


  return (
    <>
      <div className="bagimg">
        <div className="bagimg2">
          <div className="loginCard">
            <div className="loginTittle">登入</div>

            <form
              className="loginWeb"
              // method="POST"
              name="memberForm"
<<<<<<< HEAD
              // novalidate
=======
<<<<<<< HEAD
<<<<<<< HEAD
              onsubmit="return false;"
              onSubmit={(e) => {
                e.preventDefault();
                data();
              }}
              novalidate>
=======
              novalidate
            >
>>>>>>> 2bf3e82c0080fde0284bbc44f6eadaa07fedc82b
=======
              onsubmit="return false;"
>>>>>>> e90326973525916392f10d675a5cf8b360ebf767
              onSubmit={(e) => {
                e.preventDefault();
                memberIoginForm()
              }}
<<<<<<< HEAD
            >
=======
              novalidate>
>>>>>>> becb5e077ad3b707d785812c670eccd3a693893f
>>>>>>> e90326973525916392f10d675a5cf8b360ebf767
              <div className="loginArea1">
                <lable for="account" className="logText_">
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
                  type="submit"
                  // onClick={() => { memberIoginForm() }}
                  className="loginCheckButton loginMobile"
                // onClick={(e) => {
                //   e.preventDefault();
                //   memberIoginForm()
                // }}
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


              <div className="d-flex justify-content-around ">
                <button type="submit" className="loginCheckButton loginWebNone"
                // onClick={(e) => {
                //   e.preventDefault();
                //   memberIoginForm();


                // if (authAccount === account && authPassword === password) {
                //   setIsAuth(true);
                //   alert("登入成功");
                // } else {
                //   alert("帳號/密碼錯誤");
                // }
                // }}>
                >
                  登入
              </button>
                <button type="submit" className="loginSingUpButton loginWebNone">
                  註冊帳號
              </button>
              </div>
            </form>
            <div className="loginMobile"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn;
