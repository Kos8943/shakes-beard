import React from 'react'
import { Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Recommend(props) {
  console.log('Recommend', props)
  return (
    <>
          <h4 className="mt-5">推薦給您</h4>
          <div className="d-flex justify-contents-center mb-5 scrollRight">
              <div className="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                  </p>
                  <h6 className="mb-1">Sculptor Barber</h6>
                  <Link to='/shopdetail?' className="learnMore">查看店家</Link>
                </div>
              </div>
              <div className="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                  </p>
                  <h6 className="mb-1">Sculptor Barber</h6>
                  <Link to='/shopdetail?' className="learnMore">查看店家</Link>
                </div>
              </div>
              <div className="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                  </p>
                  <h6 className="mb-1">Sculptor Barber</h6>
                  <Link to='/shopdetail?' className="learnMore">查看店家</Link>
                </div>
              </div>
              <div className="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div className="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary" className="mr-1">理髮</Badge>
                  </p>
                  <h6 className="mb-1">Sculptor Barber</h6>
                  <Link to='/shopdetail?' className="learnMore">查看店家</Link>
                </div>
              </div>
          </div>
    </>
  )
}

export default Recommend