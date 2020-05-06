<template>
  <div id="detail">
    <div class="detail-nav">
        <h1>
             <img src="../assets/images/logo.png" alt="">
         </h1>
         <h1>
             <img src="../assets/images/detail.gif" alt="">
         </h1>
    </div>
    <div class="detail-con">
        <main>
            <Loupe />
        </main>
        <article>
            <h2>产地：{{List.city}}</h2>
            <div class="pri">
                ￥{{List.price}}元
                <span>单位：500g</span>
            </div>
            <div class="num">
                <el-input-number v-model="num" controls-position="right" @change="handleChange" :min="1" size="medium"></el-input-number>
            </div>
            <div class="rate">
                <el-rate
                    class="rate-con"
                    v-model="value2"
                    :colors="colors">
                </el-rate>
                <el-button type="success" class="cart" :plain="true" @click="open">加入购物车</el-button>
            </div>
        </article>
    </div>
    <footer>
        <nav>
        <Detailnav :navList="['商品详情','评 论']" :detile="[detilecon]"/>
        </nav>
    </footer>
    <Footer />
  </div>
</template>

<script>
import Loupe from '../components/Loupe'
import Footer from '../components/Footer'
import Detailnav from '../components/Detailnav'
import {detailData,cartAdd} from '../components/network/api'
import { mapGetters } from 'vuex';
import bus from '../bus'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        num:1,
        value2:0,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'] ,
        id:'',
        List:'',
        detilecon:'',
      };
    },

    components: {
        Loupe,
        Footer,
        Detailnav,
    },
    computed: {
        ...mapGetters(["User"])
    },
    created(){},
    mounted() {
        this.id=this.$route.query.id;
        detailData(this.id).then(res=>{
            this.List=res.data
            this.value2=res.data.rate
            this.detilecon=res.data.detile
            bus.$emit('loupe',res.data.img)
        })
    },
    methods: {
        handleChange(value) {
        console.log(value);
      },
      open() {
          cartAdd(this.id,this.User[0].uid,this.num,this.List.price).then(res=>{
              if(res.data.state==0){
                  this.$message({
                    message: '加入购物车成功！',
                    type: 'success'
                    });
              }
          })
      },
    },
  }

</script>
<style lang='stylus' scoped>
#detail
    padding-top 50px
    .detail-nav
        width 100%
        height 100px
        border-bottom 2px solid #37ab40
        h1
            width 300px
            height 100px
            margin-left 200px
            float left
            &:nth-of-type(2)
                margin-left 300px
                position relative
                img 
                    width 100px
                    height 100px
                    position absolute 
                    left 400px
                    animation imgRun 20s linear 1
        img 
            width 100%
            height 100%
            display block
 @keyframes imgRun{
     0% {
                left: 0;
            }
            5% {
                left: 20px;
            }
            10% {
                left: 40px;
            }
            15% {
                left: 60px;
            }
            20% {
                left: 80px;
            }
            25% {
                left: 100px;
            }
            30% {
                left: 120px;
            }
            35% {
                left: 140px;
            }
            40% {
                left: 160px;
            }
            45% {
                left: 180px;
            }
            50% {
                left: 200px;
            }
            55% {
                left: 220px;
            }
            60% {
                left: 240px;
            }
            65% {
                left: 260px;
            }
            70% {
                left: 280px;
            }
            75% {
                left: 300px;
            }
            80% {
                left: 320px;
            }
            85% {
                left: 340px;
            }
            90% {
                left: 360px;
            }
            95% {
                left: 380px;
            }
            100% {
                left: 400px;
            }
 }
    .detail-con
        width 1050px
        height 400px
        margin 20px 0 0 200px
        border 1px solid #aaa
        position relative
        main
            width 300px
            height 300px
            float left
            margin 40px
            position absolute 
            z-index 10
        article 
            height 300px
            width 520px
            float left
            margin-top 40px
            padding 15px
            margin-left 80px
            position absolute 
            right 10px
            h2
                width 100%
                height 30px
                text-align center
                line-height 24px
                color #606266
                font-size 18px
                font-weight bold
                border-bottom 2px solid #409EFF
            .pri
                width 470px
                height 80px
                background #F2F6FC
                margin-top 30px
                font-size 28px
                color #F56C6C
                line-height 80px
                padding-left 50px
                &:before
                    content '价 格:'
                    font-size 20px
                    line-height 50px
                    color #000
                span 
                    color #909399
                    font-size 14px
                    margin-left 100px
            .num
                width 320px
                height 50px
                margin 30px 0 0 20px
                &:after
                    content "选择数量"
                    margin-left 20px
                    color #303133
            .rate
                width 100%
                height 80px
                margin-top 20px
                .rate-con
                    float left
                    margin-top 20px
                    &:before
                        content '评 分：'
                        color orangered
                .cart 
                    float left
                    margin 20px 0 0 150px
    footer 
        width 1050px
        min-height 300px
        // background pink 
        margin 20px 0 0 200px
        position relative
        nav 
            height 40px
            width 100%
            border-bottom 1.5px solid #67C23A
.active
    background red
</style>