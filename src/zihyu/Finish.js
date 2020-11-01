import React from 'react'
import './Style/BudgetCSS.css';
import img from './image/box.png';
import { Button } from 'react-bootstrap'
class Class_Finish extends React.Component


{
  render()
  {
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.6
                  <div className="Title2">訂購完成</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>
                  <img className="budget_boxImg" src={img} />

                </div>
              </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function Func_Finish(props)
{
  return (
    <Class_Finish />
  )
}

export default Func_Finish
