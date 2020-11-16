import React, { useState, useEffect } from "react";
import PreferenceSettingCss from "../styles/PreferenceSettingCss.scss";
import masterimg from "../img/card/001-mastercard.svg";
import visaimg from "../img/card/002-visa.svg";
import americanimg from "../img/card/003-american-express.svg";
import { Modal, Button } from "react-bootstrap";


function MemberPreferenceSetting(props) {
  const refreshPage = () => {
    window.location.reload();
  };
  const {
    isAuth,
    setIsAuth,
    cvc,
    setCvc,
    invoice,
    setInvoice,
    barCode,
    setBarCode,
    cardDate,
    setCardDate,
    card,
    setCard,
  } = props;

  const [alertStarsCard, setAlertStarsCard] = useState(true);
  const [alertStarsCardDate, setAlertStarsCardDate] = useState(true);
  const [alertStarsCvc, setAlertStarsCvc] = useState(true);

  const [settingSuccess, setSettingSuccess] = useState('');

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const cardPatternVisa = /^4\d{3}([\ \-]?)\d{4}\1\d{4}\1\d{4}$/;
  const cardPatternMasterCard = /^5[1-5]\d{2}([\ \-]?)\d{4}\1\d{4}\1\d{4}$/;
  const cardPatternAmerican = /^3[47]\d\d([\ \-]?)\d{6}\1\d{5}$/;

  const cardDatePattern = /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01]))*$/;

  const visa = cardPatternVisa.test(card);
  const master = cardPatternMasterCard.test(card);
  const american = cardPatternAmerican.test(card);
  function check() {
    //VISA  4012-8888-8888-1881 | MasterCard 5111005111051128  | American Express 371449635398431   3714-496353-98431

    //信用卡格式
    if (visa || master || american) {
      setAlertStarsCard(true);
    } else {
      setAlertStarsCard(false);
    }

    //有效日期
    if (!cardDate || !cardDatePattern.test(cardDate)) {
      setAlertStarsCardDate(false);
    } else {
      setAlertStarsCardDate(true);
    }

    //檢核碼
    if (!cvc || cvc.length < 3) {
      setAlertStarsCvc(false);
    } else {
      setAlertStarsCvc(true);
    }
  }

  function setting() {
    const a = alertStarsCard && alertStarsCardDate && alertStarsCvc;
    if (a == true) {
      const url = "http://localhost:3000/yen/setting";

      const data = {
        sid: JSON.parse(localStorage.getItem("data")).sid,
        card,
        cardDate,
        cvc,
        invoice,
        barCode,
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
          if (o === false) {
            // alert("密碼錯誤");
            setSettingSuccess(false)
          } else {
            // alert("修改完成");
            setSettingSuccess(true)
          }
          setTimeout(() => {
            handleShow();
          }, 10);

          setTimeout(() => {
            handleClose();
          }, 1050);

        });
    }
  }

  // useEffect(() => {}, []);

  return (
    <>
      <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>

        <form
          className="settingForm"
          onSubmit={(e) => {
            e.preventDefault();
            setting();
          }}
        >
          <div className="tittle2">付款方式</div>

          <div>
            <span class={` ${alertStarsCard ? "redNone" : "red"}`}>*</span>
            信用卡卡號
            <span class={` ${alertStarsCard ? "redNone" : "redText"}`}>
              請填寫正確格式
            </span>
          </div>
          <div className="d-flex">
            <input
              type="text"
              className="cardsettingInput"
              value={card}
              onChange={(e) => {
                setCard(e.target.value);
              }}
            ></input>
            <img
              src={americanimg}
              className={`creditCardIcon ${
                cardPatternAmerican.test(card) ? "creditCardDisplay" : ""
              }`}
            />
            <img
              src={masterimg}
              className={`creditCardIcon ${
                cardPatternMasterCard.test(card) ? "creditCardDisplay" : ""
              }`}
            />
            <img
              src={visaimg}
              className={`creditCardIcon ${
                cardPatternVisa.test(card) ? "creditCardDisplay" : ""
              }`}
            />
          </div>

          <div>
            {" "}
            <span class={` ${alertStarsCardDate ? "redNone" : "red"}`}>*</span>
            有效日期(MM/YY)
            <span class={` ${alertStarsCardDate ? "redNone" : "redText"}`}>
              請填寫正確格式
            </span>
          </div>
          <input
            type="text"
            className="settingInputBack"
            placeholder="MM/YY"
            value={cardDate}
            onChange={(e) => {
              setCardDate(e.target.value);
            }}
          ></input>

          <div>
            <span class={` ${alertStarsCvc ? "redNone" : "red"}`}>*</span>
            CVC檢核碼(3碼)
            <span class={` ${alertStarsCvc ? "redNone" : "redText"}`}>
              請填寫正確格式
            </span>
          </div>
          <input
            type="text"
            className="settingInputBack"
            placeholder="信用卡背面3碼"
            maxlength="3"
            value={cvc}
            onChange={(e) => {
              setCvc(e.target.value);
            }}
          ></input>

          <div className="tittle2">發票設定</div>

          <div>
            <input
              type="radio"
              id="personal"
              name="invoice"
              value="兩聯式發票"
              checked={invoice === "兩聯式發票"}
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            />
            <label for="personal">兩聯式發票(個人)</label>
          </div>

          <div>
            <input
              type="radio"
              id="company"
              name="invoice"
              value="三聯式發票"
              checked={invoice === "三聯式發票"}
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            ></input>

            <label for="company">三聯式發票(公司行號)</label>
          </div>

          <div>
            <input
              type="radio"
              id="electronic"
              name="invoice"
              value="電子發票"
              checked={invoice === "電子發票"}
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            ></input>

            <label for="electronic">電子發票</label>
            <input
              type="text"
              className="electronic"
              value={`${invoice === "電子發票" ? barCode : ""}`}
              placeholder="手機條碼"
              onChange={(e) => {
                setBarCode(e.target.value);
              }}
            ></input>
          </div>

          <div>
            <input
              type="radio"
              id="donate"
              name="invoice"
              value="捐贈發票"
              checked={invoice === "捐贈發票"}
              onChange={(e) => {
                setInvoice(e.target.value);
              }}
            ></input>
            <label for="donate">捐贈發票</label>
          </div>

          <div className="settingbtnDir">
            <button
              type="button"
              onClick={refreshPage}
              className="settingCancle"
            >
              取消
            </button>
            <button
              type="submit"
              onClick={() => {
                check();
              }}
              className="settingCheck"
            >
              完成
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton className="madalSty" />
              <Modal.Body className="madalSty"> {settingSuccess ? "資料已修改" : "資料未變更"}</Modal.Body>
              <Modal.Footer className="madalSty" />
            </Modal>

          </div>
        </form>
      </div>
    </>
  );
}

export default MemberPreferenceSetting;
