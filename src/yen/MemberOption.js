/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import MemberOptionCss from "./styles/MemberOptionCss.scss";
import MemberDataUpdateTable from "./components/MemberDataUpdateTable";
import MemberPasswordUpdateTable from "./components/MemberPasswordUpdateTable";
import MemberPreferenceSetting from "./components/MemberPreferenceSetting";
import MemberFavorites from "./components/MemberFavorites";
import CartOrderCheck from "../kos/components/CartOrderCheck";
import ReservationOrderCheck from "../chen/components/ReservationOrderCheck";
import { Router, Route, Link, Switch, Redirect } from "react-router-dom";

function MemberOption(props) {
  const [pageTitle, setPageTitle] = useState("資料修改");
  const { isAuth, setIsAuth } = props;

  if(isAuth===false) return <Redirect to="/login" />

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div className="userName d-lg-none">王大明</div>
          <div className="decLine  d-lg-none"></div>
          <div className="leftArea col-12 col-sm-2 col-md-2">
            <div className="userName d-none d-lg-block">王大明</div>
            <div className="decLine d-none d-lg-block"></div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("資料修改");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "資料修改" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("資料修改");
                }}
              >
                資料修改
              </div>
            </div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("密碼修改");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "密碼修改" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("密碼修改");
                }}
              >
                密碼修改
              </div>
            </div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("偏好設定");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "偏好設定" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("偏好設定");
                }}
              >
                偏好設定
              </div>
            </div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("追蹤清單");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "追蹤清單" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("追蹤清單");
                }}
              >
                追蹤清單
              </div>
            </div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("訂單查詢");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "訂單查詢" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("訂單查詢");
                }}
              >
                訂單查詢
              </div>
            </div>

            <div className="d-flex flex-column">
              <img
                src="./imgs/1-3.jpg"
                className="PhoneIcon"
                onClick={() => {
                  setPageTitle("預約查詢");
                }}
              ></img>
              <div
                className={`option ${
                  pageTitle === "預約查詢" ? "thisPage" : ""
                }`}
                onClick={() => {
                  setPageTitle("預約查詢");
                }}
              >
                預約查詢
              </div>
            </div>
          </div>

          <div className="decLine  d-lg-none"></div>

          {pageTitle === "資料修改" ? (
            <MemberDataUpdateTable title="資料修改" />
          ) : (
            ""
          )}
          {pageTitle === "密碼修改" ? (
            <MemberPasswordUpdateTable title="密碼修改" />
          ) : (
            ""
          )}
          {pageTitle === "偏好設定" ? (
            <MemberPreferenceSetting title="偏好設定" />
          ) : (
            ""
          )}
          {pageTitle === "追蹤清單" ? <MemberFavorites title="追蹤清單" /> : ""}
          {pageTitle === "訂單查詢" ? <CartOrderCheck title="訂單查詢" /> : ""}
          {pageTitle === "預約查詢" ? (
            <ReservationOrderCheck title="預約查詢" />
          ) : (
            ""
          )}
        </div>
      </div>

      {/* <div className="rightArea col-9">
            <div className="optionTittle">資料修改</div>
            <div className="decLine"></div>
            <div className="">
                {}
            </div>
        </div> */}
    </>
  );
}

export default MemberOption;
