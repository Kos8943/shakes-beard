import React from 'react'
import './Style/ChooseRazorCSS.css';
import { Button } from 'react-bootstrap'
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

                  <a href="/Path_Budget" target="_blank">
                      <Button className="hayy"> Link Button </Button>
                  </a>

                  
                  <a className="bigBtn" href="/Path_Budget"><button className="backButton">上一步</button></a>
                  <a className="bigBtn" href=""><button className="startButton">下一步</button></a>

                  
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
