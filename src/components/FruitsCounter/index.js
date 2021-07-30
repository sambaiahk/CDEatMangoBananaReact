// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoesCount: 0,
    bananasCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananasCount: prevState.bananasCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoesCount: prevState.mangoesCount + 1}))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="bg-container">
        <div className="bg-container2">
          <h1 className="heading">
            Bob ate <span className="count">{mangoesCount}</span> mangoes
            <span className="count"> {bananasCount} </span> bananas
          </h1>
          <div className="middle-container">
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="fruit-image"
              />
              <div className="button-container">
                <button className="button" onClick={this.onClickEatMango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="fruit-image"
              />
              <div className="button-container">
                <button className="button" onClick={this.onClickEatBanana}>
                  {' '}
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
