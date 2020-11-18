/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import MemberOptionCss from "./styles/MemberOptionCss.scss";
import MemberDataUpdateTable from "./components/MemberDataUpdateTable";
import MemberPasswordUpdateTable from "./components/MemberPasswordUpdateTable";
import MemberPreferenceSetting from "./components/MemberPreferenceSetting";
import MemberFavorites from "./components/MemberFavorites";
import CartOrderCheck from "../kos/components/CartOrderCheck";
import ReservationOrderCheck from "../chen/components/ReservationOrderCheck";
import { Redirect } from "react-router-dom";
import membericon from "../yen/img/phone/icons8-user-90.png";
import pass from "../yen/img/phone/icons8-password-48.png";
import crediticon from "../yen/img/phone/icons8-credit-card-100.png";
import list from "../yen/img/phone/icons8-tasklist-90.png";
import shopping from "../yen/img/phone/icons8-credit-card-100.png";
import shop from "../yen/img/phone/icons8-barber-pole-90.png";
import heart from "../yen/img/phone/icons8-heart-100.png";

function MemberOption(props) {
  const {
    isAuth,
    setIsAuth,
    account,
    setAccount,
    password,
    setPassword,
    authAccount,
    setAuthAccount,
    authPassword,
    setAuthPassword,
    name,
    setName,
  } = props;

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [country, setCountry] = useState(-1);
  const [township, setTownship] = useState(-1);
  const [address, setAddress] = useState("");
  const [card, setCard] = useState("");
  const [cardDate, setCardDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [barCode, setBarCode] = useState("");
  const [invoice, setInvoice] = useState("");
  const [favorite, setFavorite] = useState("");
  const [radio, setRadio] = useState("");

  function getFrom() {
    if (localStorage.getItem("data")) {
      const url = "http://localhost:3000/yen/member-data";
      const data = {
        sid: JSON.parse(localStorage.getItem("data")).sid,
      };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((r) => r.json())

        .then((o) => {
          console.log("react收到的", o);
          setAuthAccount(o[0].authAccount);
          setName(o[0].name);
          setEmail(o[0].email);
          setBirth(o[0].birth);
          setPhone(o[0].phone);
          setAddress(o[0].address);
          setCvc(o[0].cvc);
          setInvoice(o[0].invoice);
          setCard(o[0].card);
          setCardDate(o[0].cardDate);
          setBarCode(o[0].barCode);

          if (o[0].country !== "") {
            setCountry(o[0].country);
          }

          if (o[0].township !== "") {
            setTownship(o[0].township);
          }
        });
      // console.log(memberData);
    } else {
    }
  }
  useEffect(() => {
    getFrom();
  }, []);

  const [pageTitle, setPageTitle] = useState("資料修改");

  // console.log(isAuth)

  if (isAuth === false || isAuth === null) return <Redirect to="/login2" />;

  if (localStorage.getItem("google")) {
    setName(localStorage.getItem("googleName"));
  }
  
  if (localStorage.getItem("google")) {
    setAuthAccount(localStorage.getItem("googleUid"));
  }

  return (
    <>
      <div className="container-fluid changeLinkColor">
        <div className="row justify-content-between">
          <div className="userName d-lg-none">{name}</div>
          <div className="decLine  d-lg-none"></div>
          <div className="leftArea col-12 col-sm-2 col-md-2">
            <div className="userName d-none d-lg-block">{name}</div>
            <div className="decLine d-none d-lg-block"></div>

            <div className="d-flex flex-column">
              <img
                src={membericon}
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

            {/* <Link to="memberoption/password" className="changeLinkColor"> */}
            <div className="d-flex flex-column">
              <img
                src={pass}
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
            {/* </Link> */}
            <div className="d-flex flex-column">
              <img
                src={crediticon}
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
                src={heart}
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
                src={list}
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
                src={shop}
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
            <MemberDataUpdateTable
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              authAccount={authAccount}
              setAuthAccount={setAuthAccount}
              authPassword={authPassword}
              setAuthPassword={setAuthPassword}
              account={account}
              setAccount={setAccount}
              password={password}
              setPassword={setPassword}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              birth={birth}
              setBirth={setBirth}
              phone={phone}
              setPhone={setPhone}
              address={address}
              setAddress={setAddress}
              country={country}
              setCountry={setCountry}
              township={township}
              setTownship={setTownship}
              title="資料修改"
            />
          ) : (
            ""
          )}

          {pageTitle === "密碼修改" ? (
            <MemberPasswordUpdateTable title="密碼修改" />
          ) : (
            ""
          )}

          {pageTitle === "偏好設定" ? (
            <MemberPreferenceSetting
              isAuth={isAuth}
              setIsAuth={setIsAuth}
              card={card}
              setCard={setCard}
              cardDate={cardDate}
              setCardDate={setCardDate}
              cvc={cvc}
              setCvc={setCvc}
              invoice={invoice}
              setInvoice={setInvoice}
              barCode={barCode}
              setBarCode={setBarCode}
              title="偏好設定"
            />
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
