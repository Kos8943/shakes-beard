import React, { useState, useEffect } from 'react'

function PaymentPrice(props) {
    return (
        <>
            <div className="priceArea ml-auto d-flex">
                        <div className="priceArea font">
                            <div>折扣：</div>
                            <div>運費：</div>
                            <div>總計：</div>
                        </div>
                        <div className="priceArea font totalPrice">
                            <div>NT$ -150</div>
                            <div>NT$ 150</div>
                            <div>NT$ 8,796</div>
                        </div> 
            </div>     
        </>
    )
}

export default PaymentPrice