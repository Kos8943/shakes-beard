import React from 'react'
import './Style/ColorCSS.css';
import './Style/CommonCSS.css';
import img_box from './image/box.png';
import imgbox1 from './image/box1.png';
import imgbox2 from './image/box2.png';
import imgbox3 from './image/box3.png';

import { Button } from 'react-bootstrap'

// constructor();
//   super()

//   this.onClickChange = this.onClickChange.bind(this)

//   const imgbox1 = require("./image/box1.png");
//   const imgbox2 = require("./image/box2.png");
//   const imgbox3 = require("./image/box3.png");

//   this.state = {
//     index: 0,
//     imgList: [img_box1, img_box2, img_box3]
//   }

// onClickChange() ;
//     if (this.state.index +1 === this.state.imgList.length)
//     this.setState({
//       index: 0
//     })
//     else{
//       this.setState({
//         index: this.state.index + 1
//       })
//     }

class Class_Color extends React.Component


{
  render()
  {
    return (
      <>
      {/* <div>
        <img src={this.state.imgList[this.state.index]} alt="" />
        <button onClick={this.onClickChange}></button>
      </div> */}
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.5
                  <div className="Title2">選擇顏色</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div><img className="color_boxImg" id="change_boxColor" src={img_box} /></div>
                  <div className="color_button">
                    <button className="change color_button1"></button>
                    <button className="change color_button2"></button>
                    <button className="change color_button3"></button>
                    <button className="change color_button4"></button>
                    <button className="change color_button5"></button>
                  </div>
                  <div className="message_title">留言小卡內容：</div>
                  <input className="message"></input>

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
                          window.open("/Path_Finish", '_self');
                        }
                      }     //React程式區間語法 (結束)
                    
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
