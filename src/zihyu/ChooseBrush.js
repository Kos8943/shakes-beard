import React from 'react'
import './Style/ChooseBrushCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
class Class_ChooseBrush extends React.Component


{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.3
                  <div className="Title2">選擇刮鬍刷</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <Button className="backButton" onClick=
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
