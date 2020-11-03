import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import '../styles/errors.scss'

function NotFoundPage(props) {
  console.log('NotFoundPage',props)
  return (
    <>
      <div className="container noPageFound">
        <div className="row">
          <h4>發生錯誤 404: 找不到頁面</h4>
        </div>
        <div className="row">
          <div>
            <p className="mb-0">我要找商品</p>
            <Button
                className="linkPage"
                onClick={() => props.history.push('/project1')}>
                商品列表頁
            </Button>
          </div>
        </div>
        <div className="row">
          <div>
            <p className="mb-0">我要找商家</p>
            <Button
              className="linkPage"
              onClick={() => props.history.push('/shoplist')}>
              商家列表頁
            </Button>
          </div>
        </div>
        <div className="row">
          <div>
            <p className="mb-0">我要做禮物盒</p>
            <Button
              className="linkPage"
              onClick={() => props.history.push('/Path_GiftBox')}>
              客製化禮物盒
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="mt-5">
            <Button
              className="goBack"
              onClick={() => props.history.goBack()}>
              回上一頁
            </Button>
          </div>
        </div>
    </div>
    </>
  )
}

export default withRouter(NotFoundPage)
