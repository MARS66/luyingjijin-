// pages/detail/detail.js
import {getProductDetail} from '../../apis/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product_info:[{},{}],
    details:{}
  },

  /**
   * 分享当前页面
   */
  onShareAppMessage() {
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: '自定义转发标题'
        })
      }, 2000)
    })
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123',
      promise 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad({id}) {
    const details=await product_info(id);
    this.setData({
      details:details
    })
  },
  // 约定
  book(){
    wx.navigateTo({
      url: '/pages/reserve/reserve',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  shareProduct(){

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})