<template>
  <div>
    <!-- 头部 -->
   <headers></headers>  
    <!-- 内容 -->
    <div class="content">
      <!-- 轮播图 -->
      <swiper class="my-swiper" indicator-dots autoplay circular>
        <block v-for="(item,index) in swiperdata " :key="index">
          <swiper-item class="my-swiper-item">
          
            <image :src="item.image_src" mode="scaleToFill" class="my-swiper-img"/>
          </swiper-item>
        </block>
      </swiper>

      <!-- 分类nav -->
      <div class="classify">
        <a :href="item.navigator_url" class="item" v-for="(item,index) in classify" :key="index">
          <img :src="item.image_src" alt="">
        </a>
      </div>

      <!-- 时尚女装 -->
      <div class="fashion-women" v-for="(item,index) in floordata" :key="index">
        <div class="top">
          <img :src="item.floor_title.image_src" alt="">
        </div>
        <div class="bottom">
          <div class="left">
            <img :src="item.product_list[0].image_src" alt="">
          </div>
          <div class="right">
            <img v-if="ind!=0" v-for="(it,ind) in item.product_list" :key="ind" :src="it.image_src" alt=""/>
              
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headers from '../../components/header.vue'
import request from '../../utils/request.js'
export default {
  data() {
    return {
      focus:true,
     swiperdata:[],
     classify:[],
     floordata:[]
    };
  },
 async mounted() {
  //  轮播图
   let res = await request('https://itjustfun.cn/api/public/v1/home/swiperdata');
 
   this.swiperdata=res.data.data;

  // 分类
  let res1=await request('https://itjustfun.cn/api/public/v1/home/catitems');

  this.classify=res1.data.data;

  // 楼层
  let res2=await request('https://itjustfun.cn/api/public/v1/home/floordata');
  console.log(res2);
  this.floordata=res2.data.data;
  
   
  },
  components: {
    headers,
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
