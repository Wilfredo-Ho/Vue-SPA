<template>
  	<div class="statistic-single">
  		<div class="row">
  			<div class="chart-item">
  				<h5>历时回放</h5>
	  			<div class="chart chart-map">
	  				<baidu-map
						center="天津"
						:zoom="13"
						:height="200"
	  				></baidu-map>
	  			</div>
  			</div>
  			<div class="chart-item">
  				<h5>电池温度数据（℃）</h5>
	  			<div class="chart chart-tem">
	  				<chart :options="bar"></chart>
	  			</div>
  			</div>
  			<div class="chart-item chart-item-margin-top">
  				<h5>电池电压数据（V）</h5>
	  			<div class="chart chart-tem">
	  				<chart :options="bar"></chart>
	  			</div>
  			</div>
  		</div>
  		<div class="row">
  			<div class="chart-item">
  				<div class="chart">
  					<chart class="chart-gauge" :options="bar"></chart>
  					<chart class="chart-gauge" :options="bar"></chart>
  				</div>
  			</div>
  			<div class="chart-item">
  				<div class="box-wrapper">
  					<tabs :content="content"></tabs>
  				</div>
  			</div>
  		</div>
  	</div>
</template> 
 
<script> 
import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import BaiduMap from '../components/Map'
import Tabs from '../components/Tabs'

export default { 
	data () { 
		return { 
			bar: {
				color: ['#3398DB'],
			    tooltip : {
			        trigger: 'axis',
			        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
			            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			        }
			    },
			    grid: {
			        left: '3%',
			        right: '4%',
			        bottom: '3%',
			        containLabel: true
			    },
			    xAxis : [
			        {
			            type : 'category',
			            data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			            axisTick: {
			                alignWithLabel: true
			            }
			        }
			    ],
			    yAxis : [
			        {
			            type : 'value'
			        }
			    ],
			    series : [
			        {
			            name:'直接访问',
			            type:'bar',
			            barWidth: '60%',
			            data:[10, 52, 200, 334, 390, 330, 220]
			        }
			    ]
			},
			content: [
				{
					title: '车辆统计',
					data: [
						{
							name: '间隔类型',
							value: 0
						}, {
							name: '间隔内里程',
							value: '200km'
						}, {
							name: '工况类型',
							value: '0'
						}, {
							name: '间隔时间',
							value: '20min'
						}, {
							name: 'SOC',
							value: '70%'
						}, {
							name: '车速',
							value: '20'
						}
					]
				}, {
					title: '整车信息',
					data: [
						{
							name: '间隔类型',
							value: 10
						}, {
							name: '间隔内里程',
							value: '200km'
						}, {
							name: '工况类型',
							value: '0'
						}, {
							name: '间隔时间',
							value: '20min'
						}
					]
				}, {
					title: '诊断数据',
					data: [
						{
							name: '间隔类型',
							value: 20
						}, {
							name: '间隔内里程',
							value: '200km'
						}, {
							name: '工况类型',
							value: '0'
						}, {
							name: '间隔时间',
							value: '20min'
						}
					]
				}
			]
		}
	},
	components: {
		chart: ECharts,
		BaiduMap,
		Tabs
	}
}; 
</script> 
 
<style scoped>  
.chart-item{
	width: 49.5%;
	float: left;
	background-color: #fff;
	border-radius: 6px;
	border: 1px solid #ddd;
}
.chart-item:first-child{
	margin-right: 15px;
}
.chart-item h5{
	height: 40px;
	line-height: 40px;
	font-size: 14px;
	font-weight: normal;
	padding-left: 15px;
	border-bottom: 1px solid #ddd;
}
.chart-map{
	height: 420px;
}
.chart-tem{
	height: 180px;
	overflow: hidden;
}
.chart-item-margin-top{
	margin-top: 20px;
}
.row{
	overflow: hidden;
	clear: both;
}
.row:last-child{
	margin-top: 15px;
}
.chart-gauge{
	width: 49.5%;
	height: 280px;
	overflow: hidden;
	display: inline-block;
}
</style> 