import React, { useState, useEffect } from "react";
import PasswordUpdate from "../styles/PasswordUpdate.scss";

function MemberPasswordUpdateTable(props) {
  const [pass, setPass] = useState(0);
  const [newPassword, setNewPassword] = useState();
  const [newPasswordCheck, setNewPasswordCheck] = useState();

  async function data() {
    const request = new Request("http://localhost:3000/yen/try-mem", {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });
    const response = await fetch(request);
    const mem = await response.json();
    console.log(mem)
    setPass(mem[0].name);
  }

  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
        <form method="POST" className="passForm" onSubmit="return false">
          <div>
            <div>舊密碼</div>
            <input
              type="text"
              className="passInput"
              name="password"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            ></input>
            <div>新密碼</div>
            <input
              type="password"
              className="passInput"
              name="newPassword"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            ></input>
            <div>再次確認密碼</div>
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
            <button type="submit" className="passCancle">
              取消
            </button>
            <button type="submit" className="passCheck">
              完成
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MemberPasswordUpdateTable;
