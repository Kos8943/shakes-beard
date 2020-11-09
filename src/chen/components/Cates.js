import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Cates(props) {
  console.log('Cates', props)
  let title = ''
  const titleName = props.category

  switch (titleName) {
    case 'allshops':
      title = '所有商家'
      break
    case 'discountshops':
      title = '特價優惠'
      break
    case 'barbershops':
      title = '男士理髮'
      break
    case 'shavingshops':
      title = '男士修容'
      break
    case 'dressingshops':
      title = '男士造型'
      break
     case 'shopslocation':
      title = '商家位置'
      break
    default:
      title = ''
  }

  return (
    <>
    <div className="sorting">
      <nav aria-label="breadcrumb cates">
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item active cates-item" aria-current="page">
            所有商家
          </li>
        </ol>
      </nav>

      <div className="sorts col justify-content-end">
        <select className="sort m-1">
          <option value="價格高低">價格高低</option>
          <option value="近期活動">近期活動</option>
          <option value="熱門排行">熱門排行</option>
        </select>
        {/* <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="sort d-flex align-items-center" variant="">
            排序方式
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">價格高低</Dropdown.Item>
            <Dropdown.Item href="#/action-2">近期活動</Dropdown.Item>
            <Dropdown.Item href="#/action-3">熱門排行</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
    </>
  )
}

// export default withRouter(Cates)
export default Cates
