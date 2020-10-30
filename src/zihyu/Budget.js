import React from 'react'
import './Style/BudgetCSS.css';
import img from './image/box.png';
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
                  <div className="budgetTitle">選擇預算</div>
                  <div className="budget_lineTop"></div>
                  <div className="budget_lineDown"></div>
                  <img className="budget_boxImg" src={img} />
                  
                  <a className="bigBtn" href="/Path_Budget"><button className="startButton">下一步</button></a>
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
