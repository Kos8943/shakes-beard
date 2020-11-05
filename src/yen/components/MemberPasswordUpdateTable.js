import React from 'react'

function MemberPasswordUpdateTable(props) {
  return <>
        <div className="rightArea col-9">
            <div className="optionTittle">{props.title}</div>
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

  </>
}

export default MemberPasswordUpdateTable



