<template>
  <div>
    <!-- 头部 -->
    <div id="top">
      <headers></headers>
    </div>
   <!-- 内容 -->
    <div class="content">
      <div class="left">
        <ul>
          <li v-for="(item,index) in categories" :key="index" ><a href="#" @click="selectedIndex=index"  :class="{active:selectedIndex===index}">{{item.cat_name}}</a> </li>
          
        </ul>
      </div>
      <div class="right">
        <div class="title-img">
          <img src="https://img.alicdn.com/tfs/TB1ZkoLukCWBuNjy0FaXXXUlXXa-966-644.jpg_490x490q100.jpg_.webp" alt="">
        </div>
        <div class="category-list" >
          <div class="category-list-title" >
            <span class="icon">/</span><span class="title-name">电视</span><span class="icon">/</span>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>

        </div>
            <div class="category-list" >
          <div class="category-list-title" >
            <span class="icon">/</span><span class="title-name">电视</span><span class="icon">/</span>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>

        </div>
            <div class="category-list" >
          <div class="category-list-title" >
            <span class="icon">/</span><span class="title-name">电视</span><span class="icon">/</span>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>

        </div>
            <div class="category-list" >
          <div class="category-list-title" >
            <span class="icon">/</span><span class="title-name">电视</span><span class="icon">/</span>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>
          <div class="category-item">
            <img src="//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit_2.jpg" alt="">
            <div>曲面电视</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../../utils/request.js'
import headers from "../../components/header.vue";
export default {
  data() {
    return {
      categories:{},
      selectedIndex:0,
     
    }
  },
 async mounted() {
    let res = await request('https://itjustfun.cn/api/public/v1/categories');
    console.log(res);
    this.categories=res.data.data;
  
   

  
    
    
  },
  components: {
    headers
  }
};
</script>

<style lang="less">
@import url("./index.less");
</style>
