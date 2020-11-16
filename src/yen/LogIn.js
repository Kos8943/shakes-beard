import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import LogInCss from "./styles/LogInCss.scss";
import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import google from "./img/google.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Modal, Button } from "react-bootstrap";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAPaeDGrXrdirweUn6zoDKIbMSGqvoUDOs",
  authDomain: "shakes-beard.firebaseapp.com"
};
firebase.initializeApp(config);

function LogIn(props) {
  const MySwal = withReactContent(Swal);
  const {
    isAuth,
    setIsAuth,
    account,
    setAccount,
    password,
    setPassword,
  } = props;

  const [isLoginSuccess, setIsLoginSuccess] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  async function close(){
    handleClose();
    await (isLoginSuccess)?setIsAuth(true):setIsAuth(false)
  }

  function memberIoginForm() {
    const url = "http://localhost:3000/yen/log";

    // const fd = new FormData(document.memberForm)

    // console.log(fd)
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ account, password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((r) => r.json())

      .then((o) => {
        console.log("react收到的", o);

        async function close(){
          handleClose();
          await (o.success)?setIsAuth(true):setIsAuth(false)
        }
        if (o.success) {
          setIsLoginSuccess(true)
          localStorage.setItem("data", JSON.stringify(o));
          localStorage.setItem("auth", true);
        } else {
          setPassword("");
          setAccount("");
          setIsLoginSuccess(false)
        }
        setTimeout(() => {
          handleShow();
        }, 10);

        setTimeout(() => {
          close();
        }, 1800);
      });
  }

  

  if (isAuth === true) {

    return <Redirect to="/homepage" />;
  }

  return (
    <>
      <div className="bagimg">
        <div className="bagimg2">
          <div className="loginCard">
            <div className="loginTittle">登入</div>

            <form
              className="loginWeb d-flex flex-column"
              // method="POST"
              name="memberForm"
              // novalidate
              onSubmit={(e) => {
                e.preventDefault();
                memberIoginForm();
              }}
            >
              <div className="log ">
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

                    <Link to="/signup">
                      <button className="loginSingUpButton loginMobile">
                        註冊帳號
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* </form> */}
              <div className="d-flex justify-content-around ">
                <button
                  type="submit"
                  className="loginCheckButton loginWebNone"
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
                <Link to="/signup">
                  <button className="loginSingUpButton loginWebNone">
                    註冊帳號
                  </button>
                </Link>
                
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="madalSty" />
                <Modal.Body className="madalStyS">
                  {" "}
                  {isLoginSuccess ? "登入成功" : "帳號/密碼錯誤"}
                </Modal.Body>
                <Modal.Footer className="madalStyS" >
            
                </Modal.Footer>
              </Modal>
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
