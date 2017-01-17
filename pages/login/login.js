Page({
      data: {
      remind: '加载中',
      angle: 0
    },
    onReady: function(){
      var _this = this;
      setTimeout(function(){
        _this.setData({
          remind: ''
        });
      }, 1000);
      //重力感应
      wx.onAccelerometerChange(function(res) {
        var angle = -(res.x*30).toFixed(1);
        if(angle>14){ angle=14; }
        else if(angle<-14){ angle=-14; }
        if(_this.data.angle !== angle){
          _this.setData({
            angle: angle
          });
        }
      });
    },
    onTap: function (event) {
        wx.navigateTo({
            url: "../movies/movies"
        });
        
    },
     onShareAppMessage: function () {
        return {
        title: '找好电影推荐',
        desc: '进入搜索电影吧',
        path: '/pages/login/login'
        }
  }
})