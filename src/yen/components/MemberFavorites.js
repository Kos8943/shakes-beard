import React from 'react'
// import FavoritesListCss from './styles/FavoritesListCss.scss'
// import Delete from '../kos/icon/delete.svg'
import Trash from '../../kos/icon/trash.svg'

function App(props) {
  return <>
    <div className="rightArea col-9">
        <div className="optionTittle">追蹤清單</div>
        <div className="decLine"></div>
  
        <div className="favupdateArea">
            <div className="favItem d-flex align-items-center">
                <img className="favImg" src="./imgs/1-3.jpg"></img>
                <div className="favItemName">Ritmo di vita 陀飛輪袖扣</div>
                <span className="favPrice">NT$1,441</span>
                <img src={Trash} className="deleteIcon"></img>
            </div>
        </div>
    </div>
</>
}

export default App
