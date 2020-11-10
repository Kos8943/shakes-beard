import React, { useState, useEffect } from "react";
import DataUpdate from "../styles/DataUpdate.scss";
import DatePicker from "react-datepicker";
import Address from "./Address";

import "react-datepicker/dist/react-datepicker.css";

// 改為台灣繁體中文的日期樣式
// 參考：https://github.com/Hacker0x01/react-datepicker/#localization
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { zhTW } from "date-fns/esm/locale";
registerLocale("zh-TW", zhTW);

function MemberDataUpdateTable(props) {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [startDate, setStartDate] = useState(new Date());

  

  async function getFromServer() {
    const url = "http://localhost:3000/try-mem";
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

    //待判斷使用者為誰
    setAccount(memberData[1].account);
    setName(memberData[1].name);
    setEmail(memberData[1].email);
    setPhone(memberData[1].phone);
    setAddress(memberData[1].address);
    setName(memberData[1].name);
  }
  useEffect(() => {
    getFromServer();
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
              name="account"
              value={account}
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
              selected={startDate}
              locale="zh-TW"
              onChange={(date) => setStartDate(date)}
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
              <button className="upDateCancle">取消</button>
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

// import React from "react";

// function MemberDataUpdateTable(props) {
//   return (
//     <>
//       <div className="rightArea col-12 col-sm-9">
//         <div className="optionTittle webObj">{props.title}</div>
//         <div className="decLine webObj"></div>
//         <div className="updateArea">
//           <div>
//             <div>會員帳號</div>
//             <input
//               type="text"
//               disabled="disabled"
//               className="updateInput"
//               value="xxx"
//             ></input>
//             <div>姓名</div>
//             <input type="text" className="updateInput" value="王大明"></input>
//             <div>信箱</div>
//             <input
//               type="text"
//               className="updateInput"
//               value="xxx@xxx.com"
//             ></input>
//             <div>生日</div>
//             <div className="d-flex">
//               <select className="birthday">
//                 <option>1</option>
//               </select>
//               <div className="birthdayText">月</div>
//               <select className="birthday">
//                 <option>13</option>
//               </select>
//               <div className="birthdayText">日</div>
//             </div>
//             {/* <input type="text" className="updateInput" placeholder="YYYY-MM-DD"></input> */}
//             <div>手機</div>
//             <input type="text" className="updateInput"></input>
//             <div>地址</div>
//             <div className="d-flex">
//               <select>
//                 <option>台北市</option>
//               </select>
//               <select>
//                 <option>大安區</option>
//               </select>
//             </div>
//             <input type="text" className="updateInput"></input>
//           </div>
//           <div className="btnCenter justify-content-end">
//             <button type="submit" className="memberCancle">
//               取消
//             </button>
//             <button type="submit" className="memberCheck">
//               完成
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default MemberDataUpdateTable;
