<template>
  <div class="home">
    <el-backtop :bottom="40">
      <!-- <div class="top">自定义内容</div> -->
    </el-backtop>
    <div class="search">
      <h1>
        <img src="../assets/images/logo.png" alt />
      </h1>
      <div class="sea-con">
        <input
          type="text"
          class="sea"
          v-model="title"
          placeholder="请输入你喜欢的水果…"
          @focus="Focu"
        />
        <input type="button" value="搜 索" class="sea-btn" />
        <ul v-if="ulshow">
          <li v-for="(item,index) in Search(title)" :key="index" @click="Detail(item.imgid)">
            <router-link :to="'/detail?id=' + item.imgid">
              <div class="block" v-for="fit in fits" :key="fit">
                <el-image style="width: 50px; height: 50px" :src="item.imgcity" :fit="fit"></el-image>
              </div>
              <p>原产地：甘肃省天水市{{item.city}}</p>
              <p>厂商价格： {{item.price}}元/500g</p>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/cart">
        <a href="##" class="cart">
          <i class="el-icon-shopping-cart-2 cart-icon"></i>
          <p class="text">我的购物车</p>
          <span class="cart-count" ref="num">{{num}}</span>
        </a>
      </router-link>
    </div>
    <typeNav :alltype="['首页']" />
    <Swiper />
    <Product />
    <Floor />
    <Footer />
  </div>
</template>

<script>
import typeNav from "../components/typeNav";
import Swiper from "../components/Swiper";
import Product from "../components/Product";
import Footer from "../components/Footer";
import { cartData, searchData } from "../components/network/api";
import Floor from "../components/Floor";
import { Icon, Backtop } from "element-ui";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      ulshow: false,
      num: 0,
      title: "",
      searchList: "",
      type: true,
      fits: ["fill"],
      url:
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2553595733,152547785&fm=26&gp=0.jpg"
    };
  },
  components: {
    typeNav,
    Swiper,
    Product,
    Footer,
    Floor
  },
  computed:{
    ...mapGetters(["User"])
  },
  mounted() {
    if(this.User.length==0){
      setTimeout(() => {
        this.open()
      }, 3000);
    }
    cartData(this.User[0].uid).then(res => {
      let cartNum = 0;
      for (let i of res.data) {
        cartNum += parseInt(i.num);
      }
      this.num = cartNum;
    });
    searchData().then(res => {
      var arr = [];
      for (let item of res.data) {
        for (let p of item) {
          arr.push(p);
        }
      }
      this.searchList = arr;
    });
  },
  methods: {
    open() {
        this.$confirm('亲，你还没有登陆了，要不要去登陆试试呢？', '登陆提示', {
          confirmButtonText: '去登陆',
          cancelButtonText: '不了，我是游客',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '欢迎登陆'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '欢迎浏览'
          });          
        })
    },
    Search(title) {
      if (title) {
        this.type = true;
      } else {
        return;
      }
      var newArr = [];
      this.searchList.forEach(ele => {
        if (ele.tname.indexOf(title) != -1) {
          newArr.push(ele);
        }
      });
      return newArr;
    },
    Focu() {
      this.ulshow = true;
    },
  }
};
</script>
<style lang="stylus" scoped>
.home 
  width 100%
  overflow hidden
  margin-top 60px
  .search
    width 100%
    height 100px
    h1
      width 150px
      height 60px
      margin-left 220px
      float left
      margin-top 34px
      img 
        width 200px
    .sea-con
      width: 616px;
      height: 38px;
      border: 1px solid #37ab40;
      margin: 34px 0 0 124px;
      background:url(../assets/images/search.svg)10px center no-repeat;
      background-size 25px 35px
      float left
      ul
        width 518px
        min-height 0px
        background #F2F6FC
        z-index 10
        position absolute 
        border 1px solid #aaaaaa
        border-top 0
        border-bottom 0
        margin-top 3px
        li
          width 478px
          height 50px
          border-bottom 1px solid #aaaaaa
          padding 10px 20px
          .block
            float left
          p
            font-size 12px
            color #888
            float left
            height 50px
            line-height 50px
            margin-left 20px
      .sea
        width: 450px;
        height: 34px;
        border: 0px;
        margin: 2px 0 0 36px;
        outline: none;
        font-size: 12px;
        color: #737272;
        border none 
        padding-left 20px
      .sea-btn
        width: 100px;
        height: 38px;
        background-color: #37ab40;
        border: 0px;
        font-size: 14px;
        color: #fff;
        cursor pointer
        float right 
    .cart
      width 200px
      height 40px
      border 1px solid #aaaaaa
      float left
      margin 34px 0 0 150px
      .cart-icon
        color #37ab40
        font-size 30px
        line-height 40px
        margin-left 10px 
        float left
      .text
        float left
        height 40px
        text-align center
        width 100px
        line-height 40px
        color #37ab40
      .cart-count
        display block
        width 40px
        height 40px
        background #ff8800
        float right 
        color #ffffff
        font-weight 600
        text-align center
        line-height 40px
        font-size 18px
 
</style>
