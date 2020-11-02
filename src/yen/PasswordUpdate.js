import React from 'react'
import PasswordUpdateCss from './styles/PasswordUpdateCss.scss'

function PasswordUpdate(props) {
    
  return <>
  <div className="container-fluid">
    <div className="row justify-content-between">

        <div className="leftArea col-2 d-flex flex-column">
            <div className="userName">王大明</div>
            <div className="decLine"></div>
            <div className="option">資料修改</div>
            <div className="option thisPage">密碼修改</div>
            <div className="option">偏好設定</div>
            <div className="option">追蹤清單</div>
            <div className="option">訂單查詢</div>
        </div>


        <div className="rightArea col-9">
            <div className="optionTittle">密碼修改</div>
            <div className="decLine"></div>
            <div className="updateArea">
                <div>
                    <div>舊密碼</div>
                    <input type="password" className="updateInput"></input>
                    <div>新密碼</div>
                    <input type="password" className="updateInput"></input>
                    <div>再次確認密碼</div>
                    <input type="password" className="updateInput"></input>
                </div>
                <button className="memberCheck">完成</button>
                <button className="memberCancle">取消</button>
            </div>
        </div>


    </div>
  </div>
      
  </>
}

export default PasswordUpdate
