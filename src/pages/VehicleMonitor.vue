<template>
  	<div class="vehicle-monitor">
  		<baidu-map 
  			class="bm-view" 
  			ak="L5aVYbvGjZSyuSuRNXLc01x2oze8Z2n8"
  			:center="center"
  			:zoom="zoom"
  			@ready="handler"
  			@zoomend="getZoom"
  			:scroll-wheel-zoom="true">
  			<bm-marker
  				v-for="marker in markerArr"
  				:key="marker.carnumber"
  				:position="marker.pos"
  				:icon="{url: marker.state==1 ? iconOn : iconOff, size: {width: 32, height: 32}}"
  				@click="showMarkerMsg(marker.carnumber)"></bm-marker>
  		</baidu-map>
  	</div>
</template> 
 
<script>
import { BaiduMap, BmMarker } from 'vue-baidu-map'
import Marker from '../common/Marker'
import IconOn from '../assets/on.png'
import IconOff from '../assets/off.png'

export default { 
  data () { 
    return { 
 		center: "中国",
 		zoom: 3,
 		markers: Marker,
 		iconOn: IconOn,
 		iconOff: IconOff
    }; 
  },
  computed: {
  	markerArr: function () {
  		let arr = new Array();
  		for(var i in this.markers){
  			arr.push({
  				carnumber: this.markers[i].carnumber,
  				state: this.markers[i].carstate,
  				pos: {
	  				lng: this.markers[i].longitude,
	  				lat: this.markers[i].latitude
	  			}
  			});
  		}
  		return arr;
  	}
  },
  mounted () {
  	this.init();
  },
  methods: {
  	init () {
  		
  	},
  	handler ({BMap, map}) {
  		this.center = "天津"
   		this.zoom = 5
  	},
  	showMarkerMsg (num) {
  		console.log(num);
  	},
  	getZoom (e) {
  		let zo = e.target.getZoom();
  		console.log("当前地图级别： " + zo);
  	}
  },
  components: {
  	BaiduMap,
  	BmMarker
  }
}; 
</script> 
 
<style scoped> 
.bm-view{
 	height: 861px;
 	width: 100%;
 }
</style> 