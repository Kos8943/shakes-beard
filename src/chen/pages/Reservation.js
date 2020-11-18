import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { Table, Button, Form, Col, Row, Modal } from 'react-bootstrap'
import Datetime from 'react-datetime'
import '../styles/reservations.scss'

function Reservation(props) {
    console.log('Reservation', props)
  const sid = props.match.params.sid
    console.log('props.match.params',props.match.params)
    console.log('sid',sid)
  const {addReservation,setAddReservation}=props;

  const [reserveNum, setReserveNum] = useState('RV0123')
  const [reserveShopName, setReserveShopName] = useState('')
  const [reserveShopId, setReserveShopId] = useState('')
  // cate?
  const [reserveServiceName, setReserveServiceName] = useState('男士理髮')
  const [reserveServiceId, setReserveServiceId] = useState('ST00101')
  const [reserveServiceDescrip, setReserveServiceDescrip] = useState('XXXXXXX')
  const [reserveServiceTime, setReserveServiceTime] = useState('12/25')

  async function getShopFromServer(){
    console.log('getShopFromServer',sid)
    // json-db
    // const url = 'http://localhost:3000/try-shop/'+ shopid
    const url = 'http://localhost:3000/try-shop'
    console.log("url",url)

    const request = new Request(url, {
      method:'GET',
      headers:new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('response',response)
    console.log("data",data)
    
    const i = [sid]-1
    console.log("[sid]-1",i)
    console.log("data[i]",data[i])// index 改sid?

    if(!data[i].sid){
      console.log('no data[i].sid')
      return
    }

    setReserveShopName(data[i].shop_name)
    setReserveShopId(data[i].shop_id)
    // setShopAvatar(data[i].shop_avatar)
    // setShopImg1(data[i].shop_img1)
    // setShopImg2(data[i].shop_img2)
    // setShopImg3(data[i].shop_img3)
    // setShopTag(data[i].shop_cate_tag)
    // setShopPlace(data[i].shop_place_tag)
    // setShopAddr(data[i].shop_address)
    // setShopIntro(data[i].shop_intro)
  }

  const [reservation, setReservation] = useState([]);
  
  function updateReservationToLocalStorage(value) {
    console.log('reservation1:',reservation)
  const currentReservation = localStorage.getItem("reservation") || "[]";
  const newReservation = [...JSON.parse(currentReservation), value];
    console.log('currentReservation:',currentReservation)
    console.log('newReservation:',newReservation)
    console.log('setLocalstorage:',JSON.stringify(newReservation))
  localStorage.setItem("reservation", JSON.stringify(newReservation));

  setReservation(newReservation);
    console.log("reservation:", reservation);
    console.log("AddReservation:", {addReservation})
  // setAddReservation(newCart.length)
  // +setAddReservation(cart.length + 1)
  }
  // useEffect(() => {}, [cart]);

  useEffect(()=>{
    getShopFromServer()
  },[])

  function DeleteLocalReservation() {
    localStorage.setItem("reservation", "[]");
  }

  return (
    <>
      <div className="container mb-5">
        <div className="mt-5 py-5 text-center"> 
          <h2>預約服務</h2>
          <p className="lead">簡單 3 步驟，輕鬆預約ShakeBeard特約商家提供的多樣服務。</p>
          <div className="decLine"></div>
        </div>
        <div className="row">
        <h4 className="my-3">一、預約項目</h4>
        <Table bordered hover>
          <tbody className="text-start">
            <tr>
              <td>預約編號</td>
              <td colSpan="2">{reserveNum}</td>
            </tr>
            <tr>
              <td>商家名稱</td>
              <td>{reserveShopId} {reserveShopName}</td>
            </tr>
            <tr>
              <td>預約服務</td>
              <td colSpan="2">
                <Form.Group as={Col} controlId="formGridState" className="p-0">
                  <Form.Control as="select" defaultValue="Choose...">
                    <option>{reserveServiceId} {reserveServiceName}</option>
                    <option>ST00102 男士修容</option>
                  </Form.Control>
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>預約時間</td>
              <td colSpan="2">
                <Datetime value={reserveServiceTime}/>
              </td>
            </tr>
            {/* <tr>
              <td>服務說明</td>
              <td colSpan="3">{reserveServiceDescrip}</td>
            </tr> */}
          </tbody>
        </Table>
        </div>
        <div className="mt-5 py-5 text-center">
          <Button
            className="cancelBtn"
            onClick={() => {
              props.history.goBack()
              DeleteLocalReservation()
            }}>
            上一頁
          </Button> 
          <Button type="submit" className="reserveBtn ml-2" onClick={() =>{
                props.history.push('/reservationperson')
                updateReservationToLocalStorage({
                  reserveNum: `${reserveNum}`,
                  reserveShopName: `${reserveShopName}`,
                  reserveShopId: `${reserveShopId}`,
                  reserveServiceName: `${reserveServiceName}`,
                  reserveServiceId: `${reserveServiceId}`,
                  reserveServiceTime: `${reserveServiceTime}`,
                });
              }}>
            下一步
          </Button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Reservation)
