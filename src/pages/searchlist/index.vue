<template>
  <div>
    <div class="top" :style="{position:isScroll}">
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
    <div class="bottom" :style="{marginTop:margintop}">
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
      isEnd: false,
      isScroll:'static',// 设置元素默认为静态定位
      margintop:"0rpx"
    };
  },
  methods: {
    async getData() {
      // 在导航条中添加加载动画
      if (this.isEnd) {
        // 提示信息
        wx.showToast({
          title: "数据已经加载完",
          icon: "none",
          duration: 2000
        });

        return;
      }

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
      // 当返回的数据的长度为 0 时就应该停止请求
      if (res.data.data.goods.length === 0) {
        // 将开关设置为关
        this.isEnd = true;
      }
      // 当第一次加载时，要直接赋值
      // 第二次及以后，不是直接赋值，而是将两个数组进行拼接 concat
      if (this.searchList.lenght === 0) {
        this.searchList = res.data.data.goods;
      } else {
        this.searchList = this.searchList.concat(res.data.data.goods);
      }
      wx.hideLoading();
      // 关闭下拉框
      wx.stopPullDownRefresh();
    }
  },

  mounted() {
    this.pagenum = 1;
    this.query = "";
    this.searchList = [];

    console.log(this.query);
    this.getData();
  },
  onUnload() {
    this.pagenum = 1;
    this.query = "";
    this.searchList = [];
  },
  // 上拉触底事件
  onReachBottom() {
    this.pagenum = this.pagenum + 1;
    this.getData();
  },
   onPageScroll(scroll) {
    // 当事件被触发时将头部设置为固定定位，否则（没有固定定位）
    // 操作 dom
    if (scroll.scrollTop == 0) {
      this.isScroll = 'static'
      this.margintop = '0rpx'
    } else {
      this.isScroll = 'fixed'
      this.margintop = '200rpx'
    }
  },
  // 下拉刷新
  onPullDownRefresh() {
    // 刷新页面（将所有数据恢复到默认值）
    this.pagenum = 1;
    this.searchList = [];
    this.isEnd = false;
     this.isScroll = 'static';
    // 数据重新请求
    this.getData();
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
