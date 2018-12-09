import React, { Component } from 'react'
import { Modal, Button, Input, Select } from 'antd'
import { FootWrapper } from './style'

class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = { visible: false }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <FootWrapper>
        <Button type="primary" onClick={this.showModal}>
          保存
        </Button>
        <Modal
          title="保存作业"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <div style={{ width: '100%' }}>
            <span>输入作业名：</span>
            <Input placeholder="名字不超过100字符" style={{ width: 220 }} />
          </div>
          <div>
            <span>选择方案名：</span>
            <Select style={{ width: 220 }}>
              <Select.Option value="jack">基本造数方案</Select.Option>
            </Select>
          </div>
        </Modal>
      </FootWrapper>
    )
  }
}

export default Footer
