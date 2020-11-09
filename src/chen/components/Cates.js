import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Cates(props) {
  console.log('Cates', props)

  return (
    <>
    <div className="sorting">
      <nav aria-label="breadcrumb cates">
        <ol className="breadcrumb mb-0">
          {/* <li className="breadcrumb-item cates-item">
            <Link to="#">所有商家</Link>
          </li> */}
          {/* <li className="breadcrumb-item cates-item">
            <Link to="#">特價優惠</Link>
          </li> */}
          {/* 變數
          <li className="breadcrumb-item active" aria-current="page">
            {path}
          </li> */}
          <li className="breadcrumb-item active cates-item" aria-current="page">
            所有商家
          </li>
        </ol>
      </nav>

      <div className="sorts col justify-content-end">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="sort d-flex align-items-center" variant="">
            排序方式
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">價格高低</Dropdown.Item>
            <Dropdown.Item href="#/action-2">近期活動</Dropdown.Item>
            <Dropdown.Item href="#/action-3">熱門排行</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
    </>
  )
}

// export default withRouter(Cates)
export default Cates
