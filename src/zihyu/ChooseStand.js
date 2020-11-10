import React from 'react'
import './Style/ChooseStandCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'

import './StandData.js';
const Data = global.StandData;

let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const SelectRange = urlParams.get('SelectRange');             //第一頁選擇的參數   //上一頁選擇的參數
console.log(SelectRange);

let SelectStandIndex = "0";

class Class_ChooseStand extends React.Component
{
  state =
  {
    StandGoods: ''
  };

  OnChangeRadio = e =>
  {
    this.setState({
      StandGoods: e.target.value
    });
    console.log("e.target.value = " + e.target.value);
    SelectStandIndex = e.target.value;
  };


  render()
  { 
    const { StandGoods } = this.state;
    let showIndexs  = [];

    let goodsName  = [];
    let goodsPrice = [];
    let images = [];

    if (SelectRange == "0")
    {
      showIndexs = [5];

    }
    else if (SelectRange == "1")
    {
      showIndexs = [0, 1, 2, 4];
    }
    else    //2
    {
      showIndexs = [0, 1, 2, 3, 4, 5];
    }
    
    let lists = [];
    console.log("Data = " + Data);
    
    for (let i = 0; i < showIndexs.length; i++)
    {
        let dataIndex = showIndexs[i];

        lists.push(

          <div className="giftbox_Item col">
            <div><img className="giftbox_ItemImg" src={Data[dataIndex].Image} /></div>
          
            <div style={{display: "flex", margin: "auto", width: "100px"}}>
              <input style={{margin: "auto"}}
                type="radio"
                value={dataIndex.toString()}
                onChange={this.OnChangeRadio}
                checked={StandGoods === dataIndex.toString()}
              />
              <div className="giftbox_itemName">{Data[dataIndex].Name}</div>
            </div>
          
            <div className="giftbox_itemPrice">NT$ {Data[dataIndex].Price}</div>
          </div>
        );
    }






    return (
      
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
                <div className="step">Step.4
                <div className="Title2">選擇修容架</div>
                <div className="lineTop"></div>
                <div className="lineDown"></div>

                <div id="ChangeCSS" className="giftbox_Grid align-items-center">{lists}</div> 

                  

                  <div style={{margin: "19px auto"}}>
                    <Button className="separate backButton" onClick=
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
