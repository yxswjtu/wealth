import React, { Component } from 'react'
import { Drawer } from 'antd'
import { HeaderWrapper, Logo, DataManager, DataQuery } from './style'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = { data_mgn_visible: false }
  }

  showDataMgnDrawer = () => {
    this.setState({
      data_mgn_visible: true
    })
  }

  onDataMgnClose = () => {
    this.setState({
      data_mgn_visible: false
    })
  }

  render() {
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Logo>Wealth</Logo>
          <DataManager onClick={this.showDataMgnDrawer}>数据管理</DataManager>
          <DataQuery>数据查询</DataQuery>
        </HeaderWrapper>
        <Drawer
          title="模块与功能"
          placement="left"
          closable={false}
          onClose={this.onDataMgnClose}
          visible={this.state.data_mgn_visible}
        >
          <p>客户模块</p>
          <p>首页模块</p>
          <p>反洗钱模块</p>
        </Drawer>
      </React.Fragment>
    )
  }
}

export default Header
