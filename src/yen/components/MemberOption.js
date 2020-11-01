import React from 'react'
import MemberUpdateCss from '../styles/MemberUpdateCss.scss'
import MemberUpdate from '../MemberUpdate'

function App(props) {
  return <>
  <div className="container-fluid">
    <div className="row justify-content-between">

        <div className="leftArea col-2 d-flex flex-column">
            <div className="userName">王大明</div>
            <div className="decLine"></div>
            <div className="option">資料修改</div>
            <div className="option">密碼修改</div>
            <div className="option">偏好設定</div>
            <div className="option">收藏清單</div>
            <div className="option">訂單查詢</div>
        </div>


        <div className="rightArea col-9">
            <div className="optionTittle">資料修改</div>
            <div className="decLine"></div>
            <div className="">
                {}
            </div>
        </div>


    </div>
  </div>
      
  </>
}

export default App
