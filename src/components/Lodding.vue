<template>
  <div id="lodding">
    <div>
        <img src="../assets/images/lodding.gif" alt="">
        <p>亲，你的购物车空空如也，快去添加你喜欢的水果吧……</p>
    </div>
  </div>
</template>

<script>

  export default {
    props:[''],
    data () {
      return {
          
      };
    },
  }

</script>
<style lang='stylus' scoped>
div
    margin 20px auto
    width 1050px
    height 400px
    img     
        display block
        margin 0 auto
        height 100%
    p
        width 100%
        text-align center
        color #F56C6C
</style>