import React, { useState, useEffect } from 'react'
import Cuf1 from '../img/1-3.jpg'
import Trash from '../icon/trash.svg'

function PhoneCartCard(props) {
    const [total, setTotal]= useState(1)
   
    return (
        
         <>
            <div className="cartItemPhone">
                        <img className="itemImg" src={Cuf1}></img>
                        <div className="itemName">Ritmo di vita 陀飛輪袖扣</div>
                        <div className="KosProjectType">經典黑</div>
                        <div className="unitPrice">NT$1,441</div>
                        <div className="d-flex counterArea">
                            <div className="cartMinus" onClick={() => total == 1 ? setTotal(1) : setTotal(total - 1)}>-</div>
                            <div className="cartQty">{total}</div>
                            <div className="cartAdd" onClick={() => setTotal(total + 1)}>+</div>
                            <img src={Trash} className="CartTarsh"></img>
                            <div className="subtotal">NT$2,882</div>
                        </div>
                        
                        {/* <img src={Delete} className="deleteIcon"></img> */}
            </div>
        </>
    )
}

export default PhoneCartCard