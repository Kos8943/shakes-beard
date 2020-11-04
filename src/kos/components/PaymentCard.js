import React, { useState, useEffect } from 'react'

function PaymentCard(props) {
    return (
        <>

        {/* 網頁 */}
            <div className="cartItem d-xl-flex">
                        <img className="itemImg" src="./imgs/1-3.jpg"></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
            </div>

        {/* 手機 */}

            <div className="cartItemPhone">
                        <img className="itemImg" src="./imgs/1-3.jpg"></img>
                        <div className="itemName">Ritmo di vita 陀飛輪袖扣</div>
                        <div className="KosProjectType">經典黑</div>
                        <div className="PaymentunitPrice">NT$1,441</div>
                
                        <div className="PaymentQty">X1</div>
                        <div className="PaymentSubtotal">NT$2,882</div>
            </div>
        </>
    )
}

export default PaymentCard