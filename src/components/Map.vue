<template> 
	<div class="map-wrapper">
		<baidu-map 
  			class="bm-view" 
  			ak="L5aVYbvGjZSyuSuRNXLc01x2oze8Z2n8"
  			:center="center"
  			:zoom="zoom"
  			@ready="handler"
  			:scroll-wheel-zoom="true"
  			ref="map">
  			<bm-marker
  				v-if="markers.length > 0"
  				v-for="marker in markers"
  				:key="marker.carnumber"
  				:position="{lng: marker.longitude, lat: marker.latitude}"
  				@click="infoWindowOpen(marker.carnumber)"
			>
				<bm-info-window
					:show="show"
					v-html="markerInfo"
				></bm-info-window>
			</bm-marker>
  		</baidu-map>
	</div>
</template> 
 
<script>
import { BaiduMap, BmMarker, BmInfoWindow } from 'vue-baidu-map'

export default { 
 
	name: '', 

	props: { 
		center: {
			type: Object,
			default: function(){
				return {}
			}
		},
		zoom: {
			type: Number,
			default: 5
		},
		markers: {
			type: Array,
			default: function(){
				return []
			}
		},
		height: {
			type: Number,
			default: 450
		},
		markerInfo: {
			type: String,
			default: ""
		}
	}, 

	data () { 
		return { 
			show: false
		}; 
	}, 

	methods: { 
	 	handler () {
			
	 	},
	 	init () {
	 		
	 	},
	 	infoWindowOpen(val){
	 		this.$emit('get-car-data', val)
	 		this.show = !this.show
	 	}
	}, 

	mounted () {
		this.init()
		
	},

	ready () { 
		this.$refs.map.style.height = this.height + 'px'
	},

	components: {
		BaiduMap,
		BmMarker,
		BmInfoWindow
	} 
}; 
</script>

<style scoped>
.bm-view{
	width: 100%;
	height: 420px;
}
</style>