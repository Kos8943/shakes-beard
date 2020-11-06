import React from 'react'
import './Style/FinishCSS.css';
import './Style/CommonCSS.css';
import img from './image/openbox.png';
class Class_Finish extends React.Component


{
  render()
  {
    return (
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.6
                  <div className="Title2">訂購完成</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>
                  <div><img className="openbox_Img" src={img} /></div>
                  <div className="Finish_text">謝謝您的訂購！禮盒已加入購物車</div>
                </div>
          </div>
        </div> 

      </div> 

      
    );
  }
}

function Func_Finish(props)
{
  return (
    <Class_Finish />
  )
}

export default Func_Finish
