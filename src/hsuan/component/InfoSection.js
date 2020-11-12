import React, { useState, useEffect } from 'react'
import { Dropdown,Badge } from 'react-bootstrap'
import { withRouter,Link } from 'react-router-dom'

function InfoSection(props) {
  // console.log('InfoSection', props)
  // const sid = props.match.params.sid
  // console.log('props.match.params',props.match.params)
  // console.log('sid',sid)

  const [productname, setProductName] = useState('')
  const [imgname, setImgname] = useState('')
  const [imgname1, setImgname1] = useState('')
  const [imgname2, setImgname2] = useState('')
  const [imgname3, setImgname3] = useState('')
  const [height, setHeight] = useState('')
  const [width, setWidth] = useState('')
  const [weight, setWeight] = useState('')
  // const [dataIsExist, setDataIsExist] = useState(true)

  async function getmyProduct(){
    console.log('getmyProduct',sid)
    // json-db
    // const url = 'http://localhost:3000/try-shop/'+ shopid
    const url = 'http://localhost:3000/try-list'
    console.log("url",url)

    const request = new Request(url, {
      method:'GET',
      headers:new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log('response',response)
    console.log("data",data)
    
    const i = 1
    // const i = [sid]-1
    // console.log("[sid]-1",i)
    // console.log("data[i]",data[i])// index 改sid?

    // if(!data[i].sid){
    //   setDataIsExist(false)
    //   console.log('no data[i].sid')
    //   return
    // }

    setProductName(data[i].productname)
    setImgname(data[i].imgname)
    setImgname1(data[i].imgname1)
    setImgname2(data[i].imgname2)
    setImgname3(data[i].imgname3)
    setHeight(data[i].height)
    setWidth(data[i].width)
    setWeight(data[i].weight)
    
  }

  useEffect(()=>{
    getmyProduct()
  },[])

  const display=(
  <>
    {/* <img
      alt="infosection-img"
      width={350}
      className="col-sm-12 col-md-6 mt-3"
      src={require('../img/card01.jpg')} 
    /> */}
    {/* <div className="test2"></div>
    <div className="test2"></div>
    <div className="test2"></div> */}
    <div className="brand-SectionProductDetail__body">
                      <div className="brand-SectionProductDetail__heading">
                        <h2
                          className="_title typesquare_option finished"
                          data-anime="fadeInRight"
                          data-anime-trigger=".brand-SectionProductDetail"
                          data-anime-delay="0.6">
                          商品名稱
                        </h2>
                        <div
                          className="_name finished"
                          data-anime="fadeInRight"
                          data-anime-trigger=".brand-SectionProductDetail"
                          data-anime-delay="0.3"
                        >
                          <h1 className="__name" style={{fontSize:"1.5rem"}}>NT$1500</h1>
                        </div>
                      </div>

                      <div
                        className="brand-SectionProductDetail__text finished"
                        data-anime="fadeInRight"
                        data-anime-trigger=".brand-SectionProductDetail"
                        data-anime-delay="0.9">
                        {" "}
                        打一些介紹
                      </div>
                      <div
                        className="brand-SectionProductDetail__info finished"
                        data-anime="fadeInRight"
                        data-anime-trigger=".brand-SectionProductDetail"
                        data-anime-delay="1.2" >
                        <div className="_rows">
                          <div className="_row">
                            <div className="_col _col--1">高度</div>
                            <div className="_col _col--2">24.2mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">寬度</div>
                            <div className="_col _col--2">7.5mm</div>
                          </div>
                          <div className="_row">
                            <div className="_col _col--1">重量</div>
                            <div className="_col _col--2">17.22g</div>
                          </div>
                          </div>
                      </div>
                      <a href="/brand/pole_pole.php" className="ButtonA finished">
                        <span>加入購物車</span>
                      </a>
                      <br></br>
                      {/* <img src="./icon/search.svg" style="width: 15px;"> */}
                      <a href="/brand/pole_pole.php" className="ButtonA finished">
                        <span>♥加入追蹤♥</span>
                      </a>
                    </div>
  </>)

  return (
    <>{display}</>
  )
}

export default withRouter(InfoSection)
