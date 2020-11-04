import React, { useState } from 'react'
// import MemberUpdateCss from '../styles/MemberUpdateCss.scss'
import MemberDataUpdateTable from './components/MemberDataUpdateTable'
import MemberPasswordUpdateTable from './components/MemberPasswordUpdateTable'

function MemberOption(props) {
    const [pageTitle, setPageTitle] = useState("資料修改")

    return <>

        <div className="container-fluid">
            <div className="row justify-content-between">

                <div className="leftArea col-2 d-flex flex-column">
                    <div className="userName">王大明</div>
                    <div className="decLine" ></div>
                    <div className="option" onClick={() => { setPageTitle("資料修改") }}>資料修改</div>
                    <div className="option" onClick={() => { setPageTitle("密碼修改") }}>密碼修改</div>
                    <div className="option" onClick={() => { setPageTitle("偏好設定") }}>偏好設定</div>
                    <div className="option" onClick={() => { setPageTitle("收藏清單") }}>收藏清單</div>
                    <div className="option" onClick={() => { setPageTitle("訂單查詢") }}>訂單查詢</div>
                </div>
                {(pageTitle === "資料修改") ?
                    <MemberDataUpdateTable title="資料修改" /> : ''}

                {(pageTitle === "密碼修改") ?
                    <MemberPasswordUpdateTable title="密碼修改" /> : ''}

            </div>
        </div>





        {/* <div className="rightArea col-9">
            <div className="optionTittle">資料修改</div>
            <div className="decLine"></div>
            <div className="">
                {}
            </div>
        </div> */}







    </>
}

export default MemberOption
