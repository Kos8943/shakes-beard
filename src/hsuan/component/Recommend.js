import React from 'react'
import '../../styles/custom.scss'

function Recommend(props) {
  console.log('Recommend', props)
  return (
    <>
          <h4 className="mt-5">推薦給您</h4>
          <div className="d-flex mb-5">
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../components/card01.jpg')} className="card-img" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-primary">tag</strong>
                  <h5 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h5>
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  {/* <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> */}
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../components/card01.jpg')} className="card-img" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-primary">tag</strong>
                  <h5 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h5>
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  {/* <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> */}
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../components/card01.jpg')} className="card-img" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-primary">tag</strong>
                  <h5 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h5>
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  {/* <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> */}
                  <a href="#">查看店家</a>
                </div>
              </div>
              <div class="card recommend">
                <div className="card-img">
                  <img src={require('../components/card01.jpg')} className="card-img" alt="..." />
                </div>
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-primary">tag</strong>
                  <h5 class="mb-1">
                    <a class="text-dark" href="#">Sculptor Barber</a>
                  </h5>
                  {/* <div class="mb-1 text-muted">Nov 12</div> */}
                  {/* <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p> */}
                  <a href="#">查看店家</a>
                </div>
              </div>
          </div>
    </>
  )
}

export default Recommend