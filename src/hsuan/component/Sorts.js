import React from 'react';
import { OverlayTrigger,Button,Tooltip, } from 'react-bootstrap'

function Sorts(props) {
  console.log('Sorts', props)
  
  
  return (
    <>
     render(
  <OverlayTrigger
    placement="bottom"
    overlay={<Tooltip id="button-tooltip-2">Check out this avatar</Tooltip>}
  >
    {({ ref, ...triggerHandler }) => (
      <Button
        variant="light"
        {...triggerHandler}
        className="d-inline-flex align-items-center"
      >
        <Tooltip
          ref={ref}
          roundedCircle
          src="holder.js/20x20?text=J&bg=28a745&fg=FFF"
        />
        <span className="ml-1">Hover to see</span>
      </Button>
    )}
  </OverlayTrigger>,
);
    </>
  )
}

export default Sorts
