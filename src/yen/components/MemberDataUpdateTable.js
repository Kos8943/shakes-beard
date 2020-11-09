import React from "react";

function MemberDataUpdateTable(props) {
  return (
    <>
      <div className="rightArea col-12 col-sm-9">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
        <div className="updateArea">
          <div>
            <div>會員帳號</div>
            <input
              type="text"
              disabled="disabled"
              className="updateInput"
              value="xxx"
            ></input>
            <div>姓名</div>
            <input type="text" className="updateInput" value="王大明"></input>
            <div>信箱</div>
            <input
              type="text"
              className="updateInput"
              value="xxx@xxx.com"
            ></input>
            <div>生日</div>
            <div className="d-flex">
              <select className="birthday">
                <option>1</option>
              </select>
              <div className="birthdayText">月</div>
              <select className="birthday">
                <option>13</option>
              </select>
              <div className="birthdayText">日</div>
            </div>
            {/* <input type="text" className="updateInput" placeholder="YYYY-MM-DD"></input> */}
            <div>手機</div>
            <input type="text" className="updateInput"></input>
            <div>地址</div>
            <div className="d-flex">
              <select>
                <option>台北市</option>
              </select>
              <select>
                <option>大安區</option>
              </select>
            </div>
            <input type="text" className="updateInput"></input>
          </div>
          <div className="btnCenter justify-content-end">
            <button type="submit" className="memberCancle">
              取消
            </button>
            <button type="submit" className="memberCheck">
              完成
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberDataUpdateTable;
