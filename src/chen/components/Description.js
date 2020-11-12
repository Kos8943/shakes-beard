import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Media } from 'react-bootstrap'
import '../styles/shops.scss'

function Description(props) {
  console.log('Description', props)
  const sid = props.match.params.sid
  console.log('props.match.params',props.match.params)
  console.log('sid',sid)

  const [shopMainTitle, setShopMainTitle] = useState('')
  const [shopMainText, setShopMainText] = useState('')
  const [shopSecondTitle, setShopSecondTitle] = useState('')
  const [shopSecondText, setShopSecondText] = useState('')
  const [dataIsExist, setDataIsExist] = useState(true)

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
    setShopSecondTitle(data[i].description_title_second)
    setShopSecondText(data[i].description_text_second)
  }

  useEffect(()=>{
    getShopFromServer()
  },[])

   const display=(<>
      <Media className="mb-5">
      <img
        alt="description-img"
        width={350}
        className="mr-4"
        src={require('../img/card01.jpg')} 
      />
      <Media.Body>
        <div>
          <h5>{shopMainTitle}</h5>
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
        width={350}
        className="mr-3"
        src={require('../img/card01.jpg')} 
      />
    </Media>
  </>)
  
  return (
    <>{display}</>
  )
}

export default withRouter(Description)