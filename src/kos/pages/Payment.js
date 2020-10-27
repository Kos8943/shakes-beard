import React, { useState, useEffect } from 'react'
import cuf1 from '../img/1-3.jpg'
import CartCss from '../styles/CartCss.scss'
import PayCss from '../styles/PayCss.scss'
import Delete from '../icon/delete.svg'



function Payment() {
    return (
        <>
           <div className="cartArea">
                    <h2 className="d-flex justify-content-center">送出訂單</h2>
                    <div className="cartStep d-flex justify-content-center">
                    <div className="d-flex align-items-start flex-column">
                        <div className="cartStepCircle otherStep">1</div>
                        <div className="cartStepFont">購物車</div>
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle thisStep">2</div>
                        <div className="cartStepFont">付款方式</div>   
                    </div>
                    <div className="cartStepLine"></div>
                    <div>
                        <div className="cartStepCircle otherStep">3</div>
                        <div className="cartStepFont">完成訂單</div>
                    </div>   
                    </div>
            </div>

            <div className="PayCard">
                <h3 className="d-flex justify-content-center">你的訂單</h3>

                <div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div>
                    <div className="cartItem d-flex">
                        <img className="itemImg" src={cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>       
                        <span className="productTpye">經典黑</span>
                        <span className="amount">1</span>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                    </div>
                    <div className="priceArea ml-auto d-flex">
                        <div className="priceArea font">
                            <div>折扣：</div>
                            <div>運費：</div>
                            <div>總計：</div>
                        </div>
                        <div className="priceArea font">
                            <div>NT$ -150</div>
                            <div>NT$ 150</div>
                            <div>NT$ 8,796</div>
                        </div> 
                    </div>             
                </div>

                <hr />

                <div className="recipient">
                    <h3 className="d-flex justify-content-center">收件人資訊</h3>
                        <form>
                            <p>收件人：</p>
                            <input placeholder="王大明" className="inputStyle"></input>
                            <p>手機：</p>
                            <input placeholder="0912123456" className="inputStyle"></input>
                            <p>市話：</p>
                            <input placeholder="02-12345678" className="inputStyle"></input>
                            <p>地址：</p>
                            <select>
                                <option value="台北市">台北市</option>
                                <option value="新北市">新北市</option>
                                <option value="桃園市">桃園市</option>
                            </select>
                            <select>
                                <option value="大安區">大安區</option>
                                <option value="中正區">中正區</option>
                                <option value="內湖區">內湖區</option>
                            </select>
                            <input className="address"></input>
                            <h3 className="d-flex justify-content-center">發票</h3>
                            <div className="d-flex justify-content-around">
                                <div>
                                    <input type="radio" className="radio"></input>
                                    <label>個人電子發票</label>
                                </div>
                                <div>
                                    <input type="radio"></input>
                                    <label>捐贈發票</label>
                                </div>
                                <div>
                                    <input type="radio"></input>
                                    <label>公司戶電子發票</label>
                                </div>
                                <div>
                                    <input type="radio"></input>
                                    <label>手機載具</label>
                                </div>
                            </div>
                        </form>
                </div>


            </div>         
        </>
    )
}

export default Payment