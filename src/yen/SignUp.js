import React, { useState, useEffect } from "react";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

// import { Collapse } from "react-bootstrap";
import SignUpCss from "./styles/SignUpCss.scss";

function SignUp(props) {
  const { isAuth, setIsAuth } = props;

  const [newAccount, setNewAccount] = useState("");
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [alertStars, setAlertStars] = useState(true);
  const [alertStarsName, setAlertStarsName] = useState(true);
  const [alertStarsEmail, setAlertStarsEmail] = useState(true);
  const [alertStarsPhone, setAlertStarsPhone] = useState(true);
  const [alertStarsPassword, setAlertStarsPassword] = useState(true);
  const [alertStarsPasswordSame, setAlertStarsPasswordSame] = useState(true);

  const [isSignSuccess, setIsSignSuccess] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  async function close(){
    handleClose();
    await setIsAuth(true)
  }

  function memSignup() {
    const phonePattern = /^09\d{2}\d{3}\d{3}$/;
    const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    //帳號
    if (!newAccount || newAccount.length < 3) {
      setAlertStars(false);
    } else {
      setAlertStars(true);
    }

    //姓名
    if (!newName || newName.length < 2) {
      setAlertStarsName(false);
    } else {
      setAlertStarsName(true);
    }

    //信箱
    if (!emailPattern.test(newEmail)) {
      setAlertStarsEmail(false);
    } else {
      setAlertStarsEmail(true);
    }

    //手機
    if (!phonePattern.test(newPhone)) {
      setAlertStarsPhone(false);
    } else {
      setAlertStarsPhone(true);
    }

    //密碼
    if (newPassword.length < 5 || newPasswordCheck.length < 5) {
      setAlertStarsPassword(false);
    } else {
      setAlertStarsPassword(true);
    }

    if (newPassword !== newPasswordCheck) {
      setAlertStarsPasswordSame(false);
    } else {
      setAlertStarsPasswordSame(true);
    }
  }
  async function postSignForm() {
    const a =
      alertStars &&
      alertStarsName &&
      alertStarsEmail &&
      alertStarsPhone &&
      alertStarsPassword &&
      alertStarsPasswordSame;
    console.log("a", a);

    if (a == true) {
      const url = "http://localhost:3000/yen/sign";
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          newAccount,
          newName,
          newEmail,
          newPhone,
          newPassword,
          newPasswordCheck,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((r) => r.json())

        .then(async (o) => {
          console.log("react收到的", o);
          console.log(o.success);

          async function close(){
            handleClose();
            await (o.success)?setIsAuth(true):setIsAuth(false)
          }

          if (o.success) {
            setIsSignSuccess(true)
            localStorage.setItem("data", JSON.stringify(o));
            localStorage.setItem("auth", true);
          } else {
            setIsSignSuccess(false);
            
          }

          setTimeout(() => {
            handleShow();
          }, 10);

          setTimeout(() => {
            close();
          }, 1800);

       
           
         
        });
    } 
  }
if (isAuth === true) return <Redirect to="/homepage" />;
  return (
    <>
      <div className="sbagimg">
        <div className="sbagimg2">
          <form
            novalidate
            className="signUpArea"
            name="signUp"
            onSubmit={(e) => {
              e.preventDefault();
              postSignForm();
            }}
          >
            <div className="signTittle">註冊新帳號</div>

            <div className="sarea">
              <div>
                <label className="signUpText">
                  <span className={` ${alertStars ? "redNone" : "red"}`}>*</span>
                  帳號
                  <span className={` ${alertStars ? "redNone" : "redText"}`}>
                    長度需大於3碼
                  </span>
                </label>
                <input
                  className= "signUpInput"
                  type="text"
                  name="account"
                  value={newAccount}
                  onChange={(e) => {
                    setNewAccount(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <label className="signUpText ">
                  <span class={` ${alertStarsName ? "redNone" : "red"}`}>
                    *
                  </span>
                  姓名
                  <span class={` ${alertStarsName ? "redNone" : "redText"}`}>
                    長度需大於3碼
                  </span>
                </label>
                <input
                  className="signUpInput"
                  type="text"
                  name="name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="signUpText">
                  <span class={` ${alertStarsEmail ? "redNone" : "red"}`}>
                    *
                  </span>
                  信箱
                  <span class={` ${alertStarsEmail ? "redNone" : "redText"}`}>
                    請填寫正確格式
                  </span>
                </label>
                <input
                  className="signUpInput"
                  type="text"
                  name="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="signUpText">
                  <span class={` ${alertStarsPhone ? "redNone" : "red"}`}>
                    *
                  </span>
                  手機
                  <span class={` ${alertStarsPhone ? "redNone" : "redText"}`}>
                    請填寫正確手機
                  </span>
                </label>
                <input
                  className="signUpInput"
                  type="phone"
                  name="phone"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="signUpText">
                  <span
                    class={` ${
                      alertStarsPassword && alertStarsPasswordSame
                        ? "redNone"
                        : "red"
                    }`}
                  >
                    *
                  </span>
                  密碼
                  <span
                    class={` ${alertStarsPassword ? "redNone" : "redText"}`}
                  >
                    密碼長度需大於5碼
                  </span>
                  <span
                    class={` ${
                      !alertStarsPassword || alertStarsPasswordSame
                        ? "redNone"
                        : "redText"
                    }`}
                  >
                    密碼不相符
                  </span>
                </label>
                <input
                  className="signUpInput"
                  type="password"
                  name="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label className="signUpText">
                  <span
                    class={` ${
                      alertStarsPassword && alertStarsPasswordSame
                        ? "redNone"
                        : "red"
                    }`}
                  >
                    *
                  </span>
                  確認密碼
                  <span
                    class={` ${alertStarsPassword ? "redNone" : "redText"}`}
                  >
                    密碼長度需大於5碼
                  </span>
                  <span
                    class={` ${
                      !alertStarsPassword || alertStarsPasswordSame
                        ? "redNone"
                        : "redText"
                    }`}
                  >
                    密碼不相符
                  </span>
                </label>
                <input
                  className="signUpInput"
                  type="password"
                  name="passwordcheck"
                  value={newPasswordCheck}
                  onChange={(e) => setNewPasswordCheck(e.target.value)}
                ></input>
              </div>
              <button
                type="submit"
                onClick={() => memSignup()}
                className="singUpButton d-flex justify-content-center align-items-center"
              >
                完成
              </button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="madalSty" />
                <Modal.Body className="madalStyS">
                  {" "}
                  {isSignSuccess ? "帳號註冊成功" : "此帳號已註冊過"}
                </Modal.Body>
                <Modal.Footer className="madalStyS" >
            
                </Modal.Footer>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
