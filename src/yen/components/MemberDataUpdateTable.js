import React, { useState, useEffect } from "react";
import DataUpdate from "../styles/DataUpdate.scss";
import DatePicker from "react-datepicker";
import Address from "./Address";

import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { zhTW } from "date-fns/esm/locale";
import { set } from "animejs";
registerLocale("zh-TW", zhTW);

function MemberDataUpdateTable(props) {
  // const { isAuth, setIsAuth,account, setAccount,password, setPassword ,authAccount,setAuthAccount,authPassword,setAuthPassword} = props;

  const [authAccount, setAuthAccount] = useState('')
  // const [authPassword,setAuthPasswor]=useState('')
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState(new Date());
  const [dirst, setDirst] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [invoice, setInvoice] = useState("");
  const [favorite, setFavorite] = useState("");




  async function getFrom() {
    const url = "http://localhost:3000/yen/update";
    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const res = await fetch(request);
    const memberData = await res.json();
    console.log(memberData);


    setAuthAccount(memberData[0].authAccount)
    setName(memberData[0].name);
    setEmail(memberData[0].email);
    // setBirth(memberData[0].birth);
    setPhone(memberData[0].phone);
    setAddress(memberData[0].address);
  }
  useEffect(() => {
    getFrom();
  }, []);


  function post() {
    const postdata = {
      name: name,
      email: email,
      birth: birth,
      phone: phone,
      address: address
    }
    console.log(postdata)
    fetch('', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(postdata)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })

  }

  useEffect(() => {
    post();
  }, []);



  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
        <form className="dataForm">
          <div>會員帳號</div>
          <input
            type="text"
            disabled="disabled"
            className="updateInput"
            name="authAccount"
            value={authAccount}
          ></input>
          <div>姓名</div>
          <input
            type="text"
            className="updateInput"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <div>信箱</div>
          <input
            type="text"
            className="updateInput"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <div>生日</div>
          <DatePicker
            className="updateInput"
            dateFormat="yyyy-MM-dd"
            selected={birth}
            locale="zh-TW"
            onChange={(date) => setBirth(date)}
          />

          <div>手機</div>
          <input
            type="text"
            className="updateInput"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
          <div>地址</div>
          <Address />
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
            <button className="upDateCancle" onSubmit={(e) => {
              e.preventDefault();
              post();
            }}>取消</button>
            <button className="upDateCheck">完成</button>
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
