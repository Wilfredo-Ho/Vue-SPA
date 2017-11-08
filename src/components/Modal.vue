<template>
	<div class="modal-wrapper">
		<modal
			name="form-modal"
			:draggable="true"
			height="350"
		>
			<div class="modal-head">{{ title }}</div>
			<div class="modal-body">
				<form ref="form-form">
					<div class="form-group" v-for="item in modalBody">
						<label :for="item.name">{{ item.title}}</label>
						<input type="text"	class="form-element"
							v-if="item.type == 1"   
							:name="item.name" 
							:id="item.name" 
							:default="item.default">
						<select class="form-element"
							v-if="item.type == 2" 
							:name="item.name" 
							:id="item.name">
							<option 
								:value="opt.key" 
								v-for="opt in item.options">{{opt.value}}</option>
						</select>
						<textarea
							v-if="item.type == 3"
							:name="item.name"
							:id="item.name"
							:placeholder="item.default"
						></textarea>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<button class="btn btn-default" @click="submitForm">提交</button>
				<button class="btn" @click="cancel">取消</button>
			</div>
		</modal>		
	</div>
</template> 
 
<script>
import Vue from 'vue'
import VModal from 'vue-js-modal'
Vue.use(VModal)

export default {
	name: '',
	
	props: {
		title: {
			type: String,
			default: "提示"
		},
		modalBody: {
			type: Array,
			default: function(){
				return []
			}
		}
	},

	data () { 
		return { 
			
		}; 
	},

	methods: {
		cancel(){
			this.$modal.hide('form-modal')
		},
		submitForm (){
			let obj = {};
			let arr = this.modalBody
			for(var i in arr){
				let name = arr[i].name
				obj[name] = document.getElementById(name).value
			}
			this.$emit('form-submit', obj)
		}	
	},

	computed: {
		
	},

	mounted () {
		
	},

	components: {
		// Modal: VModal
		// VModal
	}
}; 
</script> 
 
<style scoped> 
.modal-head{
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    text-align: center;
    background-color: #0dbfcd;
    color: #fff;
}
.modal-body{
	padding: 20px;
}
.modal-footer{
	padding-left: 41.5%;
	margin-top: 30px;
}
.form-group{
	height: 34px;
	line-height: 34px;	
	margin-bottom: 10px;
	color: #333;
}
.form-group > label, .form-group > .form-element{
	display: inline-block;
}
.form-group > label{
	width: 40%;
	height: 34px;
	line-height: 34px;
	font-size: 14px;
	text-align: right;
	padding-right: 10px;
}
.form-group > .form-element{
	height: 32px;
	line-height: 32px;
	width: 200px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 2px 10px;
}
.form-group > textarea{
	display: inline-block;
	width: 200px;
	height: 64px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 8px 10px;
	vertical-align: top;
	resize: none;
}
.btn{
	/*width: 80px;*/
	background-color: #fff;
	border: 1px solid #aaa;
	border-radius: 4px;
	padding: 6px 20px;
	cursor: pointer;
}
.btn-default{
	background-color: #00cdbe;
	border-color: #01cbbf;
	color: #fff;
	margin-right: 55px;
}
</style>