<template>
  	<div class="vehicle-list">
  		<div class="option"></div>
  		<div class="table-wrapper">
  			<v-table
  					is-horizontal-resize
  					is-vertical-resize
					style="width: 100%;min-height: 420px;"
					:columns="columns"
					:column-cell-class-name="columnCellClass"
					:table-data="powerList"
					:vertical-resize-offset="90"
					:is-loading="isLoading"
					title-bg-color="#0BC0C9"
					row-hover-color="#eee"
					row-click-color="#edf7ff"
  			></v-table>
  			<v-pagination
					:total="total"
					:pageSizeOption="[10, 15, 30, 50, 100]"
					:pageSize="row"
					@page-change="pageChange"
					@page-size-change="pageIndexChange"
					style="padding-top: 20px"
  			></v-pagination>
  		</div>
  	</div>
</template> 
 
<script> 
import Vue from 'vue'
import PowerList from '../data/table'
import 'vue-easytable/libs/themes-base/index.css'
import { VTable, VPagination } from 'vue-easytable'
import axios from 'axios'
import qs from 'qs'

export default { 
  data () { 
    return { 
 		powerList: [],
 		page: 1,
 		row: 50,
 		total: 600,
 		isLoading: true,
 		columns: [
 			{field: 'order_Number', title: '订单编号', width: 160, titleAlign: 'center', columnAlign: 'center', isResize: true, isFrozen: true},
 			{field: 'order_State', title: '订单状态', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true, 
 				formatter: function(rowData, rowIndex, paging, field){
 					let val = Number(rowData[field]);
 					let str = '';
 					switch(val){
 						case 1: str="已预约"; break;
 						case 2: str="租用中"; break;
 						case 3: str="<span style='color: #349e68'>已完成</span>"; break;
 						case 4: str="已取消"; break;
 					};
 					return str;
 				}
 			},
 			{field: 'startTime', title: '开始时间', width: 180, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'endTime', title: '结束时间', width: 180, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'runTime', title: '行驶时间', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'startSite', title: '开始地点', width: 250, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'endSite', title: '结束地点', width: 250, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'crunMileage', title: '行驶里程', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'expenses', title: '费用', width: 50, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'uid', title: '用户编号', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'realName', title: '用户姓名', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'uname', title: '手机号', width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'carId', title: '车辆编号', width: 80, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'cmodel', title: '车型', width: 120, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'clicense', title: '车牌号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true},
 			{field: 'custome-adv', title: '操作', width: 120, titleAlign: 'center', columnAlign: 'center', componentName: 'table-operation', isResize: true}
 		]
    }; 
  },
  methods: {
  	columnCellClass(rowIndex, columnName, rowData){
  		return 'column-font-size';
  	},
  	pageChange(page){
  		this.page = page
  		this.tableDataReq()
  	},
  	pageIndexChange(row){
  		this.row = row
  		this.tableDataReq()
  	},
  	tableDataReq(url, data){
  		let that = this
  		that.isLoading = true
  		axios.post('https://www.zslzsl999.cn/carshare/carshare/allOrders', qs.stringify({
  			page: this.page,
  			row: this.row
  		}))
  		.then(function(res){
  			that.isLoading = false
  			let data = res.data
  			if(!data.executeResult){
  				console.log(1)
  				alert(data.messageCode);
  				return;
  			}
  			that.total = data.result.total
  			console.log(data.total)
  			Vue.nextTick(function(){
  				that.powerList = data.result.rows
  			})
  		})
  		.catch(function(err){
  			console.log(err);
  		})
  	}
  },
  mounted () {
  	this.tableDataReq()
  },
  components: {
  	VTable,
  	VPagination
  }
};

Vue.component('table-operation', {
	template: `<span>
	<a href="" @click.stop.prevent="update(rowData, index)">编辑</a>&nbsp;
	<a href="" @click.stop.prevent="deleteRow(rowData, index)">删除</a>
	</span>`,
	props: {
		rowData: {
			type: Object
		},
		field: {
			type: String
		},
		index: {
			type: Number
		}
	},
	methods: {
		update () {
			alert('编辑: ' + this.index)
			console.log(this.rowData[this.field])
		},

		deleteRow () {
			alert('删除 ' + this.index)
			console.log(this.rowData, this.field)
		}
	}
})
</script> 
 
<style scoped> 
.column-font-size{
 	font-size: 12px;
 	background-color: #f00;
}
.table-wrapper{

}
.v-page-li-active{
	background-color: #0BC0C9;
	border-color: #0BC0C9;
}
</style> 