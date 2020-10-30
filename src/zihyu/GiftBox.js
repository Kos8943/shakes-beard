import React from 'react'
import './Style/GiftBoxCSS.css';
import { Button } from 'react-bootstrap'


class Class_Gift extends React.Component
{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
            <div className="whiteBox">
              <div className="line-top">
                <div className="line-under"></div>
                <div className="title">客製化修容禮盒</div>
                <div className="line-under"></div>
                <div className="line-top2"></div>
                <div className="subtitle">FOR  THE  MAN  IN  YOUR  LIFE.</div>
                <div className="line-middle"></div>
                <div className="thirdTitle">獨家客製化禮盒，傳遞最真摯的心意</div>
                
                {/* <a className="btn" href="/Path_Budget">
                  <Button className="startButton">開始製作</Button>
                </a> */}

                <a className="bigBtn" href="/Path_Budget"><button className="startButton">開始製作</button></a>


              </div>
            </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function Func_GiftBox(props)
{
  return (
    <Class_Gift />
  )
}

export default Func_GiftBox
