import { get } from 'jquery'
import React, { useState, useEffect } from 'react'
import Delete from '../icon/delete.svg'
// import Cuf1 from '../img/1-3.jpg'
import Trash from '../icon/trash.svg'

function WebCartCard(props) {
    const [productName, setProduetName]=useState()
    const [productPrice, setProductPrice]=useState()
    const [productType, setProductType]=useState()
    const [dataLoading, setDataLoading] = useState(false)
    const [total, setTotal]= useState(1)




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
    console.log(data[1].img)

    // setTotal(data.total)
    setProductPrice(data[1].price)
    setProductType(data[1].type)
    setProduetName(data[1].name)
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer()
  }, [])

  // 每次total資料有改變，2秒後關閉載入指示
  useEffect(() => {
    setTimeout(() => setDataLoading(false), 500)
  }, [setProductPrice])

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  )
    return (
        <>
                    <div className="cartItem d-xl-flex">
                        <img className="itemImg" src="./imgs/1-3.jpg"></img>
                        <div className="itemName my-lg-auto">{productName}</div>

                        {/* web style select */}
                        <select className="selectHigh d-none d-lg-block">
                            <option value="1">經典黑</option>
                            <option value="2">{productType}</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh  d-none d-lg-block" onChange={get()}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>

                        {/* mobile styel select*/}
                        <div className="KosProjectType d-block d-lg-none">經典黑</div>

                        <span className="unitPrice">NT${productPrice}</span>

                        {/* web show total price*/}
                        <span className="subtotal  d-none d-lg-block">NT$2,882</span>

                        {/* web del img*/}
                        <img src={Delete} className="deleteIcon d-none d-lg-block"></img>


                        {/* mobile qty select*/}
                        <div className="d-flex counterArea d-block d-lg-none">
                            <div className="cartMinus" onClick={() => total == 1 ? setTotal(1) : setTotal(total - 1)}>-</div>
                            <div className="cartQty">{total}</div>
                            <div className="cartAdd" onClick={() => setTotal(total + 1)}>+</div>
                            <img src={Trash} className="CartTarsh"></img>
                            <div className="subtotal">NT$2,882</div>
                        </div>
                    </div>
        </>
    )
}


export default WebCartCard