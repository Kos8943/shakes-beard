import React, { useState, useEffect } from "react";
import CartCss from "../styles/CartCss.scss";
import Complete from "../styles/Complete.scss";
import { Link } from "react-router-dom";
import CardBuyStep from "../components/CartBuyStep";

function Paycomplete() {
const [member, setMember] = useState([]);
  const [orderCheck, setOrderCheck] = useState([]);
  const [name, setName] = useState();
  const [orderSid, setOrderSid] = useState();
  const [orderPrice, setOrderPrice] =useState();
  const [orderAmount, setOrderAmount] = useState();


  async function getMemberData() {
    const url = "http://localhost:3000/try-member";
    const dataSid = { sid: JSON.parse(localStorage.getItem("data")).sid };
    const request = new Request(url, {
      method: "post",
      body: JSON.stringify(dataSid),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    console.log("response:", response);
    const data = await response.json();
    setMember(data)
    setName(data[0].name)
  }

  //進入頁面就抓取會員資料
  useEffect(() => {
    getMemberData();
  }, []);

  async function getOrderData() {
    const url = "http://localhost:3000/try-ordercheck";
    // const dataSid = { sid: JSON.parse(localStorage.getItem("data")).sid };
    const request = new Request(url, {
      method: "get",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    console.log("response:", response);
    const data = await response.json();

    setOrderCheck(data);
    setOrderSid(data[0].ordersid)
    setOrderPrice(data[0].unitprice)
    setOrderAmount(data[0].amount)
  }

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <>
      <CardBuyStep step="3" />

      <div className="d-flex justify-content-around payComplete">
        <div>
          <h4
            onClick={(e) => {
              console.log(orderCheck[0]);
            }}
          >
            親愛的 {name}
          </h4>
          <p>非常感謝你在Shakes Beard購物！</p>
          <p>我們已收到你的訂單！</p>
          <p>為了讓你盡快收到貨品，我們正準備發貨。</p>
          <p>當貨品從倉庫發出，我們會再以電子郵件通知你。</p>
          <p>關於詳細訂單內容，請點擊下方按鈕檢查。</p>
        </div>
        <div></div>
      </div>

      <hr />
      <div className="d-flex justify-content-around checkList">
        <div>
          <h4>你的訂單：</h4>
          <p>訂單號碼：{orderSid}</p>
          <p>總金額：NT$ {orderPrice * orderAmount +150 -300}</p>
          <p>購買件數：{orderAmount}</p>
        </div>
        <div className="checkOrder">
          <Link to="/memberoption">
            <button className="checkOrderButton">查看訂單＞</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Paycomplete;
