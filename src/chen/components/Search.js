import React from 'react'
import { Form } from 'react-bootstrap'
// import { FaSearch } from 'react-icons/fa'
// class Question extends React.Component {
//     render() {
//       return <h3> Lets go for a <FaSearch />? </h3>
//     }
//   }

function Search(props) {
  console.log('Search', props)
  return (
    <>
      <Form>
        <Form.Group controlId="searchForm">
          <Form.Control type="text" placeholder="..." />
        </Form.Group>
      </Form>
    </>
  )
}

export default Search
