/* eslint-disable jsx-a11y/alt-text */
import { get } from "jquery";
import React, { useState, useEffect } from "react";
// import Cuf1 from '../img/1-3.jpg'
import Trash from "../icon/trash.svg";
import { Link } from "react-router-dom";
import { queryByTestId } from "@testing-library/react";

function WebCartCard(props) {
  const [myProductName, setMyProduetName] = useState([]);
  // const [productPrice, setProductPrice] = useState(0);
  // const [productType1, setProductType1] = useState();
  // const [productType2, setProductType2] = useState();
  // const [productType3, setProductType3] = useState();
  const [phoneProductType, setPhoneProductType]= useState()
  const [dataLoading, setDataLoading] = useState(false);
  const [amount, setAmount] = useState(1);
  const [subtotal, setSubtotal] = useState(myProductName.price * amount);
  const [coopo, setCoopo] = useState('')
  const [offPrice, setOffPrice] = useState(0)


  // 載入資料用
  async function getTotalFromServer() {
    // 開啟載入的指示圖示
    setDataLoading(true);

    const url = "http://localhost:3000/try-db";

    const request = new Request(url, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
    });

    const response = await fetch(request);
    const data = await response.json();
    // data會是一個物件值

    // setTotal(data.total)
    setMyProduetName(data);
    // setProductType1(data[1].type1);
    // setProductType2(data[1].type2)
    // setProductType3(data[1].type3)
    // setProduetName(data[1].name);
    setSubtotal(data[1].price * amount);
    console.log(data[1].price);
  }

  // componentDidMount，一開始會載入資料(在元件初始化完成後)
  useEffect(() => {
    getTotalFromServer();
  }, []);

  // 每次total資料有改變，2秒後關閉載入指示
  // useEffect(() => {
  //   setTimeout(() => setDataLoading(false), 500);
  // }, [setProductPrice]);

  const loading = (
    <div className="spinner-grow" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );

  // console.log("window loaded")

  return (
    <>
    {myProductName.map((value, index)=>{
      return(
        <div className="cartItem d-xl-flex d-block">
        <img className="itemImg" src={"./imgs/" + `${myProductName[index].img}`}></img>
        <div className="itemName my-lg-auto">{myProductName[index].name}</div>

        {/* web style select */}
        <select className="selectHigh d-none d-lg-block" id="typeSelect" onChange={(e)=>{setPhoneProductType(e.target.value)}}>
          <option value={myProductName[index].type1}>{myProductName[index].type1}</option>
          <option value={myProductName[index].type2}>{myProductName[index].type2}</option>
          <option value={myProductName[index].type3}>{myProductName[index].type3}</option>
        </select>
        <select
          className="selectHigh  d-none d-lg-block"
          onChange={ (e) => { setAmount(e.target.value)
          console.log(e.target.value)
            // setSubtotal(myProductName[index].price * e.target.value);
            setSubtotal(e.target.value * myProductName[index].price)
            

          }}
          id="select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        {/* mobile styel select*/}
        <div className="KosProjectType d-block d-lg-none">{phoneProductType}</div>

        <span className="unitPrice">NT${myProductName[index].price}</span>

        {/* web show total price*/}
        <span className="subtotal  d-none d-lg-block" >NT${subtotal}</span>

        {/* web del img*/}
        <img src="./imgs/delete.svg" className="deleteIcon d-none d-lg-block" onClick={() => {console.log(236)}}></img>

        {/* mobile qty select*/}
        <div className="d-flex counterArea d-block d-lg-none">
          <div
            className="cartMinus"
            onClick={function () {
              if (amount === 1) {
                setAmount(1);
              } else {
                const newamount = amount - 1
                setAmount(amount - 1);
                setSubtotal(myProductName[this].price * newamount)
                document.getElementById("select").selectedIndex = amount -2
                
                
              }
            }}
          >
            -
          </div>
          <div className="cartQty" value={amount} >{amount}</div>
          <div
            className="cartAdd"
            onClick={ function() {
              if (amount === 5) {
                setAmount(5)
              } else {
                const newamount = amount + 1
                setAmount(parseInt(amount) + 1);
                setSubtotal(myProductName[index].price * newamount)
                document.getElementById("select").selectedIndex = amount
              }
            }
            }
          >
            
          </div>
          <img src={Trash} className="CartTarsh"></img>
          <div className="subtotal">NT${subtotal}</div>
        </div>
      </div>
      )
    })}
     

      <div className="priceArea ml-auto d-flex">
        <div className="priceArea font">
          <div>優惠代碼：</div>
          <div>折扣：</div>
          <div>運費：</div>
          <div>總計：</div>
        </div>

        <div className="priceArea font totalPrice priceColor">
          <div>
            <input onChange={(e) => { (e.target.value === "abc")?
              setOffPrice(-150): setOffPrice(0)
            }
               
              } className="inputvalue"></input>
          </div>
          <div>NT$ {offPrice}</div>
          <div>NT$ 150</div>
          <div>NT$ 8,796</div>
        </div>
      </div>
      <div className="sumitBtn ml-auto">
        <Link to="/payment">
          <button>送出訂單</button>
        </Link>
      </div>
    </>
  );
}

export default WebCartCard;
