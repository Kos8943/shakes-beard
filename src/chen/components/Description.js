import React from 'react'
import { Media } from 'react-bootstrap'
import '../styles/shops.scss'

function Description(props) {
  console.log('Description', props)
  return (
    <>
      <Media className="mb-3">
        <img
          alt="description-img"
          width={200}
          className="mr-3"
          src={require('../img/card01.jpg')} 
        />
        <Media.Body>
          <h5>男仕理髮</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
          </p>
          {/* <Link to="#" className="btn btn-primary">
            立即預約
          </Link> */}
        </Media.Body>
      </Media>
    </>
  )
}

export default Description