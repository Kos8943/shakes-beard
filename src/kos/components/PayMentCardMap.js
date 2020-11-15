import React, { useState, useEffect } from "react";

function PayMentCardMap(props) {
  const [payment, setPayment] = useState([]);

  const {
    total,
    setTotal
  } = props

  function getLocalStorage() {
    const newCart = localStorage.getItem("cart") || "[]";

    console.log(JSON.parse(newCart));

    setPayment(JSON.parse(newCart));
  }

  const sum = (v) => {
    let sumTotal = 0
    for (let i = 0; i < v.length; i++) {
    sumTotal += v[i].amount * v[i].price
  }
  return setTotal(sumTotal)
}

sum(payment)

  useEffect(() => {
    getLocalStorage();
  }, []);
  return (
    <>
      {payment.map((v, i) => (
        <>
          {/* 網頁 */}
          <div className="cartItem d-xl-flex justify-content-between d-none" key={v.id}>
            <img
              className="itemImg"
              src={"./imgs/hsuan/" + `${v.img}`}
            ></img>
            <div className="itemName my-auto">{v.name}</div>
            <span className="productTpye">{v.type}</span>
            <span className="amount">{v.amount}</span>
            <span className="unitPrice">
              NT${v.price}
            </span>
            <span className="subtotal">NT$ {v.amount * v.price}</span>
          </div>

          {/* 手機 */}

          <div className="cartItemPhone d-xl-none d-block" key={v.id}>
            <img
              className="itemImg"
              src={"./imgs/hsuan/" +  `${v.img}` }
            ></img>
            <div className="itemName">{v.name} </div>
            <div className="KosProjectType">{v.type}</div>
            <div className="PaymentunitPrice">
              NT${v.price}
            </div>

            <div className="PaymentQty">X{v.amount}</div>
            <div className="PaymentSubtotal">
              NT${v.amount * v.price}
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default PayMentCardMap;
