<template>
  <div id="cart">
    <div class="logo">
      <h1>
        <img src="../assets/images/logo.png" alt />
      </h1>
      <h1>
        <img src="../assets/images/cart.png" alt />
      </h1>
    </div>
    <div v-if="cartshow">
      <div class="cart-con">
        <h2>
          <p class="table-header">商品名称</p>
          <p class="table-header">商品单位</p>
          <p class="table-header">商品价格</p>
          <p class="table-header">数 量</p>
          <p class="table-header">操 作</p>
        </h2>
        <div class="cart-list" v-for="(item,index) of list" :key="index">
          <div class="img-con" v-for="fit in fits" :key="fit">
            <el-image style="width: 100px; height: 100px" :src="list[index].img" :fit="fit"></el-image>
          </div>
          <div class="price">
            <h3>{{list[index].city}}</h3>
            <h3>{{list[index].price}}元/500g</h3>
          </div>
          <div class="unit">500g</div>
          <div class="unit">{{list[index].price}}元</div>
          <div class="unit">
            <div class="num">
              <button class="add" @click="add(index,list[index].imgid)">+</button>
              <input type="text" v-model="list[index].num" class="num-con" />
              <button class="dec" @click="dec(index,list[index].imgid)">-</button>
            </div>
          </div>
          <div class="unit">
            <el-button :plain="true" @click="open(list[index].imgid,index)" size="mini" round>删 除</el-button>
          </div>
        </div>
      </div>
      <div class="cart-foot">
        <div class="total">
          <h4>
            合计（不含运费）：
            <span>￥ {{allPrice}}元</span>
          </h4>
          <h4>
            总共
            <i>{{allnum}}</i>件商品
          </h4>
        </div>
        <div class="to-pay">
          <el-popconfirm
            confirmButtonText="正确"
            cancelButtonText="错误"
            icon="el-icon-info"
            iconColor="red"
            title="亲，下单之前仔细核对你的购物车数量是否正确？"
            @onConfirm="onConfirm"
          >
            <el-button slot="reference" type="success">去结算</el-button>
          </el-popconfirm>
        </div>
      </div>
    </div>
    <div class="lodding" v-else>
      <Lodding />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/Footer";
import Lodding from "../components/Lodding";
import { mapGetters } from "vuex";
import { cartData, cartDel, cartUpdata } from "../components/network/api";
export default {
  data() {
    return {
      checked: true,
      fits: ["fill"],
      cartshow: true,
      list: "",
      message: "",
      allnum: 0
    };
  },
  components: {
    Footer,
    Lodding
  },
  computed: {
    ...mapGetters(["User"]),
    allPrice() {
      return this.message.reduce((prevPrice, nowPrice) => {
        return prevPrice + nowPrice.price * nowPrice.num;
      }, 0);
    }
  },
  mounted() {
    if (this.User.length == 0) {
      this.cartshow = false;
    }
    cartData(this.User[0].uid).then(res => {
      console.log(res.data);
      let cartNum = 0;
      for (let i of res.data) {
        cartNum += parseInt(i.num);
      }
      this.allnum = cartNum;
      this.message = res.data;
      this.list = res.data;
      if (res.data.length == 0) {
        this.cartshow = false;
      }
    });
  },
  methods: {
    open(id, index) {
      cartDel(this.User[0].uid, id).then(res => {
        if (res.data.state == 0) {
          this.$message("删除成功！");
          this.list.splice(index, 1);
          if (this.list.length == 0) {
            this.cartshow = false;
          }
        }
      });
    },
    add(index, id) {
      this.list[index].num++;
      this.allnum++;
      cartUpdata(id, this.User[0].uid, this.list[index].num);
    },
    dec(index, id) {
      if (this.list[index].num != 1) {
        this.list[index].num--;
        this.allnum--;
      }
      cartUpdata(id, this.User[0].uid, this.list[index].num);
    },
    onConfirm() {
      this.$router.push("/order");
    }
  }
};
</script>
<style lang='stylus' scoped>
.logo
    height 100px
    width 100%
    padding-top 50px
    border-bottom 2px solid #37ab40
    h1
        width 300px
        height 100px
        margin-left 200px
        float left
        &:nth-of-type(2)
            margin-left 700px
            img 
                width 100px
                height 100px
        img 
            width 100%
            height 100%
            display block
.cart-con
    min-height 275px
    width 1050px
    margin 50px auto 0
    border 1px solid #DCDFE6
    border-bottom none 
    h2
        height 30px
        width 100%
        background #DCDFE6
        .table-header
            float left
            width 210px
            line-height 30px
            text-align center
            color #606266
            font-size 12px
    .cart-list
        width 100%
        height 153px
        border-bottom 1px solid #C0C4CC
        background #F2F6FC
        .img-con
            float left
            margin-top 30px
            margin-left 30px
        .price
            height 100px
            width 80px
            float left
            padding-top 50px
            h3
                font-size 12px
                text-align center
                margin-top 15px
        .unit
            height 100%
            width 210px
            text-align center
            line-height 154px
            float left
            font-size 12px
            color #909399
            .num
                display flex
                width 130px
                height 30px
                justify-content space-between
                margin-top 60px
                margin-left 20px
                border 1px solid #DCDFE6
                button 
                    background #DCDFE6
                    width 40px
                    outline none
                    border none 
                    color #aaa
                    font-size 28px
                    text-align center
                    line-height 10px
                    cursor pointer
                .num-con
                    width 20px
                    flex 1
                    background #F2F6FC
                    text-align center
.cart-foot
    width 1050px
    height 100px
    margin 0 auto
    border 1px solid #DCDFE6
    .foot-check
        margin 40px 0 0 10px
        float left
    .total
        float left
        margin-left 400px
        height 100%
        h4
            margin-top 20px
            font-size 14px
            span 
                color red
    .to-pay
        float right
        margin-right 120px
        margin-top 30px
i 
    color red
    font-weight bold
</style>