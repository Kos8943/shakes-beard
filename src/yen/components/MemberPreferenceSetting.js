import React, { useState, useEffect } from "react";
import PreferenceSettingCss from "../styles/PreferenceSettingCss.scss";

function MemberPreferenceSetting(props) {
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
  const [invoice, setInvoice] = useState("個人發票");
  const [favorite, setFavorite] = useState("");

  const [radio, setRadio] = useState("");




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


    setCvc(memberData[0].cvc)
    setName(memberData[0].name);
    setEmail(memberData[0].email);
    // setBirth(memberData[0].birth);
    setPhone(memberData[0].phone);
    setAddress(memberData[0].address);
    setCvc(memberData[0].cvc);
    setInvoice(memberData[0].invoice);





  }
  useEffect(() => {
    getFrom();
  }, []);
  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
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
              value={cvc}
            ></input>

            <div className="tittle2">發票設定</div>

            {/* // {(invoice==="個人發票")?check:""} */}

            <div>
              <input
                type="radio"
                id="personal"
                name="invoice"
                value="兩聯式發票"
                onChange={(e) => {
                  setInvoice(e.target.value)
                }}
              ></input>
              <label for="personal">兩聯式發票(個人)</label>
            </div>

            <div>
              <input
                type="radio"
                id="company"
                name="invoice"
                value="三聯式發票"
                onChange={(e) => {
                  setInvoice(e.target.value)
                }}


              ></input>

              <label for="company">三聯式發票(公司行號)</label>
            </div>

            <div>
              <input
                type="radio"
                id="electronic"
                name="invoice"
                value="電子發票"
                onChange={(e) => {
                  setInvoice(e.target.value)
                }}
              ></input>

              <label for="electronic">電子發票</label>
              <input
                type="text"
                className="electronic"
                placeholder="手機條碼"
                onChange={(e) => {
                  setInvoice(e.target.value)
                }}
              ></input>
            </div>

            <div>
              <input
                type="radio"
                id="donate"
                name="invoice"
                value="捐贈發票"
                onChange={(e) => {
                  setInvoice(e.target.value)
                }}
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
