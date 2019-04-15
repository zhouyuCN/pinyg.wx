<template>
  <div>
    <div class="top">
      <!-- 头部 -->
      <div class="header">
        <div class="search">
          <input type="text" :value="query">
          <div class="search-icon">
            <span class="icon">@</span>
          </div>
        </div>
      </div>
      <div class="nav">
        <div
          @click="setIndex=index"
          :class="{active:setIndex===index}"
          v-for="(item,index) in navList"
          :key="index"
        >{{item}}</div>
      </div>
    </div>

    <!-- 内容 -->
    <div class="bottom">
      <div class="item" v-for="(item,index) in searchList" :key="index">
        <img :src="item.goods_big_logo" alt>
        <div class="content">
          <p>{{item.goods_name}}</p>
          <div class="price">
            <span class="icon">¥</span>
            <span class="num">{{item.goods_price}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "../../utils/request.js";
export default {
  data() {
    return {
      navList: ["综合", "销量", "价格"],
      setIndex: 0,
      searchList: [],
      query: "",
      pagenum: 1,
      pagesize: 10,
      isEnd: false
    };
  },
  methods: {
    async getData() {
      // 在导航条中添加加载动画
      wx.showNavigationBarLoading();
      if (this.isEnd) {
        // 提示用户数据已经全部加载
        wx.showToast({
          title: "数据加载完毕",
          icon: "none",
          duration: 2000
        });
        return;
      }
      // 打开加载动画
      wx.showLoading({
        title: "加载完成"
      });
      // 得到请求的列表数据
      this.query = this.$root.$mp.query.query;
      let res = await request.get(
        "https://itjustfun.cn/api/public/v1/goods/search",
        {
          query: this.query,
          pagenum: this.pagenum,
          pagesize: this.pagesize
        }
      );
      console.log(res);

      if (res.data.data.goods.length === 0) {
        // 提示用户数据已经全部加载
        wx.showToast({
          title: "数据已经加载完毕",
          icon: "none",
          duration: 2000
        });
        // 将开关设置为关
        this.isEnd = true;
        return;
      }
      // 当第一次加载时，要直接赋值
      // 第二次及以后，不是直接赋值，而是将两个数组进行拼接 concat
      if (this.searchList.lenght === 0) {
        this.searchList = res.data.data.goods;
      } else {
        this.searchList = this.searchList.concat(res.data.data.goods);
      }
      // 关闭加载框
      wx.hideLoading();
      // 关闭下拉框
      wx.stopPullDownRefresh();
      // 关闭导航中的加载框
      wx.hideNavigationBarLoading();
    }
  },

  mounted() {
    this.pagenum = 1;
    this.query = "";
    this.searchList = [];

    console.log(this.query);
    this.getData();
  },
  // 上拉触底事件
  onReachBottom() {
    this.pagenum = this.pagenum + 1;
    this.getData();
  },
  // 下拉刷新
  onPullDownRefresh() {
    // 刷新页面（将所有数据恢复到默认值）
    this.pagenum = 0;
    this.searchList = [];
    this.isEnd = false;
    // 数据重新请求
    this.getData();
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
