import React, { useState, useEffect } from "react";
import DataUpdate from "../styles/DataUpdate.scss"; //拿掉 版面會跑掉
import Address from "./Address";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";

function MemberDataUpdateTable(props) {
  const {
    authAccount,
    name,
    setName,
    email,
    setEmail,
    birth,
    setBirth,
    phone,
    setPhone,
    address,
    setAddress,
    country,
    setCountry,
    township,
    setTownship,
  } = props;

  const refreshPage = () => {
    window.location.reload();
  };

  const [alertStarsName, setAlertStarsName] = useState(true);
  const [alertStarsEmail, setAlertStarsEmail] = useState(true);
  const [alertStarsPhone, setAlertStarsPhone] = useState(true);
  const [alertStarsBirth, setAlertStarsBirth] = useState(true);

  const [upDateSuccess, setUpDateSuccess] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function check() {
    const phonePattern = /^09\d{2}\d{3}\d{3}$/;
    const birthPattern = /^((19|20)?[0-9]{2}[- /.](0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/;
    const emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

    //姓名
    if (!name || name.length < 2) {
      setAlertStarsName(false);
    } else {
      setAlertStarsName(true);
    }

    //信箱
    if (!emailPattern.test(email)) {
      setAlertStarsEmail(false);
    } else {
      setAlertStarsEmail(true);
    }

    //手機
    if (!phonePattern.test(phone)) {
      setAlertStarsPhone(false);
    } else {
      setAlertStarsPhone(true);
    }

    //生日
    if (!birthPattern.test(birth)) {
      setAlertStarsBirth(false);
    } else {
      setAlertStarsBirth(true);
    }
  }

  function memberUpdate() {
    const a =
      alertStarsName && alertStarsEmail && alertStarsPhone && alertStarsBirth;
    console.log("a", a);
    if (a == true) {
      const url = "http://localhost:3000/yen/data-update";
      const sid = {
        sid: JSON.parse(localStorage.getItem("data")).sid,
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          sid,
          authAccount,
          name,
          email,
          birth,
          phone,
          address,
          country,
          township,
        }),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((r) => r.json())

        .then((o) => {

          console.log("react收到的", o);
          
          if (o.success) {
            setUpDateSuccess(true)
          }else{setUpDateSuccess(false)}

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
          className="dataForm"
          onSubmit={(e) => {
            e.preventDefault();
            memberUpdate();
          }}
        >
          <div>會員帳號</div>
          <input
            type="text"
            disabled="disabled"
            className="updateInput"
            name="authAccount"
            value={authAccount}
          ></input>

          <div>
            <span class={` ${alertStarsName ? "redNone" : "red"}`}>*</span>姓名
            <span class={` ${alertStarsName ? "redNone" : "redText"}`}>
              長度需大於3碼
            </span>
          </div>
          <input
            type="text"
            className="updateInput"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>

          <div>
            <span class={` ${alertStarsEmail ? "redNone" : "red"}`}>*</span>
            信箱
            <span class={` ${alertStarsEmail ? "redNone" : "redText"}`}>
              請填寫正確格式
            </span>
          </div>
          <input
            type="text"
            className="updateInput"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <label>
            <span class={` ${alertStarsPhone ? "redNone" : "red"}`}>*</span>
            手機
            <span class={` ${alertStarsPhone ? "redNone" : "redText"}`}>
              請填寫正確手機
            </span>
          </label>
          <input
            type="text"
            className="updateInput"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>

          <div>
            <span class={` ${alertStarsBirth ? "redNone" : "red"}`}>*</span>
            生日
            <span class={` ${alertStarsBirth ? "redNone" : "redText"}`}>
              請填寫正確格式
            </span>
          </div>
          <input
            type="text"
            className="updateInput"
            name="birth"
            placeholder="YYYY-MM-DD"
            value={birth}
            onChange={(e) => {
              setBirth(e.target.value);
            }}
          ></input>

          <div>地址</div>
          <Address
            country={country}
            setCountry={setCountry}
            township={township}
            setTownship={setTownship}
          />
          <input
            type="text"
            className="updateInput"
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          ></input>
          <div className="upbtnDir">
            <button
              type="button"
              onClick={refreshPage}
              className="upDateCancle"
            >
              取消
            </button>

            <button
              type="submit"
              onClick={() => {
                check();
              }}
              className="upDateCheck"
            >
              完成
            </button>

          

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="madalSty" />
              <Modal.Body className="madalSty"> {upDateSuccess ? "資料已修改" : "資料未變更"}</Modal.Body>
              <Modal.Footer className="madalSty" />
            </Modal>
          </div>
        </form>
      </div>
      {/* <div>{name}</div>
        <div>{phone}</div> */}
      {/* 測試用 */}
    </>
  );
}

export default MemberDataUpdateTable;
