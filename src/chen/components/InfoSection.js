import React from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../styles/shops.scss'

function InfoSection(props) {
  console.log('InfoSection', props)
  return (
    <>
      <div className="test1 col"></div>
        {/* <div className="test2"></div>
        <div className="test2"></div>
        <div className="test2"></div> */}
        {/* card-body、card-title、card-text、card-link */}
         <div className="info col">
            <h4 className="">Sculptor Barber</h4>
            <Link to="#" className="card-link">
              男士理髮廳
            </Link>
             <Link to="#" className="card-link">
              台北市大安區
            </Link>
            <p className="mt-3">電話:  02-27375832</p>
            <p>地址:  106台北市大安區敦化南路二段265巷6號2樓</p>
            <Dropdown>
            營業時間: 
             <Dropdown.Toggle id="dropdown-basic" className="day" variant="">星期一
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                   <Dropdown.Item>星期二</Dropdown.Item>
                   <Dropdown.Item>星期三</Dropdown.Item>
                   <Dropdown.Item>星期四</Dropdown.Item>
                   <Dropdown.Item>星期五</Dropdown.Item>
                   <Dropdown.Item>星期六</Dropdown.Item>
                   <Dropdown.Item>星期日</Dropdown.Item>
                 </Dropdown.Menu>
                 17:00 - 21:00
                 </Dropdown>
            <p>商家簡介:<br/>台灣男仕barbershop 第一品牌，創業六年以來，以美麗的理髮廳空間與台灣男仕理容文化薪傳聞名。</p>
            <p>提供服務:</p>
            <div className="d-flex">
              <h5>
                <Badge pill variant="secondary">理髮</Badge>
              </h5>
              <h5>
                <Badge pill variant="secondary">修護</Badge>
              </h5>
              <h5>
                <Badge pill variant="secondary">造型</Badge>
              </h5>
            </div>
          </div>
    </>
  )
}

export default InfoSection
