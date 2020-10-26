import React from 'react'
import '../../styles/custom.scss'

function Description(props) {
  console.log('Services', props)
  return (
    <>
          <div className="card-img-left testImg mt-5">
            <img src={require('../components/card01.jpg')} className="card-img" alt="..." />
          </div>
           <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2">World</strong>
            <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
          </div>
    </>
  )
}

export default Description