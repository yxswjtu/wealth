import { Menu, Icon } from 'antd'
import React, { Component } from 'react'
import { LeftWrapper } from './style'

class Itempannel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jsp: this.props.jsp
    }
  }

  setDragable(id) {
    this.state.jsp.draggable(id, {
      clone: true,
      drag: params => {
        this.props.updatePos(params.pos)
      }
    })
  }

  componentDidMount() {
    this.setDragable('cbn_uid')
    this.setDragable('dev_uid')
  }

  render() {
    return (
      <LeftWrapper>
        <Menu mode="inline" style={{ width: '100%' }}>
          <Menu.Item key="2" id="cbn_uid">
            <span>
              <Icon type="table" />
              组合模式核心管护表
            </span>
          </Menu.Item>
          <Menu.Item key="3" id="dev_uid">
            <span>
              <Icon type="table" />
              传统模式核心管护表
            </span>
          </Menu.Item>
        </Menu>
      </LeftWrapper>
    )
  }
}

export default Itempannel
