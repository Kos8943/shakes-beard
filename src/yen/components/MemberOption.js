import React ,{useState} from 'react'
// import MemberUpdateCss from '../styles/MemberUpdateCss.scss'
import MemberDataTable from './MemberDataTable'
import MemberDataTable2 from './MemberDataTable2'

function MemberOption(props) {
  const [pageTitle, setPageTitle] = useState("密碼修改")

  return <>


        <div className="leftArea col-2 d-flex flex-column">
            <div className="userName">王大明</div>
            <div className="decLine"></div>
            <div className="option">資料修改</div>
            <div className="option">密碼修改</div>
            <div className="option">偏好設定</div>
            <div className="option">收藏清單</div>
            <div className="option">訂單查詢</div>
        </div>
        {(pageTitle === "資料修改")?
        <MemberDataTable title="資料修改"/> :''}

        {(pageTitle === "密碼修改")?
        <MemberDataTable2 title="密碼修改"/> :''}


        


        {/* <div className="rightArea col-9">
            <div className="optionTittle">資料修改</div>
            <div className="decLine"></div>
            <div className="">
                {}
            </div>
        </div> */}





        
      
  </>
}

export default MemberOption
