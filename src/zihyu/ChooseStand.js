import React from 'react'
import './Style/ChooseStandCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'
import img_stand01 from './image/stand01.jpg';
import img_stand02 from './image/stand02.jpg';
import img_stand03 from './image/stand03.jpg';
import img_stand04 from './image/stand04.jpg';
import img_stand05 from './image/stand05.jpg';
import img_stand06 from './image/stand06.jpg';



class Class_ChooseStand extends React.Component
{
  render()
  {
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
            <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.4
                  <div className="Title2">選擇修容架</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div className="Grid">
                  
                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand01} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand02} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand03} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>
                  
                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand04} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand05} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>
                    
                    <div className="giftbox_Item">
                      <div><img className="giftbox_ItemImg" src={img_stand06} /></div>
                      <div className="Grid">
                        <div>⊙</div>
                        <div>皇家刮鬍刀</div>
                        </div>
                      <div>NT$ 1580</div>
                  </div>

                  

                  <div className="Grid">
                    <Button className="backButton" onClick=
                      {     //React程式區間語法 (開始)
                        () =>
                        {
                          window.open("/Path_ChooseBrush", '_self');
                        }
                      }     //React程式區間語法 (結束)
                    
                    > 上一步 </Button>

                    <Button className="startButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_Color", '_self');
                      }
                    }     //React程式區間語法 (結束)
                    
                    > 下一步 </Button>
                  </div></div>

                  
                </div>
              </div>
            </div>  
        </div> 
      </div>
      



</>
    );
  }
}

function Func_ChooseStand(props)
{
  return (
    <Class_ChooseStand />
  )
}

export default Func_ChooseStand
