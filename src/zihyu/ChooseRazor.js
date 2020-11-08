import React from 'react'
import './Style/ChooseRazorCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
import img_Razor01 from './image/Razor01.png';
import img_Razor02 from './image/Razor02.png';
import img_Razor03 from './image/Razor03.png';
import img_Razor04 from './image/Razor04.png';
import img_Razor05 from './image/Razor05.png';
import img_Razor06 from './image/Razor06.png';

//Ref : https://www.sitepoint.com/get-url-parameters-with-javascript/
let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const SelectRange = urlParams.get('SelectRange')
console.log(SelectRange);

class Class_ChooseRazor extends React.Component
{
  state =
  {
    StandGoods: ''
  };

  OnChangeRadio = e =>
  {
    this.setState({
      StandGoods: e.target.value
    });
    // console.log("state : " + JSON.stringify(this.state, null, 4));
  };


  render()
  {  
    const { StandGoods } = this.state;

    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
            <div className="step">Step.2
                  <div className="Title2">選擇刮鬍刀</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>


                <div className="giftbox_Grid align-items-center">
                  
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor01} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="1"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "1"}
                        />
                        <div className="giftbox_itemName">特務刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 980</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor02} /></div>

                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="2"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "2"}
                        />
                        <div className="giftbox_itemName">消光刮鬍刀</div>
                      </div>

                      <div className="giftbox_itemPrice">NT$ 1090</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor03} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="3"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "3"}
                        />
                        <div className="giftbox_itemName">復古刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1090</div>
                    </div>
                </div>

                  
                <div className="giftbox_Grid align-items-center" style={{margin: "15px auto 0px"}}>
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor04} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="4"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "4"}
                        />
                        <div className="giftbox_itemName">尊爵刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1580</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor05} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="5"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "5"}
                        />
                        <div className="giftbox_itemName">鹿角刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1480</div>
                    </div>
                    
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Razor06} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="6"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "6"}
                        />
                        <div className="giftbox_itemName">牛角刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1650</div>
                    </div>
                  
                </div>
                    
                

                

                <div style={{margin: "16px auto"}}>
                  <Button className="separate backButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_Budget", '_self');
                      }
                    }     //React程式區間語法 (結束)
                  
                  > 上一步 </Button>

                  <Button className="startButton" onClick=
                  {     //React程式區間語法 (開始)
                    () =>
                    {
                      window.open("/Path_ChooseBrush", '_self');
                    }
                  }     //React程式區間語法 (結束)
                  
                  > 下一步 </Button>
                </div>

            </div>      
            
          </div> 

        </div> 
      </div>
      



</>
    );
  }
}

function Func_ChooseRazor(props)
{
  return (
    <Class_ChooseRazor />
  )
}

export default Func_ChooseRazor
