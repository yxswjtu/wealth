import React, { Component } from 'react'
// import 'antd/dist/antd.css'
import { Table } from 'antd'

class TableUI extends Component {
  render() {
    return (
      <div>
        <Table
          bordered
          pagination={false}
          dataSource={this.props.dataSource}
          columns={this.props.columns}
          title={() => this.props.dataSource[0].name}
          size="small"
          style={{ width: '100%' }}
          rowKey="id"
        />
      </div>
    )
  }
}

export default TableUI
