<template>
  	<div class="gauge-wrapper">
  		<chart :options="options" :style="stylesheet"></chart>
  	</div>
</template> 
 
<script>
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/gauge' 

export default {
	name: 'gauge',
	props: {
		data: {
			type: Array,
			default: function(){
				return []
			}
		},
		stylesheet: {
			type: Object, 
			default: function(){
				return {}
			}
		}
	},
	data () { 
		return { 
			opt: {
			    tooltip : {
			        formatter: "{a} <br/>{b} : {c}%"
			    },
			    toolbox: {
			        feature: {
			            restore: {},
			            saveAsImage: {}
			        }
			    },
			    series: [
			        {
			            name: '业务指标',
			            type: 'gauge',
			            title: {
			            	offsetCenter: [0, '-30%']
			            },
			            detail: {
			            	formatter:'{value}%',
			            	offsetCenter: [0, '60%'],
					        textStyle: {
					        	fontSize: 15
					        }
			            },
			            axisLine: {
				        	show: true,
				            lineStyle: {
				                width: 20,
				                shadowBlur: 0,
				                color: [[0.7, '#00cdbe'],[1, '#c33531']]
				            }
				        }
			        }
			    ]
			}
		}; 
	},
	mounted(){

	},
	computed: {
		options: function() {
			let obj = this.opt
			obj.series[0]['data'] = this.data
			return obj
		}
	},
	components: {
		chart: ECharts
	}
}; 
</script> 
 
<style scoped> 
</style> 