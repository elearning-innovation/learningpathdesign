import React from 'react'
import ReactDOM from 'react-dom'

class Presentation extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <h1>Presentation</h1>
        <h2>Example</h2>
        <div id="sub-carousel" className="carousel sub-carousel slide" data-ride="carousel">
          <header>Presentation Format</header>
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                deserunt exercitationem facilis nisi officia reiciendis sequi voluptate
                voluptatibus? Amet aspernatur cumque dolor id ipsam nam obcaecati porro
                quaerat. Architecto, blanditiis.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                architecto aut delectus deserunt doloribus esse expedita fuga ipsam
                iusto labore neque, nulla quasi qui repellat rerum saepe veritatis
                voluptas.</p>
            </div>
            <div className="item">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                deserunt exercitationem facilis nisi officia reiciendis sequi voluptate
                voluptatibus? Amet aspernatur cumque dolor id ipsam nam obcaecati porro
                quaerat. Architecto, blanditiis.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aliquid
                architecto aut delectus deserunt doloribus esse expedita fuga ipsam
                iusto labore neque, nulla quasi qui repellat rerum saepe veritatis
                voluptas.</p>
            </div>
          </div>
          <footer>
            <a className="previous-slide" href="#sub-carousel" role="button" data-slide="prev">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
              <span className="sr-only">Previous</span>
            </a>
            <a className="next-slide" href="#sub-carousel" role="button" data-slide="next">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
              <span className="sr-only">Next</span>
            </a>
          </footer>
        </div>
      </div>
    )
  }
}

export default Presentation
