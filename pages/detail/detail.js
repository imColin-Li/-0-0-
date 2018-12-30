var WxParse = require('../../wxParse/wxParse.js');
var Util = require('../../utils/util.js');
var url=' ';
var article_id = ''
var myComment = ''
Page({
  data: {
    article:" "
  },
  onTextChanged: function (e) {
    myComment = e.detail.value
  },
  
  onLoad: function (options) {
   let winpage=this;
    console.log(options.url)
   console.log(url)
    //请求文章详情
    wx.request({
      url: options.url,
     
      method: 'GET',
      success: function (res) {
        console.log(res),
        winpage.setData({
          article: res.data

        });
        console.log(winpage.data);
        WxParse.wxParse('article', 'html',winpage.data.article, winpage, 5);
      }
    })
    this.loadComments()
  }
  
})