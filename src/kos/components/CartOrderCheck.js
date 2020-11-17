/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import CartOrderCheckCss from "../styles/CartOrderCheckCss.scss";


function CartOrderCheck(props) {
  const [orderCheck, setOrderCheck] = useState([]);
  const [orderSid, setOrderSid] = useState();
  const [orderImg, setOrderImg] = useState();
  const [orderProductName, setOrderProductName] = useState();
  const [orderType, setOrderType] = useState();
  const [orderAmount, setOrderAmount] = useState();
  const [orderUnitprice, setOrderUnitprice] = useState();
  const [orderName, setOrderName] = useState();
  const [orderDate, setOrderDate] = useState();

  // 發送Fetch,從後端撈訂單紀錄.
  async function getMemberData() {
    const url = "http://localhost:3000/try-ordercheck";
    // const dataSid = {sid: JSON.parse(localStorage.getItem('data')).sid}
    const request = new Request(url, {
      method: "get",
      // body: JSON.stringify(dataSid),
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    console.log("response:", response);
    const data = await response.json();
    console.log("data:", data);
    setOrderCheck(data);
    setOrderSid(data[0].ordersid);
    setOrderImg(data[0].img);
    setOrderProductName(data[0].protuctname);
    setOrderType(data[0].type);
    setOrderAmount(data[0].amount);
    setOrderUnitprice(data[0].unitprice);
    setOrderName(data[0].recipient);
    setOrderDate(data[0].data);
  }

  useEffect(() => {
    getMemberData();
  }, []);

  return (
    <>
      <div className="rightArea col-9">
        <div className="optionTittle">訂單查詢</div>
        <div className="decLine"></div>
        <div className="orderArea">
          <p className="OrderCheckSid" onClick={(e) => {console.log(new Date().Format("yyyy-MM-dd"));}}>訂單編號：{orderSid}</p>
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
            <div className="OrderTableCss OrderCheckDate2">{orderDate}</div>
            <div className="OrderTableCss OrderTableWidth OrderCheckStatus2">
              訂單成立
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckReturn2">
              {orderName}
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPrice2">
              NT$ {orderAmount * orderUnitprice}
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckPayment2">
              信用卡
            </div>
            <div className="OrderTableCss OrderTableWidth OrderCheckDelivery2">
              收到訂單
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
              {orderProductName}
            </div>
            <span className="OrderCheck productTpye">{orderType}</span>
            <span className="OrderCheck amount">{orderAmount}</span>
            <span className="OrderCheck unitPrice">NT$ {orderUnitprice}</span>
            <span className="OrderCheck subtotal">NT$ {orderAmount * orderUnitprice}</span>
          </div>
          <div className="OrderCheckLine"></div>
        </div>
      </div>
    </>
  );
}

export default CartOrderCheck;
