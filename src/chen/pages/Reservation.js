import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { Table, Button, Form, Col, Row, Modal } from 'react-bootstrap'

function Reservation(props) {
  console.log('Reservation', props)

  return (
    <>
      <div className="container mb-5">
        <div className="mt-5 py-5 text-center">
          <h2>預約服務</h2>
          <p className="lead">簡單 3 步驟，輕鬆預約ShakeBeard特約商家提供的多樣服務。</p>
          <div className="decLine"></div>
        </div>
        <div className="row">
        <h4 className="my-3">一、預約服務</h4>
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
          <Button type="submit" className="reserveBtn" onClick={() =>
              props.history.push('/reservationperson')}>
            下一步
          </Button>
        </div>
      </div>
    </>
  )
}

export default withRouter(Reservation)
