import React, { useState, useEffect } from "react";

function PaymentCreditCard(props) {
  return (
    <>
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
            <p>信用卡卡號：</p>
            <div className="PhoneDisplayNone">
              <input></input>
              <span>-</span>
              <input></input>
              <span>-</span>
              <input></input>
              <span>-</span>
              <input></input>
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

            {/* 手機板卡號 */}

            <div className="d-xl-flex PhoneDisplayNone">
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
            </div>
          </div>
          <div className="creditCardImg PhoneDisplayNone">123</div>
        </div>
      </div>
    </>
  );
}

export default PaymentCreditCard;
