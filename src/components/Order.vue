<template>
  <div id="order">
    <div class="logo">
      <h1>
        <img src="../assets/images/logo.png" alt />
      </h1>
      <h1>
        <i class="el-icon-s-custom"></i>
      </h1>
    </div>
    <div class="list">
      <h3>收货地址</h3>
      <div class="city">
        <area-cascader type="text" :level="1" v-model="selected" :data="pcaa" placeholder="请选择地区"></area-cascader>
      </div>
      <div class="text">
        <el-input class="test" placeholder="详细地址" v-model="address" clearable></el-input>
      </div>
      <div class="text">
        <el-input class="test" placeholder="电话号码" v-model="tel" clearable></el-input>
      </div>
      <el-button type="danger" class="success" @click="Area">确认地址</el-button>
    </div>
    <div class="list">
      <h3>支付方式</h3>
      <el-checkbox-group v-model="checkedCities" :max="1">
        <el-checkbox v-for="city in cities" :label="city" :key="city" class="pay">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div class="list">
      <h3>商品列表</h3>
      <h4>
        <p>商品名称</p>
        <p>商品单位</p>
        <p>商品价格</p>
        <p>商品数量</p>
      </h4>
      <div class="shoplist" v-for="(shop,index) in list" :key="index">
        <div class="block" v-for="fit in fits" :key="fit">
          <el-image style="width: 80px; height: 80px;" :src="shop.img" :fit="fit"></el-image>
          <div class="name font">{{shop.city}}</div>
        </div>
        <div class="kg font">500g</div>
        <div class="pri font">{{shop.price}}元</div>
        <div class="num font">{{shop.num}}</div>
      </div>
    </div>
    <div class="list">
      <h3>总金额结算</h3>
      <div class="money">
        <h5>共{{num}}件商品</h5>
        <h5>商品金额：{{allPrice}}元</h5>
        <h5>运费：{{fast}}元</h5>
        <h5>实付款：{{allPrice+fast}}元</h5>
      </div>
    </div>
    <div class="topay">
      <el-button type="success" @click="dialogVisible = true">立即支付</el-button>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        @closed="closed"
        :before-close="handleClose"
      >
        <span>亲，你的订单信息是否真确？</span>
        <br />
        <span id="kd">
          收货地址：
          <b>{{info}}</b>
        </span>
        <br />
        <span id="adress">{{City}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </el-dialog>
    </div>
    <Footer />
  </div>
</template>

<script>
import { pca, pcaa } from "area-data";
import Footer from "../components/Footer";
import { cartData } from "../components/network/api";
import { mapGetters } from "vuex";
const cityOptions = ["货到付款", "微 信", "支付宝", "银行卡"];

export default {
  data() {
    return {
      address: "",
      tel: "",
      checkedCities: ["微 信"],
      cities: cityOptions,
      fits: ["cover"],
      dialogVisible: false,
      list: "",
      selected: [],
      pac: pca,
      pcaa: pcaa,
      input: "",
      num: 0,
      sumPrice: "",
      fast: 10,
      info: "* (收货地址不能为空)"
    };
  },

  components: {
    Footer
  },

  computed: {
    ...mapGetters(["User", "City"]),
    allPrice() {
      return this.sumPrice.reduce((prevPrice, nowPrice) => {
        return prevPrice + nowPrice.price * nowPrice.num;
      }, 0);
    }
  },

  mounted() {
    cartData(this.User[0].uid).then(res => {
      this.sumPrice = res.data;
      this.list = res.data;
      let cartNum = 0;
      for (let i of res.data) {
        cartNum += parseInt(i.num);
      }
      this.num = cartNum;
      if (cartNum > 10) {
        this.fast = (parseInt(cartNum) - 10) * 10;
      }
      if ((cartNum = 0)) {
        this.fast = 0;
      }
    });
  },

  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    closed() {
      this.$router.push("/pay");
    },
    Area() {
      this.selected.push(this.address, this.tel);
      this.$store.dispatch("Address", this.selected); //提交到vuex，单页面数据保存
    }
  }
};
</script>
<style lang='stylus' scoped>
span 
    color #F56C6C
#kd
    display block
    margin-top 20px
    color #303133
    font-size 16px
    font-weight 600
#adress
    margin-top 10px
    display block
    width 350px
    height 30px
    border 1px solid #777
    line-height 30px
    font-size 12px
    color #909399
    padding-left 15px
#order
    .logo
        height 100px
        width 100%
        margin-top 80px
        border-bottom 2px solid #37ab40
        h1
            width 300px
            height 100px
            margin-left 200px
            float left
            &:nth-of-type(2)
                margin-left 700px
                .el-icon-s-custom
                    color #67C23A
                    font-size 100px
            img 
                width 100%
                height 100%
                display block
    .list
        width 1050px
        min-height 100px
        background #F2F6FC
        border-top 3px solid #67C23A
        margin 50px 0 0 200px
        position relative
        h3
            position absolute 
            top -28px
            color #E6A23C
        .city
            width 230px
            height 80px
            padding-top 20px
            margin-left 40px
            float left
        .text
            float left
            margin-left 20px
            padding-top 20px
            height 32px
            .test
                width 300px
        .success
            margin 20px 20px 0 0
            float right
        .pay
            width 140px
            height 35px
            line-height 35px
            font-size 14px
            margin 30px 40px 0 20px
            border 1px solid #DCDFE6
            float left
            background url('../assets/images/pay.png') no-repeat 95px 0px
            &:nth-of-type(2)
                background url('../assets/images/pay.png') no-repeat 75px -36px
            &:nth-of-type(3)
                background url('../assets/images/pay.png') no-repeat 70px -72px
            &:nth-of-type(4)
                background url('../assets/images/pay.png') no-repeat 85px -108px
            .radio
                margin 0 30px 0 2px
        h4
            width 100%
            height 30px
            background #DCDFE6
            display flex
            justify-content space-around
            align-items center
            font-size 14px
            color #606266
        .shoplist
            display flex
            justify-content space-between
            align-items center
            margin 10px 0
            width 880px
            margin-left 38px
            border-bottom 1px solid #DCDFE6
            .font 
                color #606266
                font-size 12px
                text-align center
            .block
                display flex
                justify-content space-between
                align-items center
                .name
                    margin-left 15px
        .money
            width 300px
            height 100px
            float right
            margin-right 50px
            h5
                text-align right
                width 100%
                height 24px
                font-size 12px
                color #303133
                line-height 24px
                &:nth-of-type(3)
                    &:before
                        content ' (* 超出10件商品，一件一元，10件以内10元)'
                        margin-right 10px
                        color #F56C6C
    .topay
        width 98px
        height 50px
        margin 30px 0 0 1150px
b
    font-size 12px
    color #F56C6C
</style>