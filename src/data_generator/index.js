import React, { Component } from 'react'
import { jsPlumb } from 'jsplumb'
import Header from '../common/header'
import Itempannel from './itempannel'
import Flow from './flow'

class DataGenerator extends Component {
  constructor(props) {
    super(props)
    this.jsp = jsPlumb.getInstance()
    this.state = {
      pos: [0, 0]
    }
  }

  updatePositon = pos => {
    this.setState({ pos })
    // console.log(pos)
  }

  render() {
    const { pos } = this.state
    return (
      <React.Fragment>
        <Header />
        <Itempannel jsp={this.jsp} updatePos={this.updatePositon} />
        <Flow jsp={this.jsp} pos={pos} />
      </React.Fragment>
    )
  }
}

export default DataGenerator
