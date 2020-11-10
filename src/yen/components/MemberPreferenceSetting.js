import React from "react";
import PreferenceSettingCss from "../styles/PreferenceSettingCss.scss";

function MemberPreferenceSetting(props) {
  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-8 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>

        <form className="settingForm">
          <div className="tittle2">付款方式</div>
          <div>
            <div>信用卡卡號</div>
            <div className="d-flex">
              <input type="text" className="settingInput" value=""></input>
              <input type="text" className="settingInput" value=""></input>
              <input type="text" className="settingInput" value=""></input>
              <input type="text" className="settingInput" value=""></input>
            </div>

            <div>有效日期</div>
            <div className="d-flex">
              <select className="cardDate">
                <option>1</option>
              </select>
              <div className="cardDateText">月</div>
              <select className="cardDate">
                <option>13</option>
              </select>
              <div className="cardDateText">日</div>
            </div>

            <div>檢核碼(3碼)</div>
            <input
              type="text"
              className="settingInputBack"
              placeholder="信用卡背面3碼"
            ></input>

            <div className="tittle2">發票設定</div>

            <div>
              <input
                type="radio"
                id="personal"
                name="invoice"
                value="兩聯式發票"
              ></input>
              <label for="personal">兩聯式發票(個人)</label>
            </div>

            <div>
              <input
                type="radio"
                id="company"
                name="invoice"
                value="三聯式發票"
              ></input>
              <label for="company">三聯式發票(公司行號)</label>
            </div>

            <div>
              <input
                type="radio"
                id="electronic"
                name="invoice"
                value="電子發票"
              ></input>
              <label for="electronic">電子發票</label>
              <input
                type="text"
                className="electronic"
                placeholder="手機條碼"
              ></input>
            </div>

            <div>
              <input
                type="radio"
                id="donate"
                name="invoice"
                value="捐贈發票"
              ></input>
              <label for="donate">捐贈發票</label>
            </div>
          </div>

          <div className="settingbtnDir">
            <button className="settingCancle">取消</button>
            <button className="settingCheck">完成</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MemberPreferenceSetting;
