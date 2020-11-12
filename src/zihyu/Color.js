import React from 'react'
import './Style/ColorCSS.css';
import './Style/CommonCSS.css';
import imgGiftBox_1 from './image/box1.png';
import imgGiftBox_2 from './image/box2.png';
import imgGiftBox_3 from './image/box3.png';
import imgGiftBox_4 from './image/box4.png';
import imgGiftBox_5 from './image/box5.png';


import { Button } from 'react-bootstrap'

let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const SelectRange = urlParams.get('SelectRange');             //第一頁選擇的參數   //上一頁選擇的參數
const SelectRazorIndex = urlParams.get('SelectRazorIndex');
const SelectBrushIndex = urlParams.get('SelectBrushIndex');
const SelectStandIndex = urlParams.get('SelectStandIndex');

let SelectColorIndex = "-1";

class Class_Color extends React.Component
{

  state = {
    text: ""
  };
  onChangeText = e => {
    this.setState({
      text: e.target.value
    });
  };


  render()
  {
    const { text } = this.state;
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.5
                  <div className="Title2">選擇顏色</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div><img className="color_boxImg" id="change_boxColor" src={imgGiftBox_1} /></div>
                  <div className="color_button">
                    <button className="change color_button1" onClick=
                    {   
                      () =>
                      {
                        SelectColorIndex = "0";
                        var targetDiv = document.getElementById("change_boxColor");
                        targetDiv.setAttribute("src", imgGiftBox_1);
                      }
                    }></button>
                    <button className="change color_button2" onClick=
                    {   
                      () =>
                      {
                        SelectColorIndex = "1";
                        var targetDiv = document.getElementById("change_boxColor");
                        targetDiv.setAttribute("src", imgGiftBox_2);
                      }
                    }></button>
                    <button className="change color_button3" onClick=
                    {   
                      () =>
                      {
                        SelectColorIndex = "2";
                        var targetDiv = document.getElementById("change_boxColor");
                        targetDiv.setAttribute("src", imgGiftBox_3);
                      }
                    }></button>
                    <button className="change color_button4" onClick=
                    {   
                      () =>
                      {
                        SelectColorIndex = "3";
                        var targetDiv = document.getElementById("change_boxColor");
                        targetDiv.setAttribute("src", imgGiftBox_4);
                      }
                    }></button>
                    <button className="change color_button5" onClick=
                    {   
                      () =>
                      {
                        SelectColorIndex = "4";
                        var targetDiv = document.getElementById("change_boxColor");
                        targetDiv.setAttribute("src", imgGiftBox_5);
                      }
                    }></button>
                  </div>
                  <div className="message_title">留言小卡內容：</div>
                  <input type="text" className="message" value={text} onChange={this.onChangeText} />

                  <div style={{margin: "19px auto"}}>
                      <Button className="separate backButton" onClick=
                        {     //React程式區間語法 (開始)
                          () =>
                          {
                            window.open("/Path_ChooseStand", '_self');
                          }
                        }     //React程式區間語法 (結束)
                      
                      > 上一步 </Button>

                      <Button className="startButton" onClick=
                      {     //React程式區間語法 (開始)
                        () =>
                        {
                          if (SelectBrushIndex == "-1")
                          {
                            alert("請選擇一樣商品");
                          }
                          else
                          {

                            window.open("/Path_Finish?SelectRange=" + SelectRange +
                                                    "&SelectRazorIndex=" + SelectRazorIndex +
                                                    "&SelectBrushIndex=" + SelectBrushIndex +
                                                    "&SelectStandIndex=" + SelectStandIndex +
                                                    "&SelectColorIndex=" + SelectColorIndex +
                                                    "&Text=" + text,
                                                    '_self');
                          }
                        }     //React程式區間語法 (結束)
                      }
                    > 完成 </Button>
                  
                  </div>

                </div>
          </div>
        </div> 

      </div> 

      



</>
    );
  }
}

function Func_Color(props)
{
  return (
    <Class_Color />
  )
}

export default Func_Color
