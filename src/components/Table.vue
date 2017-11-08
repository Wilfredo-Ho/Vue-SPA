<template>
	<div class="table-wrapper">
		<v-table
			is-horizontal-resize
			is-vertical-resize
			style="width: 100%"
			:columns="columns"
			:table-data="data"
			:vertical-resize-offset="190"
			title-bg-color="#0BC0C9"
			row-hover-color="#eee"
			row-click-color="#edf7ff"
		></v-table>
		<v-pagination
			:total="pageInfo.total"
			:pageSizeOption="[10, 15, 30, 50, 100]"
			:pageSize="pageInfo.row"
			@page-change="pageChange"
			@page-size-change="pageSizeChange"
		></v-pagination>
	</div>
</template> 
 
<script>
import 'vue-easytable/libs/themes-base/index.css'
import { VTable, VPagination } from 'vue-easytable'

export default {
	name: 'MyTable',

	props: {
		columns: {
			type: Array,
			default: function(){
				return []
			}
		},
		data: {
			type: Array,
			default: function(){
				return []
			}
		},
		pageInfo: {
			type: Object,
			default: function(){
				return {
					total: 0,
					row: 10,
					page: 1
				}
			}
		}
	},

	data () { 
		return { 
			vOffset: 90		
		}; 
	},

	methods: {
		pageChange(page){
			this.pageInfo.page = page
			this.$emit('table-data-change', this.pageInfo)
		},
		pageSizeChange(row){
			this.pageInfo.row = row
			this.$emit('table-data-change', this.pageInfo)
		}	
	},

	computed: {
		
	},

	mounted () {
		
	},

	components: {
		VTable,
		VPagination
	}
}; 
</script> 
 
<style scoped> 
.v-page-ul{
	margin-top: 15px;
}
.v-page-li-active{
	background-color: #0BC0C9;
	border-color: #0BC0C9;
}
</style> 