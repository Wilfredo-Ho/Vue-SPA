<template>
	<div class="table-action-wrapper">
		<h5 class="title">{{ title }}</h5>
		<div class="action-bar">
			<div class="pull-left">
				<button class='btn btn-default' @click="plus"><icon name="plus"></icon>新建</button>
				<button class='btn btn-default' @click="modify"><icon name="pencil"></icon>修改</button>
				<button class='btn btn-default' @click="_delete"><icon name="trash-o"></icon>删除</button>
			</div>
			<div class="pull-right">
				<div class="search-group">
					<input type="text" placeholder="@search">
					<button class='btn btn-default-verse' @click="search">搜索</button>
				</div>
			</div>
		</div>
	</div>
</template> 
 
<script>

export default {
	name: '',
	
	props: {
		title: {
			type: String,
			default: ''
		}
	},

	data () { 
		return { 
			
		}; 
	},

	methods: {
		plus() {
			this.$emit('plus')
		},
		modify() {
			this.$emit('modify')
		},
		_delete(){
			this.$emit('_delete')
		 },
		 search() {
		 	this.$emit('search')
		 }	
	},

	computed: {
		
	},

	mounted () {
		
	},

	components: {

	}
}; 
</script> 
 
<style scoped> 
.table-action-wrapper{
	width: 100%;
	background-color: #fff;
	border: 1px solid #ddd;
	border-radius: 4px;
	color: #333;
	margin-bottom: 20px;
}
.table-action-wrapper .title{
	font-size: 16px;
	font-weight: normal;
	height: 40px;
	line-height: 40px;
	border-bottom: 1px solid #ddd;
	padding-left: 20px;
}
.table-action-wrapper .pull-left{
	float: left;
}
.table-action-wrapper .pull-right{
	float: right;
}
.table-action-wrapper .action-bar{
	padding: 25px 20px;
	overflow: hidden;
}
.btn{
	display: inline-block;
	height: 32px;
	line-height: 32px;
	border: 1px solid #ddd;
	background-color: #fff;
	border-radius: 3px;
	cursor: pointer;
	margin-right: 20px;
	padding-right: 15px;
	font-size: 14px;
}
.btn svg{
	width:30px;
	height: 30px;
	padding: 8px;
	background-color: #00CDBE;
	color: #fff;
	margin-right: 15px;
	vertical-align: top;
}
input{
	border: 1px solid #ddd;
	height: 34px;
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	vertical-align: top;
	padding-left: 10px;
}
.btn-default-verse{
	margin-left: -4px;
	border-left: none;
	height: 34px;
	border-top-left-radius: none;
	border-bottom-left-radius: none;
	padding-left: 10px;
	background-color: #00CDBE;
	color: #fff;
}	
</style>