import React, { useState, useEffect } from "react";
import CartCss from "../styles/CartCss.scss";
import PayCss from "../styles/PayCss.scss";
import Delete from "../icon/delete.svg";
import CartBuyStep from "../components/CartBuyStep";
import PaymentCard from "../components/PaymentCard";
import PaymentPrice from "../components/PaymentPrice";
import PaymentAddress from "../components/PaymentAddress";
import PaymentCreditCard from "../components/PaymentCreditCard";
import { Link } from "react-router-dom";

function Payment(props) {
  return (
    <>
      <CartBuyStep step="2" />

      <div className="PayCard">
        <h3 className="d-flex justify-content-center">你的訂單</h3>

        <PaymentCard />
        <PaymentPrice />
        <hr />
        <div className="recipient">
          <h3 className="d-flex justify-content-center">收件人資訊</h3>
          <form>
            <PaymentAddress />
            <hr />
            <PaymentCreditCard />
          </form>
        </div>
      </div>
      <div className="paymentBtn mx-auto">
        <Link to="/Paycomplete">
          <button className="SumitButton">確定送出</button>
        </Link>
      </div>

      {/* <div className="cartArea">
                    <h2 className="d-flex justify-content-center">送出訂單</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className="cartStepCircle otherStep">1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle thisStep">2</div>
                        <div className="cartStepFont">付款方式</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">3</div>
                        <div className="cartStepFont">訂單完成</div>
                    </div>   
                    </div>
            </div> */}

      {/* <div className="cartItem d-xl-flex">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div> */}
      {/* <div className="cartItem d-flex">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div> */}

      {/* <div className="cartItemPhone">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName">Ritmo di vita 陀飛輪袖扣</div>
                        <div className="KosProjectType">經典黑</div>
                        <div className="PaymentunitPrice">NT$1,441</div>
                
                        <div className="PaymentQty">X1</div>
                        <div className="PaymentSubtotal">NT$2,882</div>
                    </div> */}

      {/* <div className="priceArea ml-auto d-flex">
                        <div className="priceArea font">
                            <div>折扣：</div>
                            <div>運費：</div>
                            <div>總計：</div>
                        </div>
                        <div className="priceArea font totalPrice">
                            <div>NT$ -150</div>
                            <div>NT$ 150</div>
                            <div>NT$ 8,796</div>
                        </div> 
                    </div>              */}

      {/* <div>
              <p>收件人：</p>
              <input placeholder="王大明" className="inputStyle"></input>
              <p>手機：</p>
              <input placeholder="0912123456" className="inputStyle"></input>
              <p>市話：</p>
              <input placeholder="02-12345678" className="inputStyle"></input>
              <p>地址：</p>
              <select className="addressSelect">
                <option value="台北市">台北市</option>
                <option value="新北市">新北市</option>
                <option value="桃園市">桃園市</option>
              </select>
              <select className="addressSelect">
                <option value="大安區">大安區</option>
                <option value="中正區">中正區</option>
                <option value="內湖區">內湖區</option>
              </select>
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
            </div> */}

      {/* <div>
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
                  手機板卡號
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

                  手機板卡號

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
            </div> */}
    </>
  );
}

export default Payment;
