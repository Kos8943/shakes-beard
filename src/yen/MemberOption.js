import React, { useState } from 'react'
import MemberOptionCss from './styles/MemberOptionCss.scss'
import MemberDataUpdateTable from './components/MemberDataUpdateTable'
import MemberPasswordUpdateTable from './components/MemberPasswordUpdateTable'
import MemberPreferenceSetting from './components/MemberPreferenceSetting'
import MemberFavorites from './components/MemberFavorites'














function MemberOption(props) {
    const [pageTitle, setPageTitle] = useState("資料修改")


    return <>

        <div className="container-fluid">
            <div className="row justify-content-between">

                <div className="leftArea col-lg-2 d-flex">
                    <div className="userName">王大明</div>
                    <div className="decLine" ></div>
                    <div className={`option ${(pageTitle === "資料修改") ? "thisPage" : ''}`} onClick={() => { setPageTitle("資料修改") }}>資料修改</div>
                    <div className={`option ${(pageTitle === "密碼修改") ? "thisPage" : ''}`} onClick={() => { setPageTitle("密碼修改") }}>密碼修改</div>
                    <div className={`option ${(pageTitle === "偏好設定") ? "thisPage" : ''}`} onClick={() => { setPageTitle("偏好設定") }}>偏好設定</div>
                    <div className={`option ${(pageTitle === "追蹤清單") ? "thisPage" : ''}`} onClick={() => { setPageTitle("追蹤清單") }}>追蹤清單</div>
                    <div className={`option ${(pageTitle === "訂單查詢") ? "thisPage" : ''}`} onClick={() => { setPageTitle("訂單查詢") }}>訂單查詢</div>
                </div>

                {(pageTitle === "資料修改") ?
                    <MemberDataUpdateTable title="資料修改" /> : ''}

                {(pageTitle === "密碼修改") ?
                    <MemberPasswordUpdateTable title="密碼修改" /> : ''}

                {(pageTitle === "偏好設定") ?
                    <MemberPreferenceSetting title="偏好設定" /> : ''}

                {(pageTitle === "追蹤清單") ?
                    <MemberFavorites title="追蹤清單" /> : ''}

                {(pageTitle === "訂單查詢") ?
                    <MemberDataUpdateTable title="訂單查詢" /> : ''}








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
