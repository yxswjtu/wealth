import React, { Component } from 'react'
import { List, Select, Icon, Input } from 'antd'
//import { RightClose } from './style'
//import { jsPlumb } from 'jsplumb'

const Option = Select.Option

const connectorStyle = { stroke: '#7AB02C', strokeWidth: 2, joinstyle: 'round' }
const connectorHoverStyle = { stroke: '#5c96bc', strokeWidth: 3 }
const endpointStyle = {
  fill: 'transparent',
  stroke: '#7AB02C',
  radius: 7,
  strokeWidth: 1
}
const endpointHoverStyle = {
  fill: '#5c96bc',
  stroke: '#5c96bc',
  radius: 7,
  strokeWidth: 1
}
const anEndpoint = {
  connector: 'Straight',
  endpoint: 'Dot',
  isSource: true,
  isTarget: true,
  paintStyle: endpointStyle,
  hoverPaintStyle: endpointHoverStyle,
  connectorStyle: connectorStyle,
  connectorHoverStyle: connectorHoverStyle,
  id: 'wyx'
}

const table_data = {
  rms_cbn_uid: {
    table_cname: '中文表明',
    columns: [
      {
        key: 'rms_cbn_uid.Src_Cd',
        cname: '类型',
        values: [655, 755, 756]
      },
      {
        key: 'rms_cbn_uid.Src_Cd2',
        cname: '类型',
        values: [655, 755, 756]
      },
      {
        key: 'rms_cbn_uid.Src_Cd3',
        cname: '类型',
        values: [655111, 75511111, 75611111]
      },
      {
        key: 'rms_cbn_uid.Src_Cd4',
        cname: '分行审批人',
        values: [655111, 75511111, 75611111]
      },
      {
        key: 'rms_cbn_uid.Src_Cd5',
        cname: '分行审批人',
        values: [655111, 75511111, 75611111]
      }
    ]
  },
  rms_dev_uid: {
    table_cname: '中文表明2',
    columns: [
      {
        key: 'rms_dev_uid.Src_Cd5',
        cname: '类型',
        values: [655, 755, 756]
      },
      {
        key: 'rms_dev_uid.Src_Cd6',
        cname: '分行审批人',
        values: [655111, 75511111, 75611111]
      },
      {
        key: 'rms_dev_uid.Src_Cd7',
        cname: '分行审批人',
        values: [655111, 75511111, 75611111]
      }
    ]
  }
}

class Table extends Component {
  constructor(props) {
    super(props)
    this.data = table_data[props.name]
  }

  componentDidMount() {
    const length = this.data.columns.length + 2
    const diff = 1 / (length * 2)

    console.log(this.props.pid)
    for (let i = 1; i < length - 1; i++) {
      this.props.jsp.addEndpoint(this.props.pid, anEndpoint, {
        anchor: [0, (2 * i + 1) * diff, 0, -1]
      })
      this.props.jsp.addEndpoint(this.props.pid, anEndpoint, {
        anchor: [1, (2 * i + 1) * diff, 0, -1]
      })
    }
  }

  render() {
    return (
      <List
        bordered={true}
        header={
          <div>
            <span style={{ color: '#33CCFF' }}>{this.data.table_cname}</span>
            <span style={{ float: 'right' }}>
              <Icon type="close" />
            </span>
          </div>
        }
        footer={
          <div>
            <Input placeholder="数据条数" />
          </div>
        }
        dataSource={this.data.columns}
        renderItem={item => (
          <List.Item id={item.key}>
            <span style={{ float: 'left', width: '40%' }}>{item.cname}</span>
            <Select style={{ width: '60%', float: 'right' }}>
              {item.values.map(d => (
                <Option key={d} value={d}>
                  {d}
                </Option>
              ))}
            </Select>
          </List.Item>
        )}
      />
    )
  }
}

export default Table
