import React from 'react'
import FavoritesListCss from './styles/FavoritesListCss.scss'
import Delete from '../kos/icon/delete.svg'
// import Cuf1 from '../kos/img/1-3.jpg'
import Trash from '../kos/icon/trash.svg'

function FavoritesList(props) {
    
  return <>
        <div className="rightArea col-12 col-sm-9">
            <div className="optionTittle">追蹤清單</div>
            <div className="decLine"></div>
            
            <div className="favupdateArea">
                <div className="favItem d-flex align-items-center ">

                    <img className="favImg" src="./imgs/1-3.jpg"></img>
                    <div className="favItemName">Ritmo di vita 陀飛輪袖扣</div>
                    <select className="favselectHigh">
                        <option value="1">經典黑</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                   
                    <span className="favPrice">NT$1,441</span>
                
                    <img src={Delete} className="deleteIcon"></img>

                    
                </div>
               
                    
               
            </div>
        </div>


 
      
  </>
}

export default FavoritesList
