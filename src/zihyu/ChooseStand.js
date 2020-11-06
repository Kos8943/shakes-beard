import React from 'react'
import './Style/ChooseStandCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
import img_stand01 from './image/stand01.jpg';
import img_stand02 from './image/stand02.jpg';
import img_stand03 from './image/stand03.jpg';
import img_stand04 from './image/stand04.jpg';
import img_stand05 from './image/stand05.jpg';
import img_stand06 from './image/stand06.jpg';


class Class_ChooseStand extends React.Component
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
      
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.4
                <div className="Title2">選擇修容架</div>
                <div className="lineTop"></div>
                <div className="lineDown"></div>

                  <div className="giftbox_Grid">
                  
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand01} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="1"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "1"}
                        />
                        <div className="giftbox_itemName">曜石修容架</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 880</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand02} /></div>

                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="2"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "2"}
                        />
                        <div className="giftbox_itemName">紳士修容架</div>
                      </div>

                      <div className="giftbox_itemPrice">NT$ 780</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand03} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="3"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "3"}
                        />
                        <div className="giftbox_itemName">胡桃修容架</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 980</div>
                    </div>
                  
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand04} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="4"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "4"}
                        />
                        <div className="giftbox_itemName">木頭修容架</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 980</div>
                    </div>

                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand05} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="5"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "5"}
                        />
                        <div className="giftbox_itemName">尊爵刮鬍刀</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 780</div>
                    </div>
                    
                    <div className="giftbox_Item col">
                      <div><img className="giftbox_ItemImg" src={img_stand06} /></div>
                      
                      <div style={{display: "flex", margin: "auto", width: "100px"}}>
                        <input style={{margin: "auto"}}
                          type="radio"
                          value="6"
                          onChange={this.OnChangeRadio}
                          checked={StandGoods === "6"}
                        />
                        <div className="giftbox_itemName">紅壇修容架</div>
                      </div>
                      
                      <div className="giftbox_itemPrice">NT$ 980</div>
                    </div>
                    
                      
                  </div>

                  

                  <div style={{margin: "19px auto"}}>
                    <Button className="separate backButton" onClick=
                      {     //React程式區間語法 (開始)
                        () =>
                        {
                          window.open("/Path_ChooseBrush", '_self');
                        }
                      }     //React程式區間語法 (結束)
                    
                    > 上一步 </Button>

                    <Button className="startButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_Color", '_self');
                      }
                    }     //React程式區間語法 (結束)
                    
                    > 下一步 </Button>
                  </div>

                  
                </div>
              </div>
            </div>  
      </div> 

      



      
    );
  }
}

function Func_ChooseStand(props)
{
  return (
    <Class_ChooseStand />
  )
}

export default Func_ChooseStand
