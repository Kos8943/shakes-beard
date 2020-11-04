import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function CartPrice(props) {
    return (
        <>
                    <div className="priceArea ml-auto d-flex">
                        <div className="priceArea font">
                            <div>優惠代碼：</div>
                            <div>折扣：</div>
                            <div>運費：</div>
                            <div>總計：</div>
                        </div>

                        <div className="priceArea font totalPrice priceColor">
                            <div><input></input></div>
                            <div>NT$ -150</div>
                            <div>NT$ 150</div>
                            <div>NT$ 8,796</div>
                        </div>
                        
                    </div>
                    <div className="sumitBtn ml-auto">
                        <Link to="/payment">送出訂單</Link>
                    </div>
        </>
    )
}

export default CartPrice