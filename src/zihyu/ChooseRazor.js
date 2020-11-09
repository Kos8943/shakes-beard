import React from 'react'
import './Style/ChooseRazorCSS.css';
import './Style/CommonCSS.css';
import { Button } from 'react-bootstrap'

//抓隔壁 GiftBoxData.js 裡面的RazorData資料
import './GiftBoxData.js';
const Data = global.RazorData;

//Ref : https://www.sitepoint.com/get-url-parameters-with-javascript/
let queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const SelectRange = urlParams.get('SelectRange');   //上一頁選擇的參數
console.log(SelectRange);

let SelectRazorIndex = "0";

class Class_ChooseRazor extends React.Component
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
    SelectRazorIndex = e.target.value;
  };


  render()
  {  
    const { StandGoods } = this.state;


    let showIndexs  = [];

    //Ex : https://ithelp.ithome.com.tw/articles/10201227
    let goodsName  = [];
    // let goodsName  = ['特務刮鬍刀','消光刮鬍刀','復古刮鬍刀','尊爵刮鬍刀','鹿角刮鬍刀','牛角刮鬍刀'];
    let goodsPrice = [];
    // let goodsPrice = [600, 1090, 1090, 1800, 1480, 1800];
    let images = [];
    // let images = [img_Razor01, img_Razor02, img_Razor03, img_Razor04, img_Razor05, img_Razor06];

    if (SelectRange == "0")
    {
      showIndexs = [0];
      // goodsName.push('特務刮鬍刀');
      // goodsPrice.push(600);
      // images.push(img_Razor01);
    }
    else if (SelectRange == "1")
    {
      showIndexs = [0, 1, 2, 4];
      // goodsName  = ['特務刮鬍刀','消光刮鬍刀','復古刮鬍刀','鹿角刮鬍刀'];
      // goodsPrice = [600, 1090, 1090, 1480];
      // images = [img_Razor01, img_Razor02, img_Razor03, img_Razor05];
    }
    else    //2
    {
      showIndexs = [0, 1, 2, 3, 4, 5];
      // goodsName  = ['特務刮鬍刀','消光刮鬍刀','復古刮鬍刀','尊爵刮鬍刀','鹿角刮鬍刀','牛角刮鬍刀'];
      // goodsPrice = [600, 1090, 1090, 1800, 1480, 1800];
      // images = [img_Razor01, img_Razor02, img_Razor03, img_Razor04, img_Razor05, img_Razor06];
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
    
    // var targetDiv = document.getElementById("ChangeCSS");
    if (SelectRange == "0")
    {
      // targetDiv.setAttribute("className", "giftbox_Grid align-items-center");
    }
    else
    {
      // targetDiv.setAttribute("className", "giftbox_Grid2 align-items-center");
    }

    return (
      <>
      <div className="contain">
        <div className="background_white">
      
          <div className="blueBox1">
            <div className="step">Step.2
                  <div className="Title2">選擇刮鬍刀</div>
                  <div className="lineTop"></div>
                  <div className="lineDown"></div>


                  <div id="ChangeCSS" className="giftbox_Grid align-items-center">{lists}</div>
                

                <div style={{margin: "16px auto"}}>
                  <Button className="separate backButton" onClick=
                    {     //React程式區間語法 (開始)
                      () =>
                      {
                        window.open("/Path_Budget", '_self');
                      }
                    }     //React程式區間語法 (結束)
                  
                  > 上一步 </Button>

                  <Button className="startButton" onClick=
                  {     //React程式區間語法 (開始)
                    () =>
                    {
                      window.open("/Path_ChooseBrush  + "&SelectRazorIndex=" + SelectRazorIndex, '_self');
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

function Func_ChooseRazor(props)
{
  return (
    <Class_ChooseRazor />
  )
}

export default Func_ChooseRazor
