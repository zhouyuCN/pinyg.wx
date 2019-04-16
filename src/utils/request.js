var request = function (url, method = 'get', data = {}, header = {}) {
    return new Promise((resolve, reject) => {
      
          // 打开加载动画
          wx.showLoading({
            title: "努力加载中",
            duration: 2000
        });
        wx.request({

            url: url,
            method: method,
            data: data,
            header: header,
            success: function (res) {
                // // 打开加载动画
                // wx.showLoading({
                //     title: "加载完成"
                // });

                resolve(res);
                // 关闭加载框
                wx.hideLoading();
            },
            fail: function (res) {
                reject(res);
            }
        });
    });
};

request.get = function (url, data) {
    return request(url, 'get', data, {})
}

export default request