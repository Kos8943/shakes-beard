// import React from 'react'
// import './Style/GiftBoxCSS.css';
// import razor from './image/razor.png'

class Gift extends React.Component
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
                <div className="btn"><button className="startButton">開始製作</button></div>
                <div className="img_razor"><img alt="razor" src={razor} /></div>

              </div>
            </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function GiftBox(props)
{
  return (
    <Gift />
  )
}

export default GiftBox
