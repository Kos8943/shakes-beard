/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import CartOrderCheckCss from "../styles/CartOrderCheckCss.scss";

function CartOrderCheck(props) {
  const [orderCheck, setOrderCheck] = useState([]);

  // 發送Fetch,從後端撈訂單紀錄.
  async function getMemberData() {
    const url = "http://localhost:3000/try-member";
    const dataSid = {sid: JSON.parse(localStorage.getItem('data')).sid}
    const request = new Request(url, {
      method: "post",
      body: JSON.stringify(dataSid),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    console.log("response:",response)
    const data = await response.json();
  }

  return (
    <>
      <div className="rightArea col-9">
        <div className="optionTittle">訂單查詢</div>
        <div className="decLine"></div>
        <div className="orderArea">
          <p className="OrderCheckSid">訂單編號：12345678</p>
          <div className="d-lg-flex">
            <div className="OrderTableCss OrderCheckDate">日期</div>
            <div className="OrderTableCss OrderTableWidth OrderCheckStatus">
              訂單狀態
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckReturn">
              收件人
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPrice">
              總價
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPayment">
              付款方式
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckDelivery">
              配送狀態
            </div>
          </div>

          <div className="d-lg-flex">
            <div className="OrderTableCss OrderCheckDate2">2020/02/20</div>
            <div className="OrderTableCss OrderTableWidth OrderCheckStatus2">
              訂單成立
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckReturn2">
              炭治郎
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPrice2">
              NT$8,796
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPayment2">
              信用卡
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckDelivery2">
              已送達
            </div>
          </div>
          <div className="d-lg-flex mt-3">
            <div className="OrderCheckDetailsText">明細</div>
            <div className="OrderCheckDetails">
              <img
                src="./imgs/upload.svg"
                className="OrderCheckDetailsUpArrow"
              ></img>
            </div>
          </div>
          <div className="OrderCheck cartItem d-xl-flex mx-auto">
            <img className="OrderCheck itemImg" src="./imgs/1-3.jpg"></img>
            <div className="OrderCheck itemName my-auto">
              Ritmo di vita 陀飛輪袖扣
            </div>
            <span className="OrderCheck productTpye">經典黑</span>
            <span className="OrderCheck amount">1</span>
            <span className="OrderCheck unitPrice">NT$1,441</span>
            <span className="OrderCheck subtotal">NT$2,882</span>
          </div>
          <div className="OrderCheckLine"></div>
        </div>
      </div>
    </>
  );
}

export default CartOrderCheck;
