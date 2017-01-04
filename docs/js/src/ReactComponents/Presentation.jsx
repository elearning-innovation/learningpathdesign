import React from 'react'
import ReactDOM from 'react-dom'

class Presentation extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Presentation</h1>
        <h2>Example</h2>
        <div id="sub-carousel" className="carousel sub-carousel slide" data-ride="carousel">
        </div>
      </div>
    )
  }
}

export default Presentation
