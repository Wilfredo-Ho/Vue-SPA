<template> 
	<div class="tabs-wrapper">
		<ul class="nav">
			<li
				v-for="(item,index) in content"
				@click="showTabs(index)"
				:class="index==currentIndex ? 'active' : ''"
			>{{ item.title }}</li>
		</ul>
		<div class="panel">
			<table>
				<tr v-for="item in content[currentIndex].data">
					<td>{{ item.name }}</td>
					<td>{{ item.value }}</td>
				</tr>
			</table>
		</div>
	</div>
</template> 
 
<script> 
export default { 
 
	name: 'Tabs', 

	props: { 
		content: {
			type: Array,
			default: function(){
				return []
			}
		}
	}, 

	data () { 
		return { 
			currentIndex: 0
		}; 
	}, 

	methods: { 
	 	showTabs (ind) {
	 		this.currentIndex = ind
	 	}
	}, 

	ready () { 

	} 
}; 
</script>

<style scoped>
.nav{
	padding: 0px 10px;
	border-bottom: 1px solid #ddd;
}
.nav li{
	display: inline-block;
	padding: 10px;
	cursor: pointer;
}
.nav li.active{
	color: #05cddc;
	border-bottom: 2px solid #05cddc;

}
table{
	border-collapse: collapse;
	width: 100%;
	text-align: center;
}
table tr{
	border-bottom: 1px solid #ddd;
}
table td{
	width: 50%;
	/*border: 1px solid #ddd;*/
	padding: 9px 10px;
}
table tr > td:first-child{
	border-right: 1px solid #ddd;
}
</style>