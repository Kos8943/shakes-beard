import React from 'react'
import './Style/GiftBoxCSS_1.css';

<<<<<<< HEAD:src/zihyu/Budget.js
class Budget_1 extends React.Component
=======

class Gift_1 extends React.Component
>>>>>>> a2652ebd88b9308211cbba7f50acc9e0822be585:src/zihyu/GIftBox_1.js
{
  render()
  {
    const MyString = 'Hello';
    
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">step.1
                  <div className="title">選擇預算</div>
                  <div className="line-under"></div>
                  <div className="line-top2"></div>
                  <div className="img"><img src=""></img></div>

                  <div className="btn" href='/giftBox_1' ><button className="startButton">下一步</button></div>
                </div>
              </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function Budget(props)
{
  return (
    <Budget_1 />
  )
}

export default Budget
