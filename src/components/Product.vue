<template>
  <div id="product">
    <article v-for="(item,index) in productList" :key="index">
      <header>
        <h1>{{item[0].title}}</h1>
            <h6 @click="more(index,item[0].tid)">更多介绍 >></h6>
      </header>
      <main>
          <aside>
              <img class="img_one" :src="item[0].img" alt="">
          </aside>
          <ul>
            <li v-for="(item,index) in item[0].cityimg" :key="index">
                <p class="name">{{item.city}}</p>
                <router-link :to="'/detail?id='+item.imgid">
                <img :src="item.imgcity" alt="" class="img_two" >
                </router-link>
                <span class="price"> 价格：￥ {{item.price}}元/斤</span>
            </li>
          </ul>
      </main>
    </article>
  </div>
</template>

<script>
import bus from '../bus'
import {indexData} from '../components/network/api'
export default {
  props: [""],
  data() {
    return {
        productList:'',
    };
  },

  components: {},

  computed: {},

  mounted() {
      indexData().then(res=>{
          this.productList=res.data.data
          // console.log(res.data.data);
      })
  },

  methods: {
      more(index,id){
        if(index==0){
            this.$router.push('/more?tid='+id)
            moreData(id).then(res=>{
            // console.log(res.data);
      })
        }else{
            this.$router.push('/tianshui?tid='+id)
        }
      }
  }
};
</script>
<style lang='stylus' scoped>
article 
    height 342px
    width 1200px
    margin 0 0px 0 200px
    header 
        width 100%
        height 40px
        border-bottom 3px solid #42ad46
        h1
            float left
            font-weight bold
            font-size 16px
            color #42ad46
            line-height 40px
        h6
            float right
            line-height 40px
            font-size 12px
            color #909399
            cursor pointer
            &:hover
                color orangered 
    main
        width 100%
        height 300px
        border-bottom 1px solid #dddddd
        aside
            width 200px
            height 300px
            float left
            .img_one
                width 100%
                height 100%
                cursor pointer
        ul
            float left
            li
                float left
                height 300px
                width 249px
                border-bottom 1px solid #eeeeee
                border-right 1px solid #eee
                cursor pointer
                &:hover
                    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
                p
                    width 100%
                    height 40px
                    line-height 40px
                    text-align center
                    color #666
                    font-size 14px
                span 
                    display block
                    width 100%
                    height 30px
                    text-align center
                    margin-top 35px
                .img_two
                    display: block;
                    width: 180px;
                    height: 180px;
                    margin: 0 auto;
                    &:hover
                        height 182px
                        width 182px
</style>