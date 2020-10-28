import React from 'react'
import './Style/GiftBoxCSS.css';

class GiftBox_1 extends React.Component
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
                <a className="hero-text" href='/giftBox'><div className="btn"><button className="startButton">開始製作</button></div></a>

              </div>
            </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function GiftBox_1(props)
{
  return (
    <GiftBox_1 />
  )
}

export default GiftBox_1
