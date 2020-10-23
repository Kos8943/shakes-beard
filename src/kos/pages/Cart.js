import React, { useState, useEffect } from 'react'
import CartCss from '../styles/CartCss.scss'

function Cart() { 
    const abc = window.screen.width

    if(abc < 376) {
        return (
            <>
                <div>123</div>
            </>
        )
    } else {
        return (
            <>
                <div className="cartArea">
                    <h2 className="d-flex justify-content-center">購物車</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className="cartStepCircle thisStep">1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">2</div>
                        <div className="cartStepFont1">付款方式</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">3</div>
                        <div className="">完成訂單</div>
                    </div>   
                    </div>
                </div>
                <div className="cartItem d-flex">
                    <img src=""></img>
                    <div>123</div>

                </div>
            </>
        )
    }
    
}

export default Cart