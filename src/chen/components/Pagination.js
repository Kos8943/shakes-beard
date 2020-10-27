import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/shops.scss'
// import { FaCaretRight } from 'react-icons/fa'
//  className Question extends React.Component {
//   render() {
//     return <h3> Lets go for a <FaBeer />? </h3>
//   }
// }

function Pagination(props) {
  console.log('Pagination', props)
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </Link>
          </li>
          {/* for、click-active-disabled */}
          <li className="page-item">
            <Link className="page-link" to="#">
              1
            </Link>
          </li>

          <li className="page-item active">
            <Link className="page-link" to="#">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              4
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              5
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="#">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Pagination
