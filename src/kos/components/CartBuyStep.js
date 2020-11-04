import React, { useState, useEffect } from 'react'

function CartBuyStep(props) {
console.log('step',props.step)
    return (
        <>
            <div className="cartArea">
                    <h2 className="d-flex justify-content-center">購物車</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className=  {`cartStepCircle ${(props.step === '1')?"thisStep":"otherStep"}`}  >1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className={`cartStepCircle ${(props.step === '2')?"thisStep":"otherStep"}`}>2</div>
                        <div className="cartStepFont">送出訂單</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className={`cartStepCircle ${(props.step === '3')? "thisStep": "otherStep"}`}>3</div>
                        <div className="cartStepFont">訂單完成</div>
                    </div>   
                    </div>
                </div>
        </>
    )
}

export default CartBuyStep