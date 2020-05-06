<template>
  <div id="aside">
    <ul>
      <li v-for="(item,index) in listtype" :key="index">
        <img src="../assets/images/jt.svg" alt />
        <span @click="floor(index)">{{item}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    listtype: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      Top: ""
    };
  },
  methods: {
    floor(index) {
      switch (index) {
        case 0:
          document.documentElement.scrollTop = document.body.scrollTop = 200;
          break;
        case 1:
          document.documentElement.scrollTop = document.body.scrollTop = 500;
          break;
        case 2:
          document.documentElement.scrollTop = document.body.scrollTop = 800;
          break;
        case 3:
          document.documentElement.scrollTop = document.body.scrollTop = 1100;
          break;
        case 4:
          document.documentElement.scrollTop = document.body.scrollTop = 1400;
          break;
        case 5:
          document.documentElement.scrollTop = document.body.scrollTop = 1700;
      }
    }
  }
};
</script>
<style lang='stylus' scoped>
#aside
    height 270px
    width 198px
    margin-left 200px
    border-left 1px solid #eee
    float left
    li
        height 44px
        width 198px
        border-bottom 1px solid #eee
        position relative
        &:nth-of-type(1)
            background url(../assets/images/apple1.svg) 20px no-repeat
            background-size 25px 25px
        &:nth-of-type(2)
            background url(../assets/images/apple2.svg) 20px no-repeat
            background-size 25px 25px
        &:nth-of-type(3)
            background url(../assets/images/apple3.svg) 20px no-repeat
            background-size 25px 25px
        &:nth-of-type(4)
            background url(../assets/images/yt1.svg) 20px no-repeat
            background-size 25px 25px
        &:nth-of-type(5)
            background url(../assets/images/yt2.svg) 20px no-repeat
            background-size 25px 25px
        &:nth-of-type(6)
            background url(../assets/images/yt3.svg) 20px no-repeat
            background-size 25px 25px
        span
            text-align center
            cursor pointer
            display block
            line-height 44px
            font-size 14px
            color #333
            &:hover
                color orangered
        img 
            width 15px
            height 15px
            position absolute 
            right 10px
            top 15px
</style>