/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import PaymentCard from "./PaymentCard";
import PaymentPrice from "./PaymentPrice";
import { Link, Redirect } from "react-router-dom";
import Creaditcard from "./Creaditcard";
import TWZipCode from "./TWZipCode";
import PaymentCardMap from "./PayMentCardMap"

function PaymentForm(props) {
  const [payment, setPayment] = useState([])
  const [total, setTotal] = useState()
  const [priceOff, setPriceOff] = useState(300)
  const [shipping, setShipping] = useState(150)
  // const [paymentImg, setPaymentDataImg] = useState()
  // const [paymentproductName, setPaymentproductName] = useState()
  // const [paymentProductType, setPaymentProductType] = useState()
  // const [paymentAmount, setPaymentAmount] = useState()
  // const [paymentSubtotal, setPaymentSubtotal] = useState()
  // const [paymentUnitPrice, setPaymentUnitPrice] = useState()
  // const [paymentPriceOff, setPaymentPriceOff] = useState()
  // const [paymentShipping, setPaymentShipping] = useState()
  // const [paymentTotal, setPaymentTotal] = useState()

 
// 抓LocalStorage
  function getLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    console.log(JSON.parse(newCart));

    setPayment(JSON.parse(newCart));
  }

  useEffect(() => {
    getLocalStorage();
  }, []);


  // 發送Fetch用
  function paymentData() {
    const d = {
      name: document.querySelector(".itemName").value,
    };

    // console.log(d);
    // return <Redirect to="/homepage" />;
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
            <PaymentCardMap total={total} setTotal={setTotal}/>
          <div className="priceArea ml-auto d-flex">
            <div className="priceArea font">
              <div>折扣：</div>
              <div>運費：</div>
              <div>總計：</div>
            </div>
            <div className="priceArea font totalPrice">
              <div>NT$ {priceOff}</div>
              <div>NT$ {shipping}</div>
              <div>NT$ {total + shipping - priceOff}</div>
            </div>
          </div>

          <hr />
          <div className="recipient">
            <h3 className="d-flex justify-content-center">收件人資訊</h3>

            {/* 收件人資訊 */}
            <div>
              <p>收件人：</p>
              <input placeholder="王大明" className="inputStyle"></input>
              <p>手機：</p>
              <input placeholder="0912123456" className="inputStyle"></input>
              <p>市話：</p>
              <input placeholder="02-12345678" className="inputStyle"></input>
              <p>地址：</p>

              <TWZipCode />
             
              <input className="address DisplayBlock"></input>
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
              <select className="paymentSelect">
                <option value="信用卡">信用卡</option>
                <option value="貨到付款">貨到付款</option>
                <option value="歐富寶">歐富寶</option>
                <option value="PayPal">PayPal</option>
              </select>
              <div className="d-flex creditCardArea">
                <div className="creditCardNumber">
                  <div className="d-lg-block d-none">
                    <Creaditcard />
                  </div>

                
                  {/* 手機板卡號 */}
                  <input className="PhoneCreditCardInput webDisplay"></input>
                  <div className="webDisplay">
                    <div className="d-flex ">
                      <div className="PhoneCreditCardDate">
                        <p>有效期限：</p>
                        <input></input>
                        <span>年</span>
                        <input></input>
                        <span>月</span>
                      </div>

                      <div className="PhoneCreditCardDate1">
                        <p>卡背後3碼：</p>
                        <input></input>
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
          <Link to=""></Link>
          <button className="SumitButton" type="submit" >
            確定送出
          </button>
        </div>
      </form>
    </>
  );
}

export default PaymentForm;
