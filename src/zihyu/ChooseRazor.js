import React from 'react'
import './Style/ChooseRazorCSS.css';
class Class_ChooseRazor extends React.Component


{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.2
                  <div className="Title2">選擇刮鬍刀</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>
                  
                </div>
              </div>
          </div> 

        </div> 

      </div>     
      
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
