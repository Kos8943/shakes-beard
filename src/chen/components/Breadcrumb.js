import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'

function Breadcrumb(props) {
  console.log('Breadcrumb')
  console.log(props)

  let path = ''
  const pathname = props.location.pathname

  switch (pathname) {
    case '/ShopList':
      // path = '預約商家 / 商家列表'
      path = '商家列表'
      break
    case '/shoplist':
      path = '商家列表'
      break
    case '/shopdetail/':
      path = '商家頁面'
      break
    // case '/reservation':
    //   path = '預約服務'
    //   break
    case '/map':
      path = '商家地圖'
      break
    default:
      path = ''
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="#">商家預約</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(Breadcrumb)
