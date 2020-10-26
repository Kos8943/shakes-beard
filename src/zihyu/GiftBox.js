import React from 'react'
import './Style/GiftBoxCSS.css';

class Game extends React.Component
{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="game">
        <div className="game-board">
        <div className="status"> {MyString} <br/></div>
        </div>
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
