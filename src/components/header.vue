<template>
  <!-- 头部 -->
  <div class="header">
    <a href="/pages/search/main" class="search">
      <input type="text">
      <div class="search-icon">
        <span class="icon">@</span>
        <span>搜索</span>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@color-main: #eb4450;
// 头部样式
.header {
  height: 100rpx;
  width: 100%;
  background-color: @color-main;

  .search {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 620rpx;
      height: 60rpx;
      background-color: #fff;
      padding-left: 20rpx;
      color: #333;
      font-size: 24rpx;
      border-radius: 10rpx;
    }
    .search-icon {
      position: absolute;
      color: #ccc;
      font-size: 24rpx;
    }
  }
}
</style>
