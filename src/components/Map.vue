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
  				></bm-marker>
  		</baidu-map>
	</div>
</template> 
 
<script>
import { BaiduMap, BmMarker } from 'vue-baidu-map'

export default { 
 
	name: '', 

	props: { 
		center: {
			type: String,
			default: '中国'
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
		}
	}, 

	data () { 
		return { 

		}; 
	}, 

	methods: { 
	 	handler () {
			//this.$refs.map.style.height = this.height + 'px'
	 	},
	 	init () {
	 		
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
		BmMarker
	} 
}; 
</script>

<style scoped>
.bm-view{
	width: 100%;
	height: 420px;
}
</style>