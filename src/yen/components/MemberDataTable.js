import React from 'react'

function MemberDataTable(props) {
  return <>
        <div className="rightArea col-9">
            <div className="optionTittle">{props.title}</div>
            <div className="decLine"></div>
            <div className="updateArea">
            <div>
                    <div>會員帳號</div>
                    <input type="text" disabled="disabled" className="updateInput" value="xxx@gmail.com" ></input>
                    <div>姓名</div>
                    <input type="text" className="updateInput" value="王大明"></input>
                    <div>生日</div>
                    <div className="d-flex">
                        <select className="birthday">
                            <option>1</option>
                        </select>
                        <div className="birthdayText">月</div>
                        <select className="birthday">
                            <option>13</option>
                        </select>
                        <div className="birthdayText">日</div>
                    </div>
                    {/* <input type="text" className="updateInput" placeholder="YYYY-MM-DD"></input> */}
                    <div>手機</div>
                    <input type="text" className="updateInput"></input>
                    <div>地址</div>
                    <div className="d-flex">
                        <select>
                            <option>台北市</option>
                        </select>
                        <select>
                            <option>大安區</option>
                        </select>
                    </div>
                    <input type="text" className="updateInput"></input> 
                </div>
                <button className="memberCheck">完成</button>
                <button className="memberCancle">取消</button>
            </div>
        </div>

  </>
}

export default MemberDataTable



