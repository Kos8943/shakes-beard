import React, { useState, useEffect } from 'react'
import CartCss from '../styles/CartCss.scss'
import Complete from '../styles/Complete.scss'
import { Link } from "react-router-dom";

function Paycomplete() {
    return (
        <>
            <div className="cartArea">
                    <h2 className="d-flex justify-content-center">訂單完成</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className="cartStepCircle  otherStep">1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">2</div>
                        <div className="cartStepFont">送出訂單</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle thisStep">3</div>
                        <div className="cartStepFont">訂單完成</div>
                    </div>   
                    </div>
                </div>

                <div className="d-flex justify-content-around payComplete">
                <div>
                    <h4>親愛的 王大明</h4>
                    <p>非常感謝你在Shakes Beard購物！</p>
                    <p>我們已收到你的訂單！</p>
                    <p>為了讓你盡快收到貨品，我們正準備發貨。</p>
                    <p>當貨品從倉庫發出，我們會再以電子郵件通知你。</p>
                    <p>關於詳細訂單內容，請點擊下方按鈕檢查。</p>
                </div>
                    <div></div>

                </div>

                <hr />
                <div　className="d-flex justify-content-around checkList">
                    <div>
                        <h4>你的訂單：</h4>
                        <p>訂單號碼：12345678</p>
                        <p>總金額：NT$8,796</p>
                        <p>貨品數量：6</p>
                    </div>
                    <div className="checkOrder">
                        <Link to="/ordercheck"><button className="checkOrderButton">查看訂單＞</button></Link>
                    </div>
                </div>
                
        </>
    )
}

export default Paycomplete