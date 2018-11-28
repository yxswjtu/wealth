const data = [
  {
    key: 1,
    icon: 'profile',
    title: '软件测试科',
    url: '',
    children: [
      {
        key: 4,
        icon: 'setting',
        title: '广电组',
        url: ''
      },
      {
        key: 5,
        icon: 'setting',
        title: '光通组',
        url: ''
      }
    ]
  },
  {
    key: 2,
    icon: 'appstore',
    title: '硬件测试科',
    url: '',
    children: []
  },
  {
    key: 3,
    icon: 'appstore',
    title: 'EMC测试科',
    url: '',
    children: []
  }
]

class MenuData {
  constructor(url) {
    // 获取到数据
    this.data = data
  }
  getData() {
    return this.data
  }
}

export default MenuData
