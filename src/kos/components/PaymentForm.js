import React, { useState } from "react";
import PaymentCard from "./PaymentCard";
import PaymentPrice from "./PaymentPrice";
import { Link } from "react-router-dom";
import Creaditcard from "./Creaditcard";
import TWZipCode from "./TWZipCode";

function PaymentForm(props) {
  return (
    <>
      <form>
        <div className="PayCard">
          <h3 className="d-flex justify-content-center">你的訂單</h3>

          <PaymentCard />
          <PaymentPrice />
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
              {/* <select className="addressSelect">
          <option value="台北市">台北市</option>
          <option value="新北市">新北市</option>
          <option value="桃園市">桃園市</option>
        </select>
        <select className="addressSelect">
          <option value="大安區">大安區</option>
          <option value="中正區">中正區</option>
          <option value="內湖區">內湖區</option>
        </select> */}
              <input className="address DisplayBlock"></input>
              <h3 className="d-flex justify-content-center">發票</h3>
              <div className="">
                <label className="col-6 col-xl-3 LabelFont">
                  <input type="radio" className="radio"></input>個人電子發票
                </label>
                <label className="col-6 col-xl-3 LabelFont">
                  <input type="radio" className="radio"></input>捐贈發票
                </label>
                <label className="col-6 col-xl-3 LabelFont pr-1">
                  <input type="radio" className="radio"></input>公司戶電子發票
                </label>
                <label className="col-6 col-xl-3 LabelFont">
                  <input type="radio" className="radio"></input>手機載具
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

                  {/* <p>信用卡卡號：</p> */}
                  {/* <div className="PhoneDisplayNone">
              <input></input>
              
            </div> */}
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

                  {/*  桌機板卡號 */}
                  {/* <div className="d-xl-flex PhoneDisplayNone">
              <div className="creditCardDate">
                <p>有效期限：</p>
                <input></input>
                <span>年</span>
                <input></input>
                <span>月</span>
              </div>
              <div className="creditCardDate1">
                <p>卡背後3碼：</p>
                <input></input>
              </div>
            </div> */}
                </div>

                {/* <div className="creditCardImg PhoneDisplayNone">123</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="paymentBtn mx-auto">
          <Link to="/Paycomplete">
            <button className="SumitButton" type="submit">確定送出</button>
          </Link>
        </div>
      </form>
    </>
  );
}


export default PaymentForm