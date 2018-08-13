
Page({
  data: {
    imgDetil: [
      'https://img.alicdn.com/imgextra/i1/2302648993/TB1ZADafIyYBuNkSnfoXXcWgVXa_!!0-item_pic.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i1/2302648993/TB2aOc0n21TBuNjy0FjXXajyXXa_!!2302648993.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i2/2302648993/TB2Cth2e8fM8KJjSZFhXXcRyFXa_!!2302648993.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i1/2302648993/TB2dBQEntnJ8KJjSszdXXaxuFXa_!!2302648993.jpg_430x430q90.jpg',
      'https://img.alicdn.com/imgextra/i4/2302648993/TB2gs7Nnv2H8KJjy1zkXXXr7pXa_!!2302648993.jpg_430x430q90.jpg'
      

    ],
   imgSize1:'https://img.alicdn.com/imgextra/i3/2302648993/TB2oTbzkF9gSKJjSspbXXbeNXXa_!!2302648993.jpg_430x430q90.jpg',
   imgSize2: 'https://img.alicdn.com/imgextra/i1/2302648993/TB23oWOkPihSKJjy0FeXXbJtpXa_!!2302648993.jpg_430x430q90.jpg',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    num:0,
    radioCheckVal: 0 ,
    totalNum: 0,
    hasCarts: false,
    curIndex: 0,
    show: false,
    scaleCart: true
  },
  addCount() {
    var num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },
  cutCount() {
    var num = this.data.num;
    if(num===0){
      return num;
    }
    num--;                              
    this.setData({
      num: num
    })
  }, 
  radioCheckedChange: function (e) {
    this.setData({
      radioCheckVal: e.detail.value
    })
  } ,
  
  addToCart(){
     var self = this;
    var num = this.data.num;
    var total = this.data.totalNum;
    if(num===0){
      wx.showModal({
        title: '提示',
        content: '请选择商品数量',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    }else{

        setTimeout(function () {
          self.setData({
            scaleCart: false,
            hasCarts: true,
            totalNum: num + total
          })
        }, 200)
     

    
      }
    
    
  },

  car_all(){
    wx.navigateTo({
      url: '/pages/car/car'
    })
  },
  addsoon(){
    wx.showModal({
      title: '提示',
      content: '该功能正在开发',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })
  }
  
})