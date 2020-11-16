import React, { useState, useEffect } from 'react'
import { withRouter,Link } from 'react-router-dom'
import { Media } from 'react-bootstrap'
import { Badge } from 'react-bootstrap'
import Recommend from '../components/Recommend'
import '../styles/shops.scss'

function Description(props) {
  console.log('Description', props)
  const sid = props.match.params.sid
  console.log('props.match.params',props.match.params)
  console.log('sid',sid)

  const [shopMainTitle, setShopMainTitle] = useState('')
  const [shopMainText, setShopMainText] = useState('')
  const [shopMainImg, setShopMainImg] = useState('')
  const [shopSecondTitle, setShopSecondTitle] = useState('')
  const [shopSecondText, setShopSecondText] = useState('')
  const [shopSecondImg, setShopSecondImg] = useState('')
  const [dataIsExist, setDataIsExist] = useState(true)
  const [shopCate, setShopCate] = useState('男士理髮')

  async function getShopFromServer(){
    console.log('getShopFromServer',sid)
    // json-db
    // const url = 'http://localhost:3000/try-shop/'+ shopid
    const url = 'http://localhost:3000/try-shop'
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
    
    const i = [sid]-1
    console.log("[sid]-1",i)
    console.log("data[i]",data[i])// index 改sid?

    if(!data[i].sid){
      setDataIsExist(false)
      console.log('no data[i].sid')
      return
    }

    setShopMainTitle(data[i].description_title_main)
    setShopMainText(data[i].description_text_main)
    setShopMainImg(data[i].description_img_main)
    setShopSecondTitle(data[i].description_title_second)
    setShopSecondText(data[i].description_text_second)
    setShopSecondImg(data[i].description_img_second)
    setShopCate(data[i].shop_cate_tag)
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

   const display=(<>
      <Media className="mb-5">
      <img
        alt="description-img"
        width={400}
        className="mr-3"
        src={`/imgs/shops/${shopMainImg}`}
      />
      <Media.Body>
        <div>
            <h5>{shopMainTitle}</h5>
            {/* <hr className="p-0"/> */}
          <p>{shopMainText}</p>
        </div>
        {/* <Link to="#" className="btn btn-primary">
          立即預約
        </Link> */}
      </Media.Body>
    </Media>
    <Media className="mb-5">
      <Media.Body>
        <div>
          <h5>{shopSecondTitle}</h5>
          <p>{shopSecondText}</p>
        </div>
        {/* <Link to="#" className="btn btn-primary">
          立即預約
        </Link> */}
      </Media.Body>
      <img
        alt="description-img"
        width={400}
        className="ml-3"
        src={`/imgs/shops/${shopSecondImg}`}
      />
    </Media>
  </>)

  const recommend=(
    <>
      <div className="row pl-3 mt-3">
          <h4 className="mt-5">推薦給您</h4>
        </div>
        {/* <div className="row"> */}
        <div className="d-flex justify-contents-center mb-5 scrollRight recommends">
            <div className="card recommend">
              <div className="card-img">
                <img src={`/imgs/shops/ST001.jpg`} className="card-img-top" alt=".."/>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <p>
                  <Badge pill variant="secondary" className="mr-1">男士理髮</Badge>
                  <Badge pill variant="secondary" className="mr-1">台北市</Badge>
                </p>
                <h6 className="mb-1">Sculptor Barber</h6>
                <Link to='/shopdetail/1' className="learnMore">查看店家</Link>
              </div>
            </div>
            <div className="card recommend">
              <div className="card-img">
                <img src={'/imgs/shops/ST002.jpg'} className="card-img-top" alt=".."/>
              </div>
                <div className="card-body d-flex flex-column align-items-center">
                <p>
                  <Badge pill variant="secondary" className="mr-1">男士理髮</Badge>
                  <Badge pill variant="secondary" className="mr-1">台北市</Badge>
                </p>
                <h6 className="mb-1">One Hand Made Barber</h6>
                <Link to='/shopdetail/2' className="learnMore">查看店家</Link>
              </div>
            </div>
            <div className="card recommend">
              <div className="card-img">
                <img src={'/imgs/shops/ST003.jpg'} className="card-img-top" alt=".."/>
              </div>
              <div className="card-body d-flex flex-column align-items-center">
                <p>
                  <Badge pill variant="secondary" className="mr-1">男士理髮</Badge>
                  <Badge pill variant="secondary" className="mr-1">台北市</Badge>
                </p>
                <h6 className="mb-1">Tim's fantasy World 男士理髮廳</h6>
                <Link to='/shopdetail/3' className="learnMore">查看店家</Link>
              </div>
            </div>
            <div className="card recommend">
              <div className="card-img">
                <img src={'/imgs/shops/ST009.jpg'} className="card-img-top" alt=".."/>
              </div>
              <div className="card-body d-flex flex-column align-items-start">
                <p>
                  <Badge pill variant="secondary" className="mr-1">男士理髮</Badge>
                  <Badge pill variant="secondary" className="mr-1">台中市</Badge>
                </p>
                <h6 className="mb-1">Slick Barbershop 俐落男仕理髮廳</h6>
                <Link to='/shopdetail/9' className="learnMore">查看店家</Link>
              </div>
            </div>
        </div>
      {/* </div> */}
    </>
  )
  
  return (
    <>
    {display}
    {/* {`${shopCate==='男士理髮'? recommend:''}`} */}
    {/* {`${shopCate==='男士理髮'? 'yes':'no'}`} */}
    {recommend}
    </>
  )
}

export default withRouter(Description)