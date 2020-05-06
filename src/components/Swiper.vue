<template>
  <div id="swiper">
    <Aside :listtype="['花牛苹果','黄元帅','红富士','大红灯','拉宾斯','天水美早']"/>
    <Swiperitem />
    <div class="swiper-right">
        <div class="block" v-for="fit in fits" :key="fit + '-only'">
          <el-image
            style="width: 238px; height: 135px"
            :src="url"
            :fit="fit"></el-image>
        </div>
        <div class="block" v-for="fit in fits" :key="fit">
          <el-image
            style="width: 238px; height: 135px"
            :src="url1"
            :fit="fit"></el-image>
        </div>
    </div>
  </div>
</template>

<script>
import Aside from './Aside'
import Swiperitem from './Swiperitem'
  export default {
    props:[''],
    data () {
      return {
        fits: ['fill'],
        url: 'https://tiantinaxian.oss-cn-beijing.aliyuncs.com/hongfushi0.jpg',
        url1:'https://tiantinaxian.oss-cn-beijing.aliyuncs.com/tianshuimeizao4.gif'
      };
    },
    components: {
        Aside,
        Swiperitem
    },
    mounted() {},
    methods: {},
  }

</script>
<style lang='stylus' scoped>
#swiper
    width 100%
    height 270px
    .swiper-right
        width 240px
        height 135px
        float left
        img 
            width 100%
            height 100%
            cursor pointer
</style>