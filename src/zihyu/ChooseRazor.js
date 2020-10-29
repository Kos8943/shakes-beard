import React from 'react'
import './Style/ChooseRazorCSS.css';
class Choose01 extends React.Component


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
                  <div className="title">選擇刮鬍刀</div>
                  <div className="line-under"></div>
                  <div className="line-top2"></div>
                  <div className="btn" href=''><button className="startButton">下一步</button></div>
                </div>
              </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function ChooseRazor(props)
{
  return (
    <Choose01 />
  )
}

export default ChooseRazor
