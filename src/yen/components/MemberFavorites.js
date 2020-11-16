import React from 'react'
import FavoritesListCss from "../styles/FavoritesListCss.scss";
import Trash from '../../kos/icon/trash.svg'
import markBlue from '../img/bookmark-blue.png'
import mark from '../img/bookmark.png'
import mark2 from '../img/bookmark-2.png'
import heart from '../img/heart-2.png'

function App(props) {
  return <>
    <div className="rightArea col-12 col-sm-10 col-md-9 justify-content-around">
        <div className="optionTittle webObj">{props.title}</div>
        <div className="decLine webObj"></div>
  
        <div className="d-flex flex-wrap justify-content-btween ">

            <div className="memberfav">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
              
                 <span className="memberfavPrice">NT$1,441</span>
                <img src={heart} className="memberBookmark"></img>   
            </div>

            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={heart} className="memberBookmark"></img>
            </div>

            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={heart} className="memberBookmark"></img>
            </div>
            <div className="memberfav ">
                <img className="memberfavImg" src="./imgs/1-3.jpg"></img>
                <div className="memberfavItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="memberfavPrice">NT$1,441</span>
                <img src={heart} className="memberBookmark"></img>
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
