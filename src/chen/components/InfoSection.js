import React from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function InfoSection(props) {
  console.log('InfoSection', props)
  return (
    <>
          <img
            alt="infosection-img"
            width={350}
            className="col-sm-12 col-md-6 mt-3"
            src={require('../img/card01.jpg')} 
          />
          {/* <div className="test2"></div>
          <div className="test2"></div>
          <div className="test2"></div> */}
         <div className="info col-12 col-sm-12 col-md-5 mt-3">
            <h4 className="info-title">Sculptor Barber</h4>
            <Badge pill variant="secondary" className="mr-1">
              男士理髮廳
            </Badge>
             <Badge pill variant="secondary" className="mr-1">
              台北市大安區
            </Badge>
            <p className="mt-3">商家編號: 
            <span>ST001</span></p>
            <p className="mt-3">電話:  02-27375832</p>
            <p>地址:  106台北市大安區敦化南路二段265巷6號2樓</p>
            <div className="mb-3 openday">
              營業時間: 
              <select className="opendaySelect m-1">
                <option value="星期一">星期一</option>
                <option value="星期二">星期二</option>
                <option value="星期三">星期三</option>
                <option value="星期四">星期四</option>
                <option value="星期五">星期五</option>
                <option value="星期六">星期六</option>
                <option value="星期日">星期日</option>
              </select>
              {/* <Dropdown>
              <Dropdown.Toggle id="dropdown-basic" className="day m-0 p-1" variant="">
                星期一
              </Dropdown.Toggle>
                <Dropdown.Menu>
                 <Dropdown.Item>星期二</Dropdown.Item>
                 <Dropdown.Item>星期三</Dropdown.Item>
                 <Dropdown.Item>星期四</Dropdown.Item>
                 <Dropdown.Item>星期五</Dropdown.Item>
                 <Dropdown.Item>星期六</Dropdown.Item>
                 <Dropdown.Item>星期日</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
              <span className="col p-1">17:00 - 21:00</span>
            </div>
            <p>商家簡介:<br/>台灣男仕barbershop 第一品牌，創業六年以來，以美麗的理髮廳空間與台灣男仕理容文化薪傳聞名。</p>
            <p>提供服務:
            <div className="d-flex">
                <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                <Badge pill variant="secondary" className="mr-1">修護</Badge>
                <Badge pill variant="secondary" className="mr-1">造型</Badge>
            </div>
            </p>
          </div>
    </>
  )
}

export default InfoSection
