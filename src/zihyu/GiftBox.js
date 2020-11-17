import React from 'react'
import './Style/GiftBoxCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
import img_Left from './image/razor.png';
import img_Right from './image/standBrush.png';

class ClassGift extends React.Component
{
  render()
  {   
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
        <div><img className="Img_Left" src={img_Left} /></div>
        <div><img className="Img_Right" src={img_Right} /></div>
                
          <div className="blueBox1">
              <div className="line-top">
                <div className="line-under"></div>
                <div className="title">客製化修容禮盒</div>
                <div className="line-under"></div>
                <div className="line-top2"></div>
                <div className="subtitle">FOR  THE  MAN  IN  YOUR  LIFE.</div>
                <div className="line-middle"></div>
                <div className="thirdTitle">獨家客製化禮盒，傳遞最真摯的心意</div>

                

                <div style= {{margin: '0 auto', width: '220px'}}
                ><Button className="startButton_page1" onClick=
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
      </>
    );
    
  }
}

function Func_GiftBox(props)
{
  return (
    <ClassGift />
  )
}

export default Func_GiftBox
