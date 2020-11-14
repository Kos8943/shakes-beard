import React, { useState, useEffect } from 'react'
import { withRouter, Link,useHistory } from 'react-router-dom'
import { Table,Button,Modal } from 'react-bootstrap'
import '../styles/reservations.scss'

function ReservationCheck(props) {
  console.log('ReservationCheck', props)

  const [modalShow, setModalShow] = useState(false)

  function MyVerticallyCenteredModal(props) {
    console.log('model-props',props)
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            預約完成
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>您的預約已完成！</p>
          <p>確認OK，回首頁</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/homepage">
            <Button className="reserveBtn">OK</Button>
            {/* <button onClick={props.onHide} className="reserveBtn">OK</button> */}
          </Link>
        </Modal.Footer>
      </Modal>
    );
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
        <h4 className="my-3">三、確認預約內容</h4>
        <Table bordered hover>
          <tbody className="text-center">
            <tr>
              <td>預約編號</td>
              <td colSpan="3">RV0123</td>
            </tr>
            <tr>
              <td>商家名稱</td>
              <td>Sculptor Barber</td>
              <td>商家編號</td>
              <td>ST001</td>
            </tr>
            <tr>
              <td>預約日期</td>
              <td>(星期二)</td>
              <td>預約時間</td>
              <td>12:00~13:00</td>
            </tr>
            <tr>
              <td>預約服務</td>
              <td>男士理髮</td>
              <td>服務編號</td>
              <td>ST00101</td>
            </tr>
            <tr>
              <td>服務說明</td>
              <td colSpan="3">XXXXXXX</td>
            </tr>
          </tbody>
        </Table>
        </div>
        <div className="mt-5 py-5 text-center">
          <Button 
            className="reserveBtn"
            onClick={() => props.history.goBack()}>
            上一步
          </Button>
          <Button type="submit" className="ml-2 reserveBtn" onClick={() =>
            setModalShow(true)}>
            送出
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </>
  )
}

export default withRouter(ReservationCheck)
