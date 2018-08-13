//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    prolist:[
      { 
        pic:'https://img.alicdn.com/imgextra/i2/2302648993/TB2jm_7bVuWBuNjSszbXXcS7FXa_!!2302648993.jpg',
        title:'布朗熊趴趴抱枕舒适靠垫',
        price:'¥ 378',
      
      },
      {
        pic: '/images/6.jpg',
        title: '布朗熊挂件钥匙扣',
        price: '¥ 108',

      },
      {
        pic: '/images/7.jpg',
        title: '布朗熊充电宝9000mAH',
        price: '¥ 399',

      },
      
    ],
    secList: [
      {
        pics: '/images/8.jpg',
        instr: 'LINE FRIENDS 布朗熊毛绒玩偶25cm 动漫人偶公仔玩具节日礼物',
        money: '¥ 268',

      },
      {
        pics: '/images/9.jpg',
        instr: 'LINE FRIENDS 可妮兔毛绒公仔坐姿玩偶25cm 动漫周边二次元玩具',
        money: '¥ 208',

      },
      {
        pics: '/images/10.jpg',
        instr: 'LINE FRIENDS 莎莉毛绒玩偶70cm 动漫生日表白节日礼物公仔',
        money: '¥ 1018',

      },
      {
        pics: '/images/11.jpg',
        instr: 'LINE FRIENDS 布朗熊可妮兔情侣玩偶 中式新年创意时尚可爱呆萌',
        money: '¥ 999',

      },
    ],
  },
  
  onLoad: function(){
    this.setDate({
     test:'01',
   })
 },
 toDetil:function(){
   wx.navigateTo({
     url: '/pages/detil01/detil01'
   })
 }
})
