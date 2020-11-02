import React, { useState, useEffect } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

function Reservation(props) {
  console.log('Reservation', props)
  return (
    <>
      <Breadcrumb />
      {/* <Carousel /> */}
      <div className="container mb-5">
        <div className="py-5 text-center">
          <img className="d-block mx-auto mb-4" src={require('../img/card01.jpg')} alt="" width="72" height="72"/>
          <h2>預約商家服務</h2>
          <p className="lead">簡單幾步驟，輕鬆預約ShakeBeard特約商家提供的多樣服務。</p>
        </div>
        <h4 className="my-3">一、確認預約項目</h4>
        <div className="row">
          <div className="card">
              <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Sculptor Barber</h5>
                <Link to="#" className="card-link">
                  男士理髮廳
                </Link>
                <Link to="#" className="card-link">
                  台北市大安區
                </Link>
              </div>
            </div>
            <div className="col-md-2 mb-3">
                  <strong className="storeName">商家名稱</strong>
                  <div>
                  storeName
                  </div>
                </div>
            <div className="col-md-2 mb-3">
                  <strong className="storeId">商家編號</strong>
                  <div>
                  storeId
                  </div>
                </div>
            <div className="col-md-2 mb-3">
                <strong className="serviceName">服務名稱</strong>
                <div>
                  serviceName
                </div>
            </div>
            <div className="col-md-2 mb-3">
              <strong className="serviceId">服務編號</strong>
              <div>
                serviceId
              </div>
            </div>
        </div>
        <h4 className="my-3">二、填寫資料</h4>
        <div className="row">
          <form className="needs-validation" novalidate>
              <div className="row">
                <div className="col-md-4 mb-3">
                <label for="firstName">訂購人姓氏</label>
                  <input type="text" className="form-control" id="firstName" placeholder="姓" value="" required/>
                  <div className="invalid-feedback">
                    Valid first name is required.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                <label for="lastName">訂購人名字</label>
                  <input type="text" className="form-control" id="lastName" placeholder="名" value="" required/>
                  <div className="invalid-feedback">
                    Valid last name is required.
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                <label for="username">帳號</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" id="username" placeholder="" required/>
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
                <div className="col-md-4 mb-3">
                <label for="mobile">連絡電話 <span className="text-muted">(必須，以便寄送通知)</span></label>
                <div className="input-group">
                  <input type="mobile" className="form-control" id="mobile" placeholder="" required/>
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
                <div className="col-md-8 mb-3">
                  <label for="email">聯絡信箱 <span className="text-muted">(必須，以便寄送通知)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="your@example.com"/>
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="col-md-8 mb-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="same-address"/>
                    <label className="custom-control-label" for="same-address">預約人資料與訂購人相同</label>
                  </div>
                </div>
                <div className="col-md-8 mb-3">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="save-info"/>
                    <label className="custom-control-label" for="save-info">存取資料</label>
                  </div>
                </div>
              </div>
            </form>
            <button className="btn btn-primary">送出</button>
        </div>
      </div>
    </>
  )
}

export default Reservation
