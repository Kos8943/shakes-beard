import React, { useState, useEffect } from 'react'
import Delete from '../icon/delete.svg'
import Cuf1 from '../img/1-3.jpg'

function WebCartCard(props) {
    return (
        <>
                    <div className="cartItem d-xl-flex">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName my-auto">Ritmo di vita 陀飛輪袖扣</div>
                        <select className="selectHigh">
                            <option value="1">經典黑</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <select className="selectHigh">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <span className="unitPrice">NT$1,441</span>
                        <span className="subtotal">NT$2,882</span>
                        <img src={Delete} className="deleteIcon"></img>
                    </div>
        </>
    )
}


export default WebCartCard