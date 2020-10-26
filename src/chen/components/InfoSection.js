import React from 'react'
import { Dropdown } from 'react-bootstrap'
import '../../styles/custom.scss'
import { Link } from 'react-router-dom'

function InfoSection(props) {
  console.log('InfoSection', props)
  return (
    <>
      <div className="test1"></div>
        {/* <div className="test2"></div>
        <div className="test2"></div>
        <div className="test2"></div> */}
        {/* card-body、card-title、card-text、card-link */}
         <div className="info">
            <h4 className="">Sculptor Barber</h4>
            <Link to="#">
              男士理髮廳
            </Link>
             <Link to="#">
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
            <p>簡介:<br/>台灣男仕barbershop 第一品牌，創業六年以來，以美麗的理髮廳空間與台灣男仕理容文化薪傳聞名。</p>
            <p>提供服務:</p>
            <div className="d-flex">
              <div className="test3">
                理髮
              </div>
              <div className="test3">
                修護
              </div>
              <div className="test3">
                造型
              </div>
            </div>
          </div>
    </>
  )
}

export default InfoSection
