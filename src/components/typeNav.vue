<template>
  <div id="type-nav">
    <div class="all-type">全部商品分类</div>
    <ul>
        <li v-for="(item,index) in alltype" :key="index">
            <a href="">{{item}}</a>
        </li>
    </ul>
  </div>
</template>

<script>

  export default {
    props:{
        alltype:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data () {
      return {

      };
    },
    methods: {},
  }

</script>
<style lang='stylus' scoped>
#type-nav
    width 100%
    height 40px
    margin-top 20px
    border-bottom 3px solid #39a93e
    .all-type
        width 200px
        height 40px
        float left
        margin-left 200px
        background #39a93e
        text-align center
        line-height 40px
        color #ffffff
    ul
        width 250px
        height 40px
        float left
        li
            float left 
            margin-left 10px
            margin-top 15px
            a
                padding 0 15px
                font-size 12px
                border-right 1px solid #aaaaaa
                &:hover
                    color orangered 
</style>