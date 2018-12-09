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
    this.setDragable('rms_cbn_uid')
    this.setDragable('rms_dev_uid')
  }

  handleMenuClick(ev) {
    console.log(ev)
  }

  render() {
    return (
      <LeftWrapper>
        <Menu
          mode="inline"
          style={{ width: '100%' }}
          onClick={this.handleMenuClick}
        >
          <Menu.Item key="rms_cbn_uid" id="rms_cbn_uid">
            <span>
              <Icon type="table" />
              组合模式核心管护表
            </span>
          </Menu.Item>
          <Menu.Item key="rms_dev_uid" id="rms_dev_uid">
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
