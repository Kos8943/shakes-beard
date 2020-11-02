import React from 'react'
import '../styles/shops.scss'
import { Badge } from 'react-bootstrap'

function Recommend(props) {
  console.log('Recommend', props)
  return (
    <>
          <h4 className="mt-5">推薦給您</h4>
          <div className="d-flex mb-5 scrollRight">
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary">理髮</Badge>
                  </p>
                  <h6 class="mb-1">Sculptor Barber</h6>
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary">理髮</Badge>
                  </p>
                  <h6 class="mb-1">Sculptor Barber</h6>
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary">理髮</Badge>
                  </p>
                  <h6 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h6>
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../img/card01.jpg')} className="card-img-top" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <p>
                    <Badge pill variant="secondary">理髮</Badge>
                  </p>
                  <h6 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h6>
                  <a href="#">查看店家</a>
                </div>
              </div>
          </div>
    </>
  )
}

export default Recommend