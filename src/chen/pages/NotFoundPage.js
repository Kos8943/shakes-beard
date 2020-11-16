import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { FaRegFrown, FaFrown } from "react-icons/fa";
import { Button } from 'react-bootstrap'
import '../styles/errors.scss'

function NotFoundPage(props) {
  console.log('NotFoundPage',props)
  return (
    <>
      <div className="container noPageFound">
        <div className="d-flex justify-content-center">
          <h1 className="mr-2 four">4</h1>
          <div className="frwonIcon">
            <FaRegFrown size={50}/>
          </div>
          <h1 className="ml-2 four">4</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h4>發生錯誤: 找不到頁面</h4>
        </div>
        <div className="d-flex justify-content-center buttons">
          <Button
            className="linkPage"
            onClick={() => props.history.push('/homepage')}>
            首頁
          </Button>
          <Button
            className="linkPage"
            onClick={() => props.history.push('/project1')}>
            商品列表頁
          </Button>
          <Button
            className="linkPage"
            onClick={() => props.history.push('/shoplist')}>
            商家列表頁
          </Button>
          <Button
            className="linkPage"
            onClick={() => props.history.push('/Path_GiftBox')}>
            客製化禮物盒
          </Button>
          <Button
            className="goBack"
            onClick={() => props.history.goBack()}>
            回上一頁
          </Button>
        </div>
        {/* <div className="row">
          <div>
            <p className="mb-0">我要找商品</p>
            <Button
                className="linkPage"
                onClick={() => props.history.push('/project1')}>
                商品列表頁
            </Button>
            <p className="mb-0">我要找商家</p>
            <p className="mb-0">我要做禮物盒</p>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default withRouter(NotFoundPage)
