import React from 'react'
import Trash from '../../kos/icon/trash.svg'
import markBlue from '../img/bookmark-blue.png'
import mark from '../img/bookmark.png'
import mark2 from '../img/bookmark-2.png'
import heart from '../img/heart-2.png'

function App(props) {
  return <>
    <div className="rightArea col-12 col-sm-9">
        <div className="optionTittle webObj">追蹤清單</div>
        <div className="decLine webObj"></div>
  
        <div className="favUpdateArea d-flex flex-wrap">

            <div className="memberfav">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
               
                <span className="memberfavPrice">NT$1,441</span>
                <img src={mark} className="memberBookmark"></img> 
            </div>

            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={markBlue} className="memberBookmark"></img>
            </div>

            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={mark2} className="memberBookmark"></img>
            </div>
            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={heart} className="memberBookmark"></img>
            </div>

        </div>
    </div>
</>
}

export default App
