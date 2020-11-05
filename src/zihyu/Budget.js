import React from 'react'
import './Style/BudgetCSS.css';
import './Style/CommonCSS.css';
import img_box from './image/box.png';
import { Button } from 'react-bootstrap'

/** 安裝Slider (https://www.npmjs.com/package/react-bootstrap-range-slider)
 * Example (https://jaywilz.github.io/react-bootstrap-range-slider/)
 * npm install react-bootstrap-range-slider
 */
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { auto } from '@popperjs/core';
 
const Step = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <div style={{width: "80%", margin: "auto"}}>
    <RangeSlider className="silderbox"
      value={value}
      onChange={e => setValue(e.target.value)}
      step={50}
      tooltip='off'
    />
    </div>
  );

};

class Class_Budget extends React.Component
{
  render()
  {
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox">
              <div className="whiteBox">
                <div className="step">Step.1
                  <div className="Title2">選擇預算</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>

                  <div><img className="budget_boxImg" src={img_box} /></div>

                  <Step></Step>

                  <div className="Grid align-items-center">
                    <div className="ramgeNumber ramge3000 col">小於<br/>3000元</div>
                    <div className="ramgeNumber ramge3000to4000 col-7">3000元~4000元</div>
                    <div className="ramgeNumber ramge4000 col">大於<br/>4000元</div>
                  </div>
                  
                  <div><Button className="startButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_ChooseRazor", '_self');
                      }
                    }     //React程式區間語法 (結束)
                  
                    > 下一步 </Button>
                  </div>
                </div>
              </div>
          </div> 

        </div> 

      </div>     
      
    );
  }
}

function Func_Budget(props)
{
  return (
    <Class_Budget />
  )
}

export default Func_Budget
