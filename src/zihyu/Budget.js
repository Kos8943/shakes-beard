import React from 'react'
import './Style/BudgetCSS.css';
import './Style/CommonCSS.css';
import Img_Small from './image/Box_Small.png';
import Img_Mid from './image/Box_Mid.png';
import Img_Big from './image/Box_Big.png';
import { Button } from 'react-bootstrap';
import {Animated} from "react-animated-css";

/** 安裝Slider (https://www.npmjs.com/package/react-bootstrap-range-slider)
 * Example (https://jaywilz.github.io/react-bootstrap-range-slider/)
 * npm install react-bootstrap-range-slider*/
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { auto } from '@popperjs/core';
 
let SelectRange = "1";
const Step = () => {

  const [ value, setValue ] = React.useState(50);

  return (
    <div style={{width: "58%", margin: "auto"}}>
    <RangeSlider className="silderbox"
      value={value}
      onChange={e =>
        {
          setValue(e.target.value);
          var targetDiv = document.getElementById("changebudget_boxImg");
          
          switch (e.target.value)
          {
            case "0":
              SelectRange = "0";
              targetDiv.setAttribute("src", Img_Mid);
              break;
            case "50":
              SelectRange = "1";
              targetDiv.setAttribute("src", Img_Mid);
              break;
            case "100":
              SelectRange = "2";
              targetDiv.setAttribute("src", Img_Big);
              break;
          }
        }
      }
      step={50}
      tooltip='off'
    />
    </div>
  );

};

export class Class_Budget extends React.Component
{
  render()
  {
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.1
                    <div className="Title2">選擇預算</div>
                    <div className="lineTop"></div>
                    <div className="lineDown"></div>

                    <Animated animationIn="rubberBand" animationOut="bounce" animationInDuration={800} animationOutDuration={800} isVisible={false}>
                      <img className="budget_boxImg" id="changebudget_boxImg" src={Img_Mid} />
                    </Animated>

                    <Step></Step>

                    <div className="budget_Grid align-items-center">
                      <div className="ramgeNumber ramge3000 col">小於<br/>2000元</div>
                      <div className="ramgeNumber ramge3000to4000 col-7">2000元~5000元</div>
                      <div className="ramgeNumber ramge4000 col">大於<br/>5000元</div>
                    </div>
                    
                    <div style={{margin: "16px auto"}}>
                      <Button className="startButton" onClick=
                        {     //React程式區間語法 (開始)
                          () =>
                          {
                            window.open("/Path_ChooseRazor?SelectRange=" + SelectRange, '_self');
                          }
                        }     //React程式區間語法 (結束)
                      
                        > 下一步 </Button>
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
