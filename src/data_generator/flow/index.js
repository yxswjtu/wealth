import React, { Component } from 'react'
import { jsPlumb } from 'jsplumb'
import { Canvas } from './style'
import uuidv1 from 'uuid/v1'
import Table from '../table'
import './index.css'

class Flow extends Component {
  constructor(props) {
    super(props)
    this.jsplumb = jsPlumb.getInstance()
    this.state = {
      nodes: [],
      jsp: this.props.jsp
    }
    //this.jsplumb.setContainer(this.props.container)
  }

  componentDidMount() {
    this.props.jsp.droppable(this.refs.right, { drop: this.jspDrop })
  }

  jspDrop = info => {
    const { nodes } = this.state
    const uuid = uuidv1()
    const dropEl = info.drop.el
    const rect = dropEl.getBoundingClientRect()
    this.setState({
      nodes: [
        ...nodes,
        <div
          key={uuid}
          id={uuid}
          className="item"
          style={{
            left: this.props.pos[0] - rect.left - dropEl.clientLeft + 'px',
            top: this.props.pos[1] - rect.top - dropEl.clientTop + 'px'
          }}
        >
          <Table />
        </div>
      ]
    })
    this.jsplumb.draggable(uuid, { constrain: true })
  }

  createItem() {
    const { nodes } = this.state
    return nodes.map(item => {
      return item
    })
  }
  render() {
    return (
      <Canvas id="container" ref="right">
        {this.createItem()}
      </Canvas>
    )
  }
}

export default Flow
