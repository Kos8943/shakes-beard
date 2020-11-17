import React from 'react'
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'

import './GiftBoxData.js';
const Data = global.BrushData;

let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const SelectRange = urlParams.get('SelectRange');             //第一頁選擇的參數   //上一頁選擇的參數
const SelectRazorIndex = urlParams.get('SelectRazorIndex');


let SelectBrushIndex = "-1";

class Class_ChooseBrush extends React.Component
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
    SelectBrushIndex = e.target.value;
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
      showIndexs = [4, 5];

    }
    else if (SelectRange == "1")
    {
      showIndexs = [3, 4, 5];
    }
    else    //2
    {
      showIndexs = [0, 1, 2];
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
                id={"radioID"+i}
              />
              <div className="giftbox_itemName"><label htmlFor={"radioID"+i} style={{display: "contents"}}>{Data[dataIndex].Name}</label></div>
            </div>
          
            <div className="giftbox_itemPrice"><label htmlFor={"radioID"+i} style={{display: "contents"}}>NT$ {Data[dataIndex].Price}</label></div>
          </div>
        );
    }
    





    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
            <div className="step">Step.3
                  <div className="Title2">選擇刮鬍刷</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>
                  
                  <div id="ChangeCSS" className="giftbox_Grid align-items-center">{lists}</div> 
            


                <div style={{margin: "10px auto"}}>
                    <Button className="separate backButton" onClick=
                      {     //React程式區間語法 (開始)
                        () =>
                        {
                          window.open("/Path_ChooseRazor?SelectRange=" + SelectRange, '_self');
                        }
                      }     //React程式區間語法 (結束)
                    
                    > 上一步 </Button>

                    <Button className="startButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        if (SelectBrushIndex == "-1")
                        {
                          alert("請至少選擇一樣商品");
                        }
                        else
                        {
                          //SelectRange 代入範圍
                          //SelectRazorIndex 代入範圍

                          window.open("/Path_ChooseStand?SelectRange=" + SelectRange + "&SelectRazorIndex=" + SelectRazorIndex + "&SelectBrushIndex=" + SelectBrushIndex , '_self');
                        }
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

function Func_ChooseBrush(props)
{
  return (
    <Class_ChooseBrush />
  )
}

export default Func_ChooseBrush
