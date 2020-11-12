import React from 'react'
import './Style/BudgetCSS.css';
import './Style/CommonCSS.css';
import Img_Small from './image/Box_Small.png';
import Img_Mid from './image/Box_Mid.png';
import Img_Big from './image/Box_Big.png';
import { Button } from 'react-bootstrap';
import {Animated} from "react-animated-css";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';


/** 安裝Slider (https://www.npmjs.com/package/react-bootstrap-range-slider)
 * Example (https://jaywilz.github.io/react-bootstrap-range-slider/)
 * npm install react-bootstrap-range-slider*/
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

let SelectRange = "1";
//動畫參考網址：https://www.cnblogs.com/nzbin/p/8934478.html
let ExeAniName = "rubberBand";

export class Class_Budget extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      aniName:'',
      sliderValue: 50
    }
  }
  handleAnimationEnd = (e)=>
  {
    this.setState({
      aniName: ''
    });
  }
  startPlayAni = (e)=>
  {
    this.setState({
      aniName: ExeAniName
    });
  }

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

                    
            <div className={`animated ${this.state.aniName}`} onAnimationEnd={this.handleAnimationEnd}>
              <img className="budget_boxImg" id="changebudget_boxImg" src={Img_Mid} />
            </div>
        
        
            <div style={{width: "58%", margin: "auto"}}>
              <RangeSlider className="silderbox"
                value={this.state.sliderValue}
                onChange={e =>
                  {
                    this.state.sliderValue = Number(e.target.value);
                    var targetDiv = document.getElementById("changebudget_boxImg");
                    
                    switch (e.target.value)
                    {
                      case "0":
                        SelectRange = "0";
                        targetDiv.setAttribute("src", Img_Small);
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
                    this.startPlayAni(e);
                  }
                }
                step={50}
                tooltip='off'
              />
            </div>


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
