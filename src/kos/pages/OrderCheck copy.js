import React, { useState, useEffect } from 'react'
import Test from '../components/MemberOptionContent'
import MemberOptionContent from '../components/MemberOptionContent'

function OrderCheck(props) {
    const [total, setTotal] = useState(0)
    const [dataLoading, setDataLoading] = useState(false)
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState()
    const [type, setType] = useState()
    const [name, setName] = useState()

  // 載入資料用
  async function getTotalFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const url = 'http://localhost:3000/try-db'

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // data會是一個物件值
    console.log(data[0].img)

    // setTotal(data.total)
    setPrice(data[0].price)
    setType(data[0].type)
    setName(data[0].name)
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500)
  }, [price])

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )

  

  const display = (
    <>
      <div className="cartItem d-xl-flex">
                        <img className="itemImg" src=""></img>
                        <div className="itemName my-auto">{name}</div>
                        <select className="selectHigh">
                            <option value="1">{type}</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="unitPrice">NT${price}</span>
                        <span className="subtotal">{price*2}</span>
                        <img src="" className="deleteIcon"></img>
                    </div>
    </>
  )

  return dataLoading ? loading : display
}

export default OrderCheck