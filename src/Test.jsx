import React from 'react'
import PropTypes from 'prop-types'

function Test({message}) {
  return (
    <div id="test">
      <h1>Testing</h1>
      <p>{message}</p>
    </div>
  )
}

Test.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Test

