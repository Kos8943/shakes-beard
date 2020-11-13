/* eslint-disable no-useless-concat */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import PaymentCard from "./PaymentCard";
import PaymentPrice from "./PaymentPrice";
import { Link, Redirect } from "react-router-dom";
import Creaditcard from "./Creaditcard";
import TWZipCode from "./TWZipCode";

function PaymentForm(props) {
  const [paymentDataBD, setPaymentDataBD] = useState([]);
  const [sss, setsss] = useState(0)
  // const [paymentImg, setPaymentDataImg] = useState()
  // const [paymentproductName, setPaymentproductName] = useState()
  // const [paymentProductType, setPaymentProductType] = useState()
  // const [paymentAmount, setPaymentAmount] = useState()
  // const [paymentSubtotal, setPaymentSubtotal] = useState()
  // const [paymentUnitPrice, setPaymentUnitPrice] = useState()
  // const [paymentPriceOff, setPaymentPriceOff] = useState()
  // const [paymentShipping, setPaymentShipping] = useState()
  // const [paymentTotal, setPaymentTotal] = useState()

  async function getPaymentDataFromDB() {
    const url = "http://localhost:3000/try-payment";

    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();

    setPaymentDataBD(data);
    console.log(data);
  }

  useEffect(() => {
    getPaymentDataFromDB();
  }, []);

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
          {paymentDataBD.map((value, index) => {
            return (
              <>
                {/* 網頁 */}
                <div className="cartItem d-xl-flex">
                  <img
                    className="itemImg"
                    src={"./imgs/hsuan/" + `${paymentDataBD[index].img}`}
                  ></img>
                  <div className="itemName my-auto">
                    {paymentDataBD[index].name}
                  </div>
                  <span className="productTpye">
                    {paymentDataBD[index].type}
                  </span>
                  <span className="amount">{paymentDataBD[index].amount}</span>
                  <span className="unitPrice">
                    NT${paymentDataBD[index].unitPrice}
                  </span>
                  <span className="subtotal">
                    NT${paymentDataBD[index].subtotal}
                  </span>
                </div>

                {/* 手機 */}

                <div className="cartItemPhone">
                  <img
                    className="itemImg"
                    src={"./imgs/hsuan/" + `${paymentDataBD[index].img}`}
                  ></img>
                  <div className="itemName"> {paymentDataBD[index].name}</div>
                  <div className="KosProjectType">
                    {paymentDataBD[index].type}
                  </div>
                  <div className="PaymentunitPrice">
                    NT${paymentDataBD[index].unitPrice}
                  </div>

                  <div className="PaymentQty">
                    X{paymentDataBD[index].amount}
                  </div>
                  <div className="PaymentSubtotal">
                    NT${paymentDataBD[index].subtotal}
                  </div>
                </div>
              </>
            );
          })}

          <div className="priceArea ml-auto d-flex">
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
