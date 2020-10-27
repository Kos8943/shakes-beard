import React from 'react'
import './Style/GiftBoxCSS.css';

class Game extends React.Component
{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="contain">

        <div className="background"></div>
        <div className="background_white"></div>
        <div className="blueBox">
          <div className="whiteBox">
            <div className="line-top">
              <div className="line-under"></div>
            </div>
            
          </div>
        </div>
        

        
        <div className="status"> {MyString} <br/></div>
      </div>
    );
  }
}

function GiftBox(props)
{
  return (
    <Game />
  )
}

export default GiftBox
