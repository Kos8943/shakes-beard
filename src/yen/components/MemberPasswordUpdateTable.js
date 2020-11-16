import React, { useState, useEffect } from "react";
import PasswordUpdate from "../styles/PasswordUpdate.scss";
import { Modal, Button } from "react-bootstrap";


function MemberPasswordUpdateTable(props) {
  const refreshPage = () => {
    window.location.reload();
  };

  const [pass, setPass] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");
  const [alertStarsPassword, setAlertStarsPassword] = useState(true);
  const [alertStarsPasswordSame, setAlertStarsPasswordSame] = useState(true);

  const [upDatePassSuccess, setUpDatePassSuccess] = useState('');


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function PasswordCheck() {
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

  function PasswordUpdate() {
    const a = alertStarsPassword && alertStarsPasswordSame;

    if (a == true) {
      const url = "http://localhost:3000/yen/password-update";

      const data = {
        sid: JSON.parse(localStorage.getItem("data")).sid,
        pass,
        newPassword,
        newPasswordCheck,
      };

      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((r) => r.json())

        .then((o) => {
          console.log("react收到的", o);
          if (o === false) {
            // alert("密碼錯誤");
            setUpDatePassSuccess(false)
            setNewPassword("");
            setNewPasswordCheck("");
            setPass("");
          } else {
            // alert("修改完成");
            setUpDatePassSuccess(true)
            setNewPassword("");
            setNewPasswordCheck("");
            setPass("");
          }
          setTimeout(() => {
            handleShow();
          }, 10);

          setTimeout(() => {
            handleClose();
          }, 1050);
        });
    }
  }

  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
        <form
          method="POST"
          className="passForm"
          onSubmit={(e) => {
            e.preventDefault();
            PasswordUpdate();
          }}
        >
          <div>
            <div>舊密碼</div>
            <input
              type="password"
              className="passInput"
              name="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            ></input>
            <div>
              {" "}
              <span
                class={` ${
                  alertStarsPassword && alertStarsPasswordSame
                    ? "redNone"
                    : "red"
                }`}
              >
                *
              </span>
              新密碼
              <span class={` ${alertStarsPassword ? "redNone" : "redText"}`}>
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
            </div>
            <input
              type="password"
              className="passInput"
              name="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            ></input>
            <div>
              
              <span
                class={` ${
                  alertStarsPassword && alertStarsPasswordSame
                    ? "redNone"
                    : "red"
                }`}
              >
                *
              </span>
              再次確認密碼
              <span class={` ${alertStarsPassword ? "redNone" : "redText"}`}>
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
            </div>
            <input
              type="password"
              className="passInput"
              name="newPasswordCheck"
              value={newPasswordCheck}
              onChange={(e) => {
                setNewPasswordCheck(e.target.value);
              }}
            ></input>
          </div>
          <div className="passbtnDir">
            <button type="button" onClick={refreshPage} className="passCancle">
              取消
            </button>
            <button
              type="submit"
              onClick={() => PasswordCheck()}
              className="passCheck"
            >
              完成
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="madalSty" />
              <Modal.Body className="madalSty"> {upDatePassSuccess ? "密碼已修改" : "密碼錯誤"}</Modal.Body>
              <Modal.Footer className="madalSty" />
            </Modal>
          </div>
        </form>
       
       
      </div>
     
    </>
  );
}

export default MemberPasswordUpdateTable;
