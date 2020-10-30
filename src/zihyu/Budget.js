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
                  <div className="title">選擇預算</div>
                  <div className="line-under"></div>
                  <div className="line-top2"></div>
                  <img className="boxImg" src={img} />
                  <div className="bigBtn" href='' ><button className="startButton">下一步</button></div>
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
