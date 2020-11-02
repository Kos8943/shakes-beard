import React from 'react'
import './Style/ChooseRazorCSS.css';
import { Button } from 'react-bootstrap'
class Class_ChooseRazor extends React.Component


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
                <div className="step">Step.2
                  <div className="Title2">選擇刮鬍刀</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <Button className="backButton" onClick=
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
