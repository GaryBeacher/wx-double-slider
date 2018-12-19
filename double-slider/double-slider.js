const app = getApp()

Page({
	data: {
		width: 500,
		size: 60,
		block1X: 0,
		block2X: 250,
		tips1Show: false,
		tips2Show: false,
		val1: 0,
		val2: 1000,
  },
	onChange1(e){
		var that = this;
		var val = e.detail.x;
		var source = e.detail.source;
		val = (val * 4).toFixed(0)
		val = this.computeVal(val)
		if(val >= that.data.val2){
			this.setData({
				block1X: (that.data.val2 - 100) / 4,
				val1: that.data.val2 - 100
			})
		}else if(source != ''){
			this.setData({
				block1X: val / 4,
				tips1Show: true,
				val1: val
			})
		}
	},
	onChange2(e) {
		var that = this;
		var val = e.detail.x;
		var source = e.detail.source;
		val = (val * 4).toFixed(0)
		val = this.computeVal(val)
		if (val <= that.data.val1) {
			this.setData({
				block2X: (that.data.val1 + 100) / 4,
				val2: that.data.val1 + 100
			})
		} else if (source != '') {
			this.setData({
				block2X: val / 4,
				tips2Show: true,
				val2: val
			})
		}
	},
	computeVal(v){
		// console.log(v)
		var value = 0;
		if(v >= 0 && v < 50){value = 0}
		else if (v >= 50 && v < 150) { value = 100 }
		else if (v >= 150 && v < 250) { value = 200 }
		else if (v >= 250 && v < 350) { value = 300 }
		else if (v >= 350 && v < 450) { value = 400 }
		else if (v >= 450 && v < 550) { value = 500 }
		else if (v >= 550 && v < 650) { value = 600 }
		else if (v >= 650 && v < 750) { value = 700 }
		else if (v >= 750 && v < 850) { value = 800 }
		else if (v >= 850 && v < 950) { value = 900 }
		else if (v >= 950 && v <= 1000) { value = 1000 }
		return value;
	}
})
