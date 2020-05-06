<template>
  <div id="swiper-item">
    <el-carousel height="270px" :interval=6000>
      <el-carousel-item v-for="(item,index) in imageList" :key="index">
        <h3 class="small">
          <img :src="item" alt="">
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import {Carousel} from 'element-ui';
  export default {
    props:[''],
    data () {
      return {
        imageList:[
          require('../assets/images/img1.png'),
          require('../assets/images/img3.png'),
          require('../assets/images/img2.png'),  
          require('../assets/images/img4.png'),
        ]
      };
    },

    components: {},
    methods: {},
  }

</script>
<style lang='stylus' scoped>
#swiper-item
    width 760px
    height 270px
    float left
    img 
      width 760px
      height 270px
</style>