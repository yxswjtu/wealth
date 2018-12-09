import React, { Component } from 'react'
import { jsPlumb } from 'jsplumb'
import { Modal } from 'antd'
import { Canvas } from './style'
import uuidv1 from 'uuid/v1'
import Table from '../table'
import './index.css'

class Flow extends Component {
  constructor(props) {
    super(props)
    this.jsplumb = jsPlumb.getInstance({
      ConnectionOverlays: [
        ['Arrow', { location: 1, id: 'arrow', width: 11, length: 11 }],
        [
          'Label',
          {
            location: 0.3,
            id: 'label',
            cssClass: 'jsp-label',
            events: {
              dblclick: info => this.editLabelText(info)
            }
          }
        ]
      ]
    })
    this.jsplumb.setContainer('container')
    this.state = {
      nodes: [],
      jsp: this.props.jsp,
      ids: []
    }
  }

  componentDidMount() {
    this.props.jsp.droppable(this.refs.right, { drop: this.jspDrop })
    this.jsplumb.bind('dblclick', function(conn, originalEvent) {
      // const connections = this.jsplumb.getConnections({
      //   source: conn.sourceId,
      //   target: conn.targetId
      // })
      console.log(conn.endpoints)
      console.log(conn.endpoints[0].anchor.y)
      //console.log(connections)
    })
  }

  jspDrop = info => {
    const { nodes, ids } = this.state
    const dropEl = info.drop.el
    const dragEl = info.drag.el
    const divId = dragEl.id + '@'

    if (ids.indexOf(divId) !== -1) {
      Modal.warning({
        title: '表已经存在，不要重复添加'
      })
      return
    }
    const uuid = uuidv1()
    const rect = dropEl.getBoundingClientRect()
    this.setState({
      nodes: [
        ...nodes,
        <div
          key={uuid}
          id={divId}
          className="item"
          style={{
            left: this.props.pos[0] - rect.left - dropEl.clientLeft + 'px',
            top: this.props.pos[1] - rect.top - dropEl.clientTop + 'px'
          }}
        >
          <Table id={uuid} name={dragEl.id} pid={divId} jsp={this.jsplumb} />
        </div>
      ],
      ids: [...ids, divId]
    })

    this.jsplumb.draggable(divId, {
      constrain: true
    })
  }

  createItem() {
    const { nodes } = this.state
    return nodes.map(item => {
      return item
    })
  }

  render() {
    return (
      <React.Fragment>
        <Canvas id="container" ref="right">
          {this.createItem()}
        </Canvas>
      </React.Fragment>
    )
  }
}

export default Flow
