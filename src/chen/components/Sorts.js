import React from 'react'
import { Dropdown } from 'react-bootstrap'

function Sorts(props) {
  console.log('Sorts', props)
  return (
    <>
      {/* <h5>排序方式</h5> */}
      <Dropdown>
        {/*  variant="success"  */}
        <Dropdown.Toggle id="dropdown-basic" className="sorts" variant="">
          排序方式
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">價格高低</Dropdown.Item>
          <Dropdown.Item href="#/action-2">最新上架</Dropdown.Item>
          <Dropdown.Item href="#/action-3">熱門排行</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export default Sorts
