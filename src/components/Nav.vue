<template>
  <div id="nav">
    <nav>
      <h1>"欢迎<span id="name"> {{name}} </span> 来到果味天水……",</h1>
      <aside v-for="(item,index) in titles" :key="index" @click="navClick(index)">
        <span>{{item}}</span>
      </aside>
    </nav>
  </div>
</template>

<script>
import bus from '../bus'
  export default {
    props:{},
    data () {
      return {
          titles:['首页','登陆','注册','购物车','我的订单'],
          name:'___'
      };
    },
    mounted() {
      bus.$on("navuser",res=>{
          this.name=res
      })
    },

    methods: {
        navClick(index){
          if(index==0){
              this.$router.push('/')
            }
          if(index==1){
              this.$router.push('/login')
            }
          if(index==2){
            this.$router.push('/register')
          }
          if(index==3){
            this.$router.push('/cart')
          }
          if(index==4){
            this.$router.push('/order')
          }
        }
    },
  }

</script>
<style lang='stylus' scoped>
#name
  color orangered
  font-weight 600
nav 
  height 30px
  width 100%
  border-bottom 1px solid #ccc
  position fixed 
  top 0
  background #fff
  z-index 999
  h1
    float left
    height 30px
    line-height 35px
    width 700px
    margin-left 149px
    line-height 30px
    font-size 12px
    color #909399
    margin-right 320px
  aside
    float left 
    width 70px
    height 20px
    padding-top 10px
    span 
      width 50px
      font-size 12px
      line-height 15px
      text-align center
      border-right 1px solid #ccc
      cursor pointer
      padding 0 5px
      display block
      margin-top 3px
      &:hover
        color #F56C6C
</style>