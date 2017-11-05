export default [
	{
      id: 1,
      title: '车辆监控',
      icon: 'bullseye',
      children: [
        {
          id: 11,
          title: '车辆总览',
          path: '/vehicle/monitor'
        },
        {
          id: 12,
          title: '车辆列表',
          path: '/vehicle/list'
        }
      ]
    },
    {
      id: 2,
      title: '统计分析',
      icon: 'line-chart',
      children: [
        {
          id: 21,
          title: '单车数据统计',
          path: '/statistics/single'
        },
        {
          id: 22,
          title: '宏观数据统计',
          path: '/statistics/macro'
        }
      ]
    },
    {
      id: 3,
      title: '故障管理',
      icon: 'gavel',
      children: [
        {
          id: 31,
          title: '创建维修工单',
          path: '/maintain/create'
        },
        {
          id: 32,
          title: '执行维修工单',
          path: '/maintain/excute'
        },
        {
          id: 33,
          title: '维修工单记录',
          path: '/maintain/list'
        },
        {
          id: 34,
          title: '维修次数统计',
          path: '/maintain/times'
        },
        {
          id: 35,
          title: '创建终端维修',
          path: '/maintain/terminalcreate'
        },
        {
          id: 34,
          title: '终端维护记录',
          path: '/maintain/terminallist'
        },
      ]
    },
    {
      id: 4,
      title: '系统管理',
      icon: 'gear',
      children: [
        {
          id: 41,
          title: '角色管理',
          path: '/system/role'
        },
        {
          id: 42,
          title: '公司管理',
          path: '/system/company'
        },
        {
          id: 43,
          title: '用户管理',
          path: '/system/user'
        }
      ]
    }
]