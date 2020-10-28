import React from 'react'
import { Link } from 'react-router-dom'
// 1015 match/history/location
// product/:id? withRouter,useParams
import { Dropdown } from 'react-bootstrap'

function Cates(props) {
  console.log('Cates', props)

  // let path = '全部'
  // const pathname = props.location.pathname

  // switch (pathname) {
  //   case '/shoplist':
  //     path = '商家列表'
  //     break
  //   case '/shopdetail':
  //     path = '商家頁面'
  //     break
  //   case '/reservation':
  //     path = '預約服務'
  //     break
  //   default:
  //     path = ''
  // }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb cates">
          <li className="breadcrumb-item cates-item">
            <Link to="#">全部</Link>
          </li>
          <li className="breadcrumb-item cates-item">
            <Link to="#">特價優惠</Link>
          </li>
          {/* 變數
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li> */}
          <li className="breadcrumb-item active" aria-current="page">
            sth
          </li>
        </ol>

        <Dropdown className="d-flex justify-content-end mb-2">
          <Dropdown.Toggle id="dropdown-basic" className="sorts" variant="">
            排序方式
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">價格高低</Dropdown.Item>
            <Dropdown.Item href="#/action-2">最新上架</Dropdown.Item>
            <Dropdown.Item href="#/action-3">熱門排行</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </>
  )
}

// export default withRouter(Cates)
export default Cates
