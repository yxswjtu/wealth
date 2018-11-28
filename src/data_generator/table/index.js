import React, { Component } from 'react'
import { Select } from 'antd'
import TableUI from './TableUI'

const Option = Select.Option

const table_data = [
  {
    key: '0',
    name: 'rms_table_name',
    data: {
      ID: [
        { text: '用户1', value: 'val1', key: '0' },
        { text: '用户2', value: 'val2', key: '1' }
      ],
      passwd: [
        { text: '密码1', value: 'passwd1', key: '2' },
        { text: '密码2', value: 'passwd2', key: '3' }
      ]
    }
  }
]

class Table extends Component {
  render() {
    return (
      <TableUI dataSource={table_data} columns={this.getColumns(table_data)} />
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  getColumns(content) {
    let col = []
    content.forEach(data => {
      const keys = Object.keys(data.data)
      keys.forEach(key => {
        col.push({
          title: key,
          dataIndex: `data.${key}`,
          key: `data.${key}`,
          render: text => (
            <div style={{ position: 'relative', height: 'auto' }}>
              <div>
                <Select key={key} style={{ width: '100%' }}>
                  {text.map(addr => (
                    <Option value={addr.value} key={addr.key}>
                      {addr.text}
                    </Option>
                  ))}
                </Select>
              </div>
            </div>
          )
        })
      })
    })
    return col
  }
}

export default Table
