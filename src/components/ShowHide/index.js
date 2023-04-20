import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  showFirstname = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  showLastname = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state

    return (
      <div className="bgImage">
        <h1 className="heading">Show/Hide</h1>
        <div className="button-container">
          <div className="box">
            <button
              type="button"
              className="button"
              onClick={this.showFirstname}
            >
              Show/Hide Firstname
            </button>
            {isFirst ? <p className="display">Siva</p> : null}
          </div>
          <div className="box">
            <button
              type="button"
              className="button"
              onClick={this.showLastname}
            >
              Show/Hide Lastname
            </button>
            {isLast ? <p className="display">Janapati</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
