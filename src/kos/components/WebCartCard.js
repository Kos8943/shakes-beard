import React, { useState, useEffect } from "react";
// import Cuf1 from '../img/1-3.jpg'
import Trash from "../icon/trash.svg";
import { Link } from "react-router-dom";
import { queryByTestId } from "@testing-library/react";
import CartCardMap from './CartCardMap'

function WebCartCard(props) {
  const [myCart, setMyCart] = useState([]);
  const [total, setTotal] = useState();
  const [shiping, setShiping] = useState(150);
  const [priceOff, setPriceOff] = useState(0)

  function getLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    console.log(JSON.parse(newCart));

    setMyCart(JSON.parse(newCart));

  }

  

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {}, [myCart]);

  // return <>{myCart.map((v,i)=>(
  //   <>
  //   <div>{v.name}</div>
  //   <img src={v.img} />
  //   </>
  // ))}</>

  return (
    <>
      <CartCardMap total={total} setTotal={setTotal}/>

      <div className="priceArea ml-auto d-flex">
          <div className="priceArea font">
            <div>優惠代碼：</div>
            <div>折扣：</div>
            <div>運費：</div>
            <div>總計：</div>
          </div>

          <div className="priceArea font totalPrice priceColor">
            <div>
              <input onChange={(e) => { (e.target.value === "abc")? setPriceOff(-300) :setPriceOff(0)}} className="inputvalue"></input>
            </div>
            {/* 折扣 */}
            <div>NT$ {priceOff}</div>
            {/* 運費 */}
            <div>NT$ {shiping}</div>
            {/* 總計 */}
            <div className="totalPriceT" >NT$ {total + shiping + priceOff}</div>
          </div>
        </div>
        <div className="sumitBtn ml-auto">
          <Link to="/payment">
            <button>送出訂單</button>
          </Link>
        </div>
        {/* <div className="cartItem d-xl-flex d-block">
          <img className="itemImg" src={"./imgs/"}></img>
          <div className="itemName my-lg-auto"></div>

          web style select
          <div className="itemName my-lg-auto"></div>
          <select
            className="selectHigh  d-none d-lg-block"
            onChange={(e) => {}}
            id="select"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          mobile styel select
          <div className="KosProjectType d-block d-lg-none"></div>

          <span className="unitPrice">NT$</span>

          web show total price
          <span className="subtotal subtotalD d-none d-lg-block">NT${}</span>

          web del img
          <img
            src="./imgs/delete.svg"
            className="deleteIcon d-none d-lg-block"
            onClick={() => {
              console.log(236);
            }}
          ></img>

          mobile qty select
          <div className="d-flex counterArea d-block d-lg-none">
            <div className="cartMinus" onClick={function () {}}>
              -
            </div>
            <div className="cartQty" value=""></div>
            <div className="cartAdd" onClick=""></div>
            <img src={Trash} className="CartTarsh"></img>
            <div className="subtotal">NT$</div>
          </div>
        </div> */}

        
      
    </>
  );
}

export default WebCartCard;
