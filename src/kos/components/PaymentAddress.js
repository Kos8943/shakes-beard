import React, { useState, useEffect } from "react";

function PaymentAddress(props) {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}

export default PaymentAddress;
