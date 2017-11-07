<template>
  	<div class="statistic-single">
  		<div class="row">
  			<div class="chart-item">
  				<h5>历时回放</h5>
	  			<div class="chart chart-map">
	  				<baidu-map
						:center="{lng: markers[0].longitude, lat: markers[0].latitude}"
						:zoom="13"
						:height="200"
						:markers="markers"
						:markerInfo="markerInfo"
						@get-car-data="getCarData"
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
  					<gauge 
  							class="chart-gauge" 
  							:data="gaugeData"
  							:stylesheet="gaugeDataStyle"
					></gauge>
  					<gauge
  							class="chart-gauge" 
  							:stylesheet="gaugeDataStyle"
							:data="gaugeData1"></gauge>
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
// import 'echarts/lib/chart/gauge'
import Bar from '../data/echarts/Bar'
// import Gauge from '../data/echarts/Gauge'
import Gauge from '../components/echarts/Gauge'

import BaiduMap from '../components/Map'
import Tabs from '../components/Tabs'

import axios from 'axios'
import qs from 'qs'

export default { 
	data () { 
		return { 
			markers: [
				{
					carnumber: 170132,
					longitude: 106.901147,
					latitude: 27.637408,
					carstate: 0
				}
			],
			markerInfo: "",
			bar: Bar,
			gaugeData: [{value: 60, name: '完成率'}],
			gaugeData1: [{value: 30, name: '平均速度'}],
			gaugeDataStyle: {
				width: '100%',
				height: '280px'
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
		Tabs,
		Gauge
	},
	methods: {
		getCarData (val) {
			/*axios.get('http://123.127.164.36:50002/Data/CarnumInfoState.ashx', qs.stringify({carnumber: val}))
			.then(function(res){
				alert(0)
			})
			.catch(function(err){
				alert(err)
			})*/
			let obj = {
				"carnumber":"170132",
				"VIN":"LC940D02XH1LCD132",
				"unitnumber":"2017070010061",
				"carstate":"离线",
				"speed":"0.0",
				"soc":"100.0",
				"GetJsonDataTime":"2017/10/20 1:20:21"
			}
			let dictionary = ["车牌号", "VIN", "PNO", "状态", "速度", "SOC", "更新时间"]
			let str = '<div class="map-info" style="font-size: 14px;">'
			let j = 0
			for(var i in obj){
				str += "<p><strong>" + dictionary[j] + "</strong> : " + obj[i] +"</p>"
				j++
			}
			str += "</div>"
			this.markerInfo = str
		}
	},
	mounted(){
		let that = this
		this.$nextTick(function(){
			setInterval(function(){
				that.gaugeData[0].value = (Math.random() * 100).toFixed(2)
				that.gaugeData1[0].value = (Math.random() * 100).toFixed(2)
			}, 1000)
		})	
	}
}; 
</script> 
 
<style scoped> 
.echarts{
	width: 100%;
	height: 180px;
} 
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
.map-info{
	font-size: 12px;
}
</style> 