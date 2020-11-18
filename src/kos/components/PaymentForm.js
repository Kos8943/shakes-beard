/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import PaymentCard from "./PaymentCard";
import PaymentPrice from "./PaymentPrice";
import { Link, Redirect } from "react-router-dom";
import Creaditcard from "./Creaditcard";
import TWZipCode from "./TWZipCode";
import PaymentCardMap from "./PayMentCardMap";

function PaymentForm(props) {



  //Localstorage陣列
  const [payment, setPayment] = useState([]);
  //價格變數
  const [total, setTotal] = useState();
  const [priceOff, setPriceOff] = useState(-300);
  const [shipping, setShipping] = useState(150);

  //會員資訊
  const [memberData, setMemberData] = useState([]);

  //會員資訊變數
  const [userSid, setUserSid] = useState();
  const [recipient, setRecipient] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [homeNumber, setHomeNumber] = useState();
  const [address, setAddress] = useState();
  const [pricePayment, setPricePayment] = useState("信用卡");
  const [creditCardNumber, setCreditCardNumber] = useState();
  const [creditCardYear, setCreditCardYear] = useState();
  const [creditCardMonth, setCreditCardMonth] = useState();
  const [creditCardPassword, setCreditCardPassword] = useState();
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  const [smallDisplay, setSmallDisplay] = useState(1);
  const [nextPage, setNextPage] = useState(false);

  // 抓購物車LocalStorage
  function getLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    // console.log(JSON.parse(newCart));
    // console.log("newMember",JSON.parse(newMember).sid);

    setPayment(JSON.parse(newCart));
  }

  //進入頁面就抓取購物車的LocalStorage
  useEffect(() => {
    getLocalStorage();

  }, []);

  // 抓會員SIDLocalStorage
  function getUserSidLocalStorage() {

    const newMember = localStorage.getItem("data");


    setUserSid(JSON.parse(newMember).sid)
    console.log("userSid:", userSid);
  }

  // 進入頁面就抓取LocalStorage的會員Sid
  useEffect(() => {
    getUserSidLocalStorage();
  }, []);

  // 發送Fetch,從後端撈會員紀錄.
  async function getMemberData() {
    const url = "http://localhost:3000/try-member";
    const dataSid = { sid: JSON.parse(localStorage.getItem('data')).sid }
    const request = new Request(url, {
      method: "post",
      body: JSON.stringify(dataSid),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    console.log("response:", response)
    const data = await response.json();
    console.log("data:", data)
    console.log("userSid:", userSid)
    setMemberData(data);
    setRecipient(data[0].name)
    setPhoneNumber(data[0].phone)
    setAddress(data[0].address)
    setCountry(data[0].country)
    setTownship(data[0].township)
    setCreditCardNumber(data[0].card)
    setCreditCardPassword(data[0].cvc)
    setCreditCardMonth(data[0].cardDate.slice(0, 2))
    //  console.log("data[1].cardDate.slice(2):",data[1].cardDate.slice(0,2))
    setCreditCardYear(data[0].cardDate.slice(3))

  }

  //進入頁面就抓取會員資料
  useEffect(() => {
    getMemberData();
  }, []);


  // 發送Fetch,送訂單到後端.
  function paymentData() {
    const phonePattern = /^09\d{2}\d{3}\d{3}$/;
    let correct = true;

    if (!phonePattern.test(phoneNumber)) {
      correct = false;
      setSmallDisplay(0);
    }
    if (correct) {
      const d = {
        recipient: recipient,
        phoneNumber: phoneNumber,
        homeNumber: homeNumber,
        country: country,
        township: township,
        address: address,
        pricePayment: pricePayment,
        creditCardNumber: creditCardNumber,
        creditCardYear: creditCardYear,
        creditCardMonth: creditCardMonth,
        creditCardPassword: creditCardPassword,
        payment: payment,
      };
      console.log(d);
      setNextPage(true)

      const url = "http://localhost:3000/try-order";

      fetch(url, {
        method: "POST",
        body: JSON.stringify(d),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      });

      localStorage.removeItem("cart")

    }
  }

  if (nextPage === true) {
    return <Redirect to="/Paycomplete" />;
  }


  return (
    <>

      <form
        name="form1"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          paymentData();
        }}
      >
        <div className="PayCard m-auto">
          <h3 className="d-flex justify-content-center">你的訂單</h3>
          <PaymentCardMap total={total} setTotal={setTotal} />
          <div className="priceArea ml-auto d-flex">
            <div className="priceArea font">
              <div>折扣：</div>
              <div>運費：</div>
              <div>總計：</div>
            </div>
            <div className="priceArea font totalPrice">
              <div>NT$ {priceOff}</div>
              <div>NT$ {shipping}</div>
              <div>NT$ {total + shipping + priceOff}</div>
            </div>
          </div>

          <hr />
          <div className="recipient">
            <h3 className="d-flex justify-content-center">收件人資訊</h3>

            {/* 收件人資訊 */}
            <div>
              <p>
                收件人：
                {/* <small
                  style={{ color: "red" }}
                  className={smallDisplay === 1 ? "smallDisplay" : ""}
                >
                  *請輸入姓名
                </small> */}
              </p>
              <input
                placeholder="王大明"
                className="inputStyle"
                value={recipient}
                onChange={(e) => {
                  setRecipient(e.target.value);

                }}
              ></input>
              <p>
                手機號碼：
                <small
                  style={{ color: "red" }}
                  className={smallDisplay === 1 ? "smallDisplay" : ""}
                >
                  *請輸入手機號碼
                </small>
              </p>
              <input
                placeholder="0912123456"
                className="inputStyle"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              ></input>
              <p>市話：</p>
              <input
                placeholder="02-12345678"
                className="inputStyle"
                onChange={(e) => {
                  setHomeNumber(e.target.value);
                }}
              ></input>
              <p>
                地址：
                {/* <small
                  style={{ color: "red" }}
                  className={smallDisplay === 1 ? "smallDisplay" : ""}
                >
                  *請輸入地址
                </small> */}
              </p>

              <TWZipCode
                country={country}
                setCountry={setCountry}
                township={township}
                setTownship={setTownship}
              />

              <input
                className="address DisplayBlock"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></input>
              <h3 className="d-flex justify-content-center">發票</h3>
              <div className="">
                <label className="col-6 col-xl-3 LabelFont">
                  <input
                    type="radio"
                    name="Receipt"
                    className="paymentRadio"
                  ></input>
                  電子發票
                </label>
                <label className="col-6 col-xl-3 LabelFont">
                  <input
                    type="radio"
                    name="Receipt"
                    className="paymentRadio"
                  ></input>
                  捐贈發票
                </label>
                <label className="col-6 col-xl-3 LabelFont pr-1">
                  <input
                    type="radio"
                    name="Receipt"
                    className="paymentRadio"
                  ></input>
                  公司電子發票
                </label>
                <label className="col-6 col-xl-3 LabelFont">
                  <input
                    type="radio"
                    name="Receipt"
                    className="paymentRadio"
                  ></input>
                  手機載具
                </label>
              </div>
            </div>

            <hr />

            {/* 信用卡資訊 */}
            <div>
              <h3 className="d-flex justify-content-center">付款方式</h3>
              <select
                className="paymentSelect"
                onChange={(e) => {
                  setPricePayment(e.target.value);
                }}
              >
                <option value="信用卡">信用卡</option>
                <option value="貨到付款">貨到付款</option>
                <option value="歐富寶">歐富寶</option>
                <option value="PayPal">PayPal</option>
              </select>
              <div className="d-flex creditCardArea">
                <div className="creditCardNumber">
                  <div className="d-lg-block d-none">
                    {/* <Creaditcard
                      creditCardNumber={creditCardNumber}
                      setCreditCardNumber={setCreditCardNumber}
                      // creditCardUser={creditCardUser}
                      // setCreditCardUser={setCreditCardUser}
                      creditCardYear={creditCardYear}
                      setCreditCardYear={setCreditCardYear}
                      creditCardMonth={creditCardMonth}
                      setCreditCardMonth={setCreditCardMonth}
                      creditCardPassword={creditCardPassword}
                      setCreditCardPassword={setCreditCardPassword}
                    /> */}
                  </div>

                  {/* 卡號 */}
                  <div>
                    <p className="">
                      信用卡卡號：
                      {/* <small
                        style={{ color: "red" }}
                        className={smallDisplay === 1 ? "smallDisplay" : ""}
                      >
                        *請輸入卡號
                      </small> */}
                    </p>
                    <input
                      className="PhoneCreditCardInput"
                      value={creditCardNumber}
                      onChange={(e) => {
                        setCreditCardNumber(e.target.value);
                      }}
                    ></input>
                    <div className="">
                      <div className="d-flex ">
                        <div className="PhoneCreditCardDate">
                          <p>
                            有效期限：
                            {/* <small
                              style={{ color: "red" }}
                              className={
                                smallDisplay === 1 ? "smallDisplay" : ""
                              }
                            >
                              *請輸入日期
                            </small> */}
                          </p>
                          <input
                            value={creditCardYear}
                            onChange={(e) => {
                              setCreditCardYear(e.target.value);
                            }}
                            placeholder="YY"
                          ></input>
                          <span>年</span>
                          <input
                            value={creditCardMonth}
                            onChange={(e) => {
                              setCreditCardMonth(e.target.value);
                            }}
                            placeholder="MM"
                          ></input>
                          <span>月</span>
                        </div>

                        <div className="PhoneCreditCardDate1">
                          <p>
                            檢核碼：
                            {/* <small
                              style={{ color: "red" }}
                              className={
                                smallDisplay === 1 ? "smallDisplay" : ""
                              }
                            >
                              *請輸入檢核碼
                            </small> */}
                          </p>
                          <input
                            value={creditCardPassword}
                            onChange={(e) => {
                              setCreditCardPassword(e.target.value);
                            }}
                          ></input>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* to="/Paycomplete" */}
        <div className="paymentBtn mx-auto">
          <button className="SumitButton" type="submit">
            確定送出
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymentForm;
