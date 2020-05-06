<template>
  <div id="floor">
    <div :class="{left:isshow,test:istest}">
        <p>
          <span v-show="s1">1F</span>
          <img src="../assets/images/f1.svg" alt="" v-show="i1">
        </p>
        <p>
          <span v-show="s2" class="s2">2F</span>
          <img src="../assets/images/f2.svg" alt="" v-show="i2">
        </p>
        <p>
          <span v-show="s3" class="s3">3F</span>
          <img src="../assets/images/f3.svg" alt="" v-show="i3">
        </p>
        <p>
          <span v-show="s4" class="s4">4F</span>
          <img src="../assets/images/f4.svg" alt="" v-show="i4">
        </p>
        <p>
          <span v-show="s5" class="s5">5F</span>
          <img src="../assets/images/f5.svg" alt="" v-show="i5">
        </p>
        <p>
          <span v-show="s6" class="s6">6F</span>
          <img src="../assets/images/f6.svg" alt="" v-show="i6">
        </p>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        // ishidden:true,
        isshow:true,
        istest:false,
        s1:false,
        s2:false,
        s3:false,
        s4:false,
        s5:false,
        s6:false,
        i1:true,
        i2:true,
        i3:true,
        i4:true,
        i5:true,
        i6:true,
      };
    },
    mounted() {
       window.addEventListener('scroll', this.windowScroll)
    },

     methods:{
     windowScroll() {
     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop);
      if(scrollTop>=200 && scrollTop<500){
        this.istest=true
        this.i1=false
        this.s1=true
      }else{
        this.s1=false
        this.i1=true
      }
      if(scrollTop>=500 && scrollTop < 800){
        this.istest=true
        this.s2=true
        this.i2=false
      }else{
        this.s2=false
        this.i2=true
      }
      if(scrollTop >= 800 && scrollTop < 1100){
        this.istest=true
        this.i3=false
        this.s3=true
      }else{
        this.s3=false
        this.i3=true
      }
      if(scrollTop >= 1100 && scrollTop < 1400){
        this.istest=true
        this.s4=true
        this.i4=false
      }else{
        this.s4=false
        this.i4=true
      }
      if(scrollTop >= 1400 && scrollTop < 1700){
        this.istest=true
        this.s5=true
        this.i5=false
      }else{
        this.s5=false
        this.i5=true
      }
      if(scrollTop >= 1700){
        this.istest=true
        this.s6=true
        this.i6=false
      }else{
        this.s6=false
        this.i6=true
      }
      if(scrollTop<200 || scrollTop>1990){
        this.istest=false
      }
  }
   },

    beforeDestroy() {
 	 window.removeEventListener('scroll', this.windowScroll)
  }
  }

</script>
<style lang='stylus' scoped>
.hidden
  opacity 0 !important 
  transform scaleY(1.5) !important 
  transition .8s
.test
  opacity 1 !important 
  transform scaleY(1) !important 
  transition .8s
.left 
    height 210px
    width 30px
    // background pink
    position fixed
    top 350px
    left 50px
    transform scaleY(1.5)
    transition .8s
    opacity 0
    p
      width 100%
      height 30px
      // background green
      border-radius 50%
      text-align center
      line-height 30px
      color #fff
      margin-top 5px
      position relative
      span 
        background green
        display block
        width 30px
        height 30px
        border-radius 50%
      img 
        position absolute 
        top 0
        left 0
        z-index -1
.s2
  background #06F81A !important 
.s3
  background #F806BC!important
.s4
  background #F80626 !important
.s5
  background #064BF8 !important
.s6
  background #6FF806 !important
</style>