import React from 'react'
import './Style/ColorCSS.css';
import './Style/CommonCSS.css';
import img_box from './image/box.png';
import { Button } from 'react-bootstrap'
class Class_Color extends React.Component


{
  render()
  {
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.5
                  <div className="Title2">選擇顏色</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div><img className="color_boxImg" src={img_box} /></div>
                  <button className="color_button1"></button>
                  <button className="color_button2"></button>
                  <button className="color_button3"></button>
                  <button className="color_button4"></button>
                  <button className="color_button5"></button>
                  <div className="message_card">留言小卡內容：</div>
                  <input className="message"></input>

                  <div className="Grid">
                  <Button className="backButton" onClick=
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
