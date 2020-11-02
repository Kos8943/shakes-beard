import React from 'react'
import './Style/ChooseStandCSS.css';
import { Button } from 'react-bootstrap'
import img_1 from './image/razor.png';
import img_2 from './image/razor.png';
import img_3 from './image/razor.png';
import img_4 from './image/razor.png';
import img_5 from './image/razor.png';
import img_6 from './image/razor.png';

class Class_ChooseStand extends React.Component
{
  render()
  {
    return (
      <>
      <div className="contain">
        <div className="background_white">
      
              <div className="whiteBox">
                <div className="step">Step.4
                  <div className="Title2">選擇修容架</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div className="Grid">
                  
                    <div className="Item">
                      <div><img className="ItemImg" src={img_1} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="Item">
                      <div><img className="ItemImg" src={img_2} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="Item">
                      <div><img className="ItemImg" src={img_3} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>
                  
                    <div className="Item">
                      <div><img className="ItemImg" src={img_4} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>

                    <div className="Item">
                      <div><img className="ItemImg" src={img_5} /></div>
                      <div>皇家刮鬍刀</div>
                      <div>NT$ 1580</div>
                    </div>
                    
                    <div className="Item">
                      <div><img className="ItemImg" src={img_6} /></div>
                      <div className="Grid">
                        <div>⊙</div>
                        <div>皇家刮鬍刀</div>
                        </div>
                      <div>NT$ 1580</div>
                    </div>

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
