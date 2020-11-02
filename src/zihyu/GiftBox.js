import React from 'react'
import './Style/GiftBoxCSS.css';
import { Button } from 'react-bootstrap'
import img from './image/razor.png';

class Class_Gift extends React.Component
{
  render()
  {   
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
        <div><img className="Img_Left" src={img} /></div>
                
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

                

                <div style= {{margin: '0 auto', width: '220px'}}
                ><Button className="startButton" onClick=
                {     //React程式區間語法 (開始)
                  () =>
                  {
                    window.open("/Path_Budget", '_self');
                  }
                }     //React程式區間語法 (結束)
              
              > 開始製作 </Button></div>


              </div>
            </div>
          </div> 

        </div> 

      </div>     
      </>
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
