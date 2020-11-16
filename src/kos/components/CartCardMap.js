import React, { useState, useEffect } from "react";
import Trash from "../icon/trash.svg";
import { Link } from "react-router-dom";
import { FaSun } from "react-icons/fa";

function CartCardMap(props) {
  const [myCart, setMyCart] = useState([]);
  const [delectCartCard, setDelectCartCard] = useState(0)

  const {
    total,
    setTotal
  } = props


  function getLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    console.log(JSON.parse(newCart));

    setMyCart(JSON.parse(newCart));
  }

  const sum = (v) => {
    let sumTotal = 0
    for (let i = 0; i < v.length; i++) {
    sumTotal += v[i].amount * v[i].price
  }
  return setTotal(sumTotal)
}

sum(myCart)

  useEffect(() => {
    getLocalStorage();
    
  }, []);

  useEffect(() => {
    getLocalStorage();
    
  }, [delectCartCard]);

  useEffect(() => {}, [myCart]);

  const updateCartToLocalStorage = (v, isAdded = true, y) => {
    console.log(v, isAdded)
    console.log("y:",y)
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((t) => t.id === v.id)
    console.log("v.id:", "item.id", v.id)
    console.log('index', index)
    // found: index! == -1
    if (index > -1) {
        console.log('befor',currentCart[index].amount)
      currentCart[index].amount = y
      console.log('after',currentCart[index].amount)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMyCart(currentCart)
  }

  const DeleteCartLocal = (i) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    const currentCart1 = currentCart.shift(i);
    console.log("currentCart1:",currentCart1)
    console.log("currentCart1.length:",currentCart1.length)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    setDelectCartCard(delectCartCard+1)
  }


  
  
  return (
    <>
      {myCart.map((v, i) => (
        <>
          <div className="cartItem d-xl-flex justify-content-between d-block" key={v.id}>
            <img className="itemImg" src={"./imgs/hsuan/" + `${v.img}`}></img>
            <div className="itemName my-lg-auto">{v.name}</div>

            {/* web style select */}
            <div className="itemName my-lg-auto">{v.type}</div>
            <select
              className="selectHigh  d-none d-lg-block"
              onChange={(e) => {

                updateCartToLocalStorage(v, false, e.target.value)
              
              }}
              id="select"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <span className="unitPrice">NT${v.price}</span>

            {/* web show total price */}
            <span className="subtotal subtotalD d-none d-lg-block">
              NT${v.price * v.amount}
            </span>

            {/* web del img */}
            <img
              src="./imgs/delete.svg"
              className="deleteIcon d-none d-lg-block"
              onClick={() => { DeleteCartLocal(i)}}
            ></img>

            {/* mobile qty select */}
            <div className="d-flex counterArea d-block d-lg-none">
              <div className="cartMinus" onClick={function () {}}>
                -
              </div>
              <div className="cartQty" value="">{v.amount}</div>
              <div className="cartAdd" onClick="">+</div>
              <img src={Trash} className="CartTarsh"></img>
              <div className="subtotal">NT$ {v.price}</div>
            </div>
          </div>

          {/* <div>{v.name}</div>
    <img src={v.img} /> */}
        </>
      ))}
    </>
  );
}

export default CartCardMap;