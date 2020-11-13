import React, { useState, useEffect } from "react";

function TryLocalstrage() {
  const [cart, setCart] = useState([]);

  function updateCartToLocalStorage(value) {
    const currentCart = localStorage.getItem("cart") || "[]";

    const newCart = [...JSON.parse(currentCart), value];

    localStorage.setItem("cart", JSON.stringify(newCart));

    setCart(newCart);
    console.log("cart:", cart);
  }

  useEffect(() => {}, [cart]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          updateCartToLocalStorage({
            id: 1,
            img:"1-3.jpg",
            name: "Ritmo di vita 陀飛輪袖扣",
            type:"經典黑",
            amount: 1,
            price: 1441,
          });
        }}
      >
        設定local
      </button>
      <button
        type="button"
        onClick={() => {
          updateCartToLocalStorage({
            id: 2,
            img:"1-3.jpg",
            name: "Ritmo di vita 陀飛輪袖扣",
            type:"海洋藍",
            amount: 1,
            price: 2000,
          });
        }}
      >
        設定local1
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(JSON.parse(localStorage.getItem("cart")));
          console.log(JSON.parse(localStorage.getItem("cart"))[0]);
          console.log(JSON.parse(localStorage.getItem("cart"))[0].amount);
        }}
      >
        抓LOCAL
      </button>

      <button
        type="button"
        onClick={() => {
            localStorage.removeItem("cart");;
        }}
      >
        刪LOCAL
      </button>
    </>
  );
}

export default TryLocalstrage;
