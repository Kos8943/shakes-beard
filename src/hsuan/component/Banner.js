import React from 'react';
import original from '../icon/original.jpg';
import { Carousel } from 'react-bootstrap'
// import background from './card01.jpg'

function Banner(props) {
  console.log('Banner', props)
  return (
    <>
      <Carousel>
        <Carousel.Item>
        <div className="original">
           </div>
          {/* src="holder.js/800x400?text=First slide&bg=373940" */}
          <img src={original}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./carousel01.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require('./carousel01.jpg')}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  )
}

export default Banner
