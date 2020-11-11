import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
// import { FaCaretRight } from 'react-icons/fa'
//  className Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

function Pagination(props) {
  console.log('Pagination', props)
  const[currentPage, setCurrentPage]=useState(1)
  const[totalPage, setTotalPage]=useState(3)

  // pages:[] 
  async function getShopPageFromServer(req){
    const url = 'http://localhost:3000/try-shop-page'

    const request = new Request(url, {
      method:'GET',
      headers:new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log("page-data",data)
    console.log("page-data2",data[0].totalRows)
    // setShops(data)// totalRows,totalPages,for
    setTotalPage(data[0].totalRows)
    
  }

  useEffect(()=>{
    getShopPageFromServer()
  },[])

  const display=(<>
    <nav aria-label="Page navigation example" className="page">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage===1?'disabled':''}`} onClick={()=>setCurrentPage(currentPage-1)}>
          <Link
            className="page-link"
            to="#"
            tabIndex="-1"
            aria-disabled="true"
          >
            上一頁
          </Link>
        </li>
        <li className={`page-item ${currentPage===1?'active':''}`} onClick={()=>setCurrentPage(1)}>
          <Link className="page-link" to="#">
            1
          </Link>
        </li>

        <li className={`page-item ${currentPage===2?'active':''}`} onClick={()=>setCurrentPage(2)}>
          <Link className="page-link" to="#">
            2
          </Link>
        </li>
        <li className={`page-item ${currentPage===3?'active':''}`} onClick={()=>setCurrentPage(3)}>
          <Link className="page-link" to="#">
            3
          </Link>
        </li>
        <li className={`page-item ${currentPage===4?'active':''}`} onClick={()=>setCurrentPage(4)}>
          <Link className="page-link" to="#">
            4
          </Link>
        </li>
        <li className={`page-item ${currentPage===5?'active':''}`} onClick={()=>setCurrentPage(5)}>
          <Link className="page-link" to="#">
            5
          </Link>
        </li>
        <li className={`page-item ${currentPage===totalPage?'disabled':''}`} onClick={()=>setCurrentPage(currentPage+1)}>
          <Link className="page-link" to="#">
            下一頁
          </Link>
        </li>
      </ul>
    </nav>
  </>)

  return (
    <>{display}</>
  )
}

export default Pagination
