import React, { useState, useEffect } from "react";

function MemberPasswordUpdateTable(props) {
  const [pass, setPass] = useState();
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

   
  }
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="rightArea col-sm-9 col-12">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
        <form className="updateArea" method="POST" onSubmit="return false">
          <div>
            <div>舊密碼</div>
            <input
              type="text"
              className="updateInput"
              name="password"
              value={pass}
              onChange={(e)=>{
                  setPass(e.target.value)
              }}
            ></input>
            <div>新密碼</div>
            <input
              type="password"
              className="updateInput"
              name="newPassword"
              value={newPassword}
              onChange={(e)=>{
                  setNewPassword(e.target.value)
              }}
              ></input>
            <div>再次確認密碼</div>
            <input
              type="password"
              className="updateInput"
              name="newPasswordCheck"
              value={newPasswordCheck}
              onChange={(e)=>{
                  setNewPasswordCheck(e.target.value)
              }}
            ></input>
          </div>
          <div className="btnCenter justify-content-end">
          <button type="submit" className="memberCancle">取消</button>
          <button type="submit" className="memberCheck">完成</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MemberPasswordUpdateTable;
