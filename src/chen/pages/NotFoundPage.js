import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'  
import '../styles/errors.scss'

function NotFoundPage(props) {
  return (
    <>
      <div className="container noPageFound">
        <div className="row">
          <h4>發生錯誤 404: 找不到頁面</h4>
        </div>
        <div className="row">
          <div>
            <p>我要找商品</p>
            <Button
                className="link-page"
                to="/project1">
                商品列表頁
            </Button>
          </div>
        </div>
        <div className="row">
          <div>
            <p>我要找商家</p>
            <Button
              className="link-page"
              to="/shoplist">
              商家列表頁
            </Button>
          </div>
        </div>
        <div className="row">
          <div>
            <p>我要做禮物盒</p>
            <Button
              className="link-page"
              to="/giftBox">
              客製化禮物盒
            </Button>
          </div>
        </div>
    </div>
    </>
  )
}

export default NotFoundPage
