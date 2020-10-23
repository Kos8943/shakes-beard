import React, { useState, useEffect } from 'react'

function MainContents(props) {
  console.log('MainContents', props)
  return (
    <>
      <main className="flex-shrink-0">
        <div className="container">
          {props.children}
          {/* <h5>test</h5> */}
        </div>
      </main>
    </>
  )
}

export default MainContents
