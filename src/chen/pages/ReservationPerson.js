import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { Table, Button, Form, Col, Row, Modal } from 'react-bootstrap'
import { FaCommentDollar } from 'react-icons/fa';

function ReservationPerson(props) {
  console.log('ReservationPerson', props)
  const [reservePerson, setReservePersion] = useState('')
  const [reserveMobile1, setReserveMobile1] = useState('')
  const [reserveMobile2, setReserveMobile2] = useState('')
  const [reserveEmail, setReserveEmail] = useState('')
  const [reserveAddress, setReserveAddress] = useState('')

  const [myReservation, setMyReservation] = useState([]);

  function getLocalStorage() {
    const newReservation = localStorage.getItem("reservation") || "[]";

    console.log("newReservation",JSON.parse(newReservation));

    setMyReservation(JSON.parse(newReservation));
  }

  useEffect(() => {
    getLocalStorage();
  }, []);

  console.log('myReservation',myReservation)

  function updateReservationDataToLocalStorage(value) {
    console.log('value',value)
    const currentReservation = JSON.parse(localStorage.getItem('reservation')) || []
      console.log('currentReservation[0]',currentReservation[0])
    const newReservation = Object.assign({},currentReservation[0],value)
      console.log('newReservation',newReservation)
    localStorage.setItem("reservation", JSON.stringify(newReservation));
    // 設定資料
    setMyReservation(newReservation)
  }
  useEffect(() => {}, [myReservation]);

  return (
    <>
      <div className="container mb-5">
        <div className="mt-5 py-5 text-center">
          <h2>預約服務</h2>
          <p className="lead">簡單 3 步驟，輕鬆預約ShakeBeard特約商家提供的多樣服務。</p>
          <div className="decLine"></div>
        </div>
        <div className="row d-flex justify-content-center">
        <Form>
        <h4 className="my-3">二、填寫預約資料</h4>
            <Form.Group controlId="formGridName">
              <Form.Label>訂購人姓名</Form.Label>
              <Form.Control 
              type="text" 
              placeholder="" 
              value={reservePerson} 
              onChange={(e) => {
                setReservePersion(e.target.value);
            }}/>
            </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridMobile">
              <Form.Label>連絡電話1</Form.Label>
              <Form.Control 
              type="mobile" 
              placeholder="" 
              value={reserveMobile1} 
              onChange={(e) => {
                setReserveMobile1(e.target.value);
            }}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMobile">
              <Form.Label>連絡電話2</Form.Label>
              <Form.Control 
              type="mobile" 
              placeholder="" 
              value={reserveMobile2}
              onChange={(e) => {
                setReserveMobile2(e.target.value);
            }}/>
            </Form.Group>
          </Form.Row>
          
          <Form.Group controlId="formGridEmail">
              <Form.Label>連絡信箱</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="" 
              value={reserveEmail}
              onChange={(e) => {
                setReserveEmail(e.target.value);
            }}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridAddress">
              <Form.Label>連絡地址</Form.Label>
              <Form.Control 
              type="text"
              placeholder="" 
              value={reserveAddress}
              onChange={(e) => {
                setReserveAddress(e.target.value);
            }}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
          <Form.Group as={Col} id="formGrid CheckboxYes">
            <Form.Check type="checkbox" label="訂購人就是參加者" />
          </Form.Group>
          {/* <Form.Group as={Col} id="formGridCheckboxNo">
            <Form.Check type="checkbox" label="訂購人不是參加者" />
          </Form.Group> */}
          </Form.Row>
        </Form>
        </div>
        <div className="mt-5 py-5 text-center">
          <Button
            className="reserveBtn"
            onClick={() => props.history.goBack()}>
            上一步
          </Button> 
          <Button type="submit" className="ml-2 reserveBtn" onClick={() =>{
              props.history.push('/reservationcheck')
              updateReservationDataToLocalStorage({
                reservePerson: `${reservePerson}`,
                reserveMobile1: `${reserveMobile1}`,
                reserveMobile2: `${reserveMobile2}`,
                reserveEmail: `${reserveEmail}`,
                reserveAddress: `${reserveAddress}`,
                });
              }}>
            下一步
          </Button>
        </div>


        {/* <label for="email">聯絡信箱 <span className="text-muted">(必須，以便寄送span></label>
      <div className="col-md-8 mb-3">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info"/>
          <label className="custom-control-label" for="save-info">存取資料</label>
        </div>
      </div> */}
      </div>
    </>
  )
}

export default withRouter(ReservationPerson)
