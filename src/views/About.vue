<template>
  <div id="root">
    <img src="../assets/images/logo.png" alt="">
    <h2>果 味 天 水 后 台 管 理</h2>
     <a href="http://182.92.242.247/evaluation/views/index.html">
       <el-button type="success" icon="el-icon-position" class="btn">进 入</el-button>
     </a>
  </div>
</template>
<style lang='stylus' scoped>
#root
  padding-top 30px
  background url('../assets/images/root.png') no-repeat center
  background-size 100% 100%
  width 100%
  height calc(100vh - 30px)
  img 
    width 300px
    height 100px
    margin 50px 0 0 50px
  h2
    font-size 60px
    color #67C23A
    margin-left 500px
    text-shadow: #E4E7ED 3px 3px 3px;
  .btn
    margin-left 700px
    width 200px
    margin-top 100px
    font-size 20px
</style>