import React from 'react'
import './Style/ChooseBrushCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
import img_Brush01 from './image/Brush01.jpg';
import img_Brush02 from './image/Brush02.jpg';
import img_Brush03 from './image/Brush03.jpg';
import img_Brush04 from './image/Brush04.jpg';
import img_Brush05 from './image/Brush05.jpg';
import img_Brush06 from './image/Brush06.jpg';

class Class_ChooseBrush extends React.Component
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
            <div className="step">Step.3
                  <div className="Title2">選擇刮鬍刷</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>


                  <div className="giftbox_Grid" style={{margin: "10px auto"}}>
                  
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush01} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="1"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "1"}
                        />
                        <div className="giftbox_itemName">拋光刮鬍刷</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 2990</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush02} /></div>

                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="2"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "2"}
                        />
                        <div className="giftbox_itemName">橄欖刮鬍刷</div>
                      </div>

                      <div className="giftbox_itemPrice">NT$ 3000</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush03} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="3"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "3"}
                        />
                        <div className="giftbox_itemName">沼澤刮鬍刷</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 3000</div>
                    </div>
                  
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush04} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="4"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "4"}
                        />
                        <div className="giftbox_itemName">皇家刮鬍刷</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1900</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush05} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="5"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "5"}
                        />
                        <div className="giftbox_itemName">鬃毛刮鬍刷</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1000</div>
                    </div>
                    
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_Brush06} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="6"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "6"}
                        />
                        <div className="giftbox_itemName">美式刮鬍刷</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 1180</div>
                    </div>
                  
                    
                </div>


                <div style={{margin: "10px auto"}}>
                    <Button className="separate backButton" onClick=
                      {     //React程式區間語法 (開始)
                        () =>
                        {
                          window.open("/Path_ChooseRazor", '_self');
                        }
                      }     //React程式區間語法 (結束)
                    
                    > 上一步 </Button>

                    <Button className="startButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_ChooseStand", '_self');
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

function Func_ChooseBrush(props)
{
  return (
    <Class_ChooseBrush />
  )
}

export default Func_ChooseBrush
