import React, { useState, useEffect } from 'react'
import MemberOption from '../../yen/MemberOption'

function MemberOptionContent () {
    return(
        <>
            <div className="container-fluid">
                <div className="row justify-content-between">
                    <MemberOption/>
                    <div className="rightArea col-9">123</div>
                    <div className="decLine"></div>
                </div>
            </div>
        </>
    )
}

export default MemberOptionContent