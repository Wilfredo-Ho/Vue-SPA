<template>
  	<div class="system-role">
  		<my-table-action
			title="角色管理"
			@plus="plus"
			@modify="modify"
			@_delete="_delete"
			@search="search"
  		></my-table-action>
  		<my-table
			:columns="columns"
			:data="data"
			:pageInfo="pageInfo"
			@table-data-change="tableDataChange"
  		></my-table>
  		<my-modal
			title="新增用户"
			:modal-body="modalBody"
			@form-submit="submitForm"
  		></my-modal>
  	</div>
</template> 
 
<script>
import Vue from 'vue'
import MyTable from '../components/Table'
import MyTableAction from '../components/TableAction'
import MyModal from '../components/Modal'
import Toasted from 'vue-toasted'
import Role from '../data/role'
Vue.use(Toasted)

export default { 
	name: '',

	data () { 
		return { 
			columns: [
				{ field: 'gname', title: '角色名称', width: 200, titleAlign: 'center', columnAlign: 'center', isResize: true },
				{ field: 'usrcount', title: '用户数量', width: 200, titleAlign: 'center', columnAlign: 'center', isResize: true},
				{ field: 'Dep', title: '所属公司', width: 200, titleAlign: 'center', columnAlign: 'center', isResize: true},
				{ field: 'Remarks', title: '备注', width: 200, titleAlign: 'center', columnAlign: 'center', isResize: true},
				{ field: 'statetime', title: '更新时间', width: 200, titleAlign: 'center', columnAlign: 'center', isResize: true}
			],
			data: Role,		//axios
			pageInfo: {		//axios
				total: 30,
				row: 10,
				page: 1
			},
			modalBody: [
				{
					name: 'gname',
					title: '角色名称',
					type: 1,		// 1-input, 2-select
					default: '请输入'
				},
				{
					name: 'usrcount',
					title: '用户数量',
					type: 1,		// 1-input, 2-select
					default: '请输入'
				},
				{
					name: 'Dep',
					title: '所属公司',
					type: 2,
					default: '请选择',
					options: [
						{key: 0, value: '请选择'},
						{key: 1, value: '公司1'},
						{key: 2, value: '公司2'}
					]
				},
				{
					name: 'Remarks',
					title: '备注',
					type: 3,
					default: '请输入'
				}
			]
		}; 
	},

	methods: {
		tableDataChange(info){
			console.log(info);
		},
		plus(){
			this.$modal.show('form-modal')
		},
		modify() {
			alert('改')
		},
		_delete() {
			alert('删')
		},
		search(){
			alert('查')
		},
		submitForm(val){
			console.log(val)
			this.$modal.hide('form-modal')
			this.$toasted.success('提交成功', {
				icon: {
					name: 'check'
				},
				position: 'top-center',
				duration: 2000
			})
				/*.text('提交成功')
				.goAway(2000)*/
		}
	},

	components: {
		MyTable,
		MyTableAction,
		MyModal
	}
}; 
</script> 
 
<style scoped> 
.my-table-action{
	margin-bottom: 20px;
}
</style> 