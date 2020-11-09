import React from 'react'
function MemberPreferenceSetting(props) {
  return <>
      <div className="rightArea col-9">
            <div className="optionTittle">偏好設定</div>
            <div className="decLine"></div>
            
            <div className="updateArea">
                <div className="tittle2">付款方式</div>
                <div>
                    <div className="cardText">信用卡卡號</div>
                    <div className="d-flex">
                    <input type="text" className="cardNum" value=""></input>
                    <input type="text" className="cardNum" value=""></input>
                    <input type="text" className="cardNum" value=""></input>
                    <input type="text" className="cardNum" value=""></input>
                    </div>

                    <div className="cardText">有效日期</div>
                    <div className="d-flex">
                        <select className="cardDate">
                            <option>1</option>
                        </select>
                        <div className="cardDateText">月</div>
                        <select className="cardDate">
                            <option>13</option>
                        </select>
                        <div className="cardDateText">日</div>
                    </div>

                    <div className="cardText">檢核碼(3碼)</div>
                    <input type="text" className="updateInput" placeholder="信用卡背面3碼"></input>

                    

                    <div className="d-flex flex-column">
                        <div className="cardText">發票設定</div>
                        <div>
                            <input type="radio" className="personal" id="personal" name="invoice" value="兩聯式發票"></input>
                            <label for="personal">兩聯式發票(個人)</label>    
                        </div>
                        <div>
                            <input type="radio" className="personal" id="company" name="invoice" value="三聯式發票"></input>
                            <label for="company">三聯式發票(公司行號)</label>    
                        </div>
                        <div>
                            <input type="radio" className="personal" id="electronic" name="invoice" value="電子發票"></input>
                            <label for="electronic">電子發票</label>
                            <input type="text" className="electronic" placeholder="手機條碼" ></input>        
                        </div>
                        <div>
                            <input type="radio" className="personal" id="donate" name="invoice" value="捐贈發票"></input>
                            <label for="donate">捐贈發票</label>
                        </div>
                    </div>
                    

                    



                    
                </div>



               



                <button className="memberCheck">完成</button>
                <button className="memberCancle">取消</button>
            </div>
        </div>
  </>
}

export default MemberPreferenceSetting
