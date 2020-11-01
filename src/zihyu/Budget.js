import React from 'react'
import './Style/BudgetCSS.css';
import img from './image/box.png';
import { Button } from 'react-bootstrap'
class Class_Budget extends React.Component


{
  render()
  {
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.1
                  <div className="Title2">選擇預算</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>
                  <img className="budget_boxImg" src={img} />

                  <Button className="startButton" onClick=
                  {     //React程式區間語法 (開始)
                    () =>
                    {
                      window.open("/Path_ChooseRazor", '_self');
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

function Func_Budget(props)
{
  return (
    <Class_Budget />
  )
}

export default Func_Budget
