import VehicleMonitor from '../pages/VehicleMonitor'
import VehicleList from '../pages/VehicleList'
import StatisticsSingle from '../pages/StatisticsSingle'
import StatisticsMacro from '../pages/StatisticsMacro'
import MaintainCreate from '../pages/MaintainCreate'
import MaintainExcute from '../pages/MaintainExcute'
import MaintainList from '../pages/MaintainList'
import MaintainTimes from '../pages/MaintainTimes'
import MaintainTerminalCreate from '../pages/MaintainTerminalCreate'
import MaintainTerminalList from '../pages/MaintainTerminalList'
import SystemRole from '../pages/SystemRole'
import SystemCompany from '../pages/SystemCompany'
import SystemUser from '../pages/SystemUser'

export default [
	{
		path: '/vehicle/monitor',
		component: VehicleMonitor
	}, {
		path: '/vehicle/list',
		component: VehicleList
	}, {
		path: '/statistics/single',
		component: StatisticsSingle
	}, {
		path: '/statistics/macro',
		component: StatisticsMacro
	}, {
		path: '/maintain/create',
		component: MaintainCreate
	}, {
		path: '/maintain/excute',
		component: MaintainExcute
	}, {
		path: '/maintain/list',
		component: MaintainList
	}, {
		path: '/maintain/times',
		component: MaintainTimes
	}, {
		path: '/maintain/terminalcreate',
		component: MaintainTerminalCreate
	}, {
		path: '/maintain/terminallist',
		component: MaintainTerminalList
	}, {
		path: '/system/role',
		component: SystemRole
	}, {
		path: '/system/company',
		component: SystemCompany
	}, {
		path: '/system/user',
		component: SystemUser
	}
]