export default {
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
            detail: {formatter:'{value}%'},
            axisLine: {
	        	show: true,
	            lineStyle: {
	                width: 20,
	                shadowBlur: 0,
	                color: [[0.7, '#00cdbe'],[1, '#c33531']]
	            }
	        },
            data: [{value: 40, name: '完成率'}]
        }
    ]
}