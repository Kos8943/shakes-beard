import React, { useState, useEffect } from "react";
import ReservationOrderCheckCss from "../styles/ReservationOrderCheck.scss";

function ReservationOrderCheck(props) {
  return (
    <>
      <div className="rightArea col-9">
        <div className="optionTittle">預約查詢</div>
        <div className="decLine"></div>

        <div className="orderArea">
          <p className="ReservationOrderCheckSid">預約編號：12345678</p>
          <div className="d-lg-flex">
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckShop">
              預約商家
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckService">
              預約項目
            </div>
            <div className="ReservationOrderTableCss ReservationOrderCheckDate">預約日期</div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckPrice">
              總價
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckStatus">
              預約狀態
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckCancel">
              取消預約
            </div>
          </div>

          <div className="d-lg-flex">
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckShop2">
              Sculptor Barber	
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckService2">
              男士理髮
            </div>
            <div className="ReservationOrderTableCss ReservationOrderCheckDate2">2020/02/20</div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckPrice2">
              NT$8,796
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckStatus2">
              預約成立
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckCancel2">
              確認中
            </div>
          </div>

          {/* <div className="d-lg-flex mt-3">
            <div className="ReservationOrderCheckDetailsText">明細</div>
            <div className="ReservationOrderCheckDetails">
              <img
                src="./imgs/upload.svg"
                className="ReservationOrderCheckDetailsUpArrow"
              ></img>
            </div>
          </div> */}
          <div className="ReservationOrderCheckLine"></div>
        </div>

        <div className="orderArea">
          <p className="ReservationOrderCheckSid">預約編號：12345678</p>
          <div className="d-lg-flex">
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckShop">
              預約商家
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckService">
              預約項目
            </div>
            <div className="ReservationOrderTableCss ReservationOrderCheckDate">預約日期</div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckPrice">
              總價
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckStatus">
                預約狀態
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckCancel">
              取消預約
            </div>
          </div>

          <div className="d-lg-flex">
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckShop2">
              Sculptor Barber
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckService2">
              男士修容
            </div>
            <div className="ReservationOrderTableCss ReservationOrderCheckDate2">2020/02/20</div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckPrice2">
              NT$8,796
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckStatus2">
              預約成立
            </div>
            <div className="ReservationOrderTableCss ReservationOrderTableWidth ReservationOrderCheckCancel2">
              已取消
            </div>
          </div>
          {/* <div className="d-lg-flex mt-3">
            <div className="ReservationOrderCheckDetailsText">明細</div>
            <div className="ReservationOrderCheckDetails">
              <img
                src="./imgs/upload.svg"
                className="ReservationOrderCheckDetailsUpArrow"
              ></img>
            </div>
          </div> */}
          {/* <div className="ReservationOrderCheck cartItem d-xl-flex mx-auto">
            <img className="ReservationOrderCheck itemImg" src="./imgs/1-3.jpg"></img>
            <div className="ReservationOrderCheck itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>
            <span className="ReservationOrderCheck productTpye">經典黑</span>
            <span className="ReservationOrderCheck amount">1</span>
            <span className="ReservationOrderCheck unitPrice">NT$1,441</span>
            <span className="ReservationOrderCheck subtotal">NT$2,882</span>
          </div> */}
          {/* <div className="ReservationOrderCheckLine"></div> */}
        </div>
      </div>
    </>
  );
}

export default ReservationOrderCheck;
