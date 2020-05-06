<template>
  <div id="map">
    <div id="echarts">
        <div id="gansu" style="width:600px; height:400px"></div>
        <h1 class="des">{{list.des}}</h1>
    </div>
    <div class="vol">
        <Cake class="cake"/>
        <h2>{{list.vol}}</h2>
    </div>
    <Footer />
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/province/gansu.js";
import obj from "echarts/map/json/province/gansu.json";

import Cake from '../components/Cake'
import Footer from '../components/Footer'
import {moreData} from '../components/network/api'
import bus from '../bus'
export default {
  name: "",
  props: [""],
  data() {
    return {
       listArr: [], //城市json
        max: "", //最大value值
        min: "" ,// 最小value值
        list:'',
    };
  },

  components: {
      Cake,
      Footer,
  },

  computed: {},
   created() {
  //  this.getData();
 },
  mounted() {
    this.DrawMap();
  },

   methods: {
  //  getData() {
  //    // 获取城市名称数据
  //    if (obj) {
  //      let arr = obj.features;
  //      // 循环取出 城市名称和value值
  //      for (var j = 0; j < arr.length; j++) {
  //        this.max = arr[0].id;
  //        this.min = arr[0].id;
  //        if (arr[j].id > this.max) {
  //          this.max = arr[j].id;
  //        }
  //        if (arr[j].id < this.min) {
  //          this.min = arr[j].id;
  //        }
  //        this.listArr.push({
  //          name: arr[j].properties.name,
  //          value: arr[j].id
  //        });
  //      }
  //    }
  //  },
   DrawMap() {
     let _this = this;
     let myChart8 = this.$echarts.init(document.getElementById("gansu"));
     myChart8.setOption({
       title: {
        text: '',
        subtext: "",
        x: "left"
      },
       visualMap: {
        show: true,
        x: "left",
        y: "center",
        splitList: [
          // 后续计算 区间
            {start: 7000, end:8000},
            {start: 6000, end:7000},
            {start: 5000, end:6000},
            {start: 0, end:5000},
        ],
        color: ['#E60BDB', 'red','blue', 'red', 'red'],
       },
       tooltip: {
            trigger: 'item'
        },
       series: [
         { name:'产量',
           type: "map",
           map: "甘肃",
           itemStyle: {
             normal: { label: { show: true } },
             emphasis: { label: { show: true } },
             emphasis: {
               areaColor: "#67C23A" //鼠标进入时的颜色
             }
           },
           data:[]
         }
       ]
     });
      var data=[];
    moreData(this.$route.query.tid).then(res=>{
      bus.$emit('cake',res.data.citysale)
      for(var item of res.data.cityyield){
        data.push(item)
      }
      this.list=res.data
      myChart8.setOption({
            series: [{
                data:data
            }]
        });
    })
   }
 }
};
</script>
<style lang='stylus' scoped>
#map
    height 100%
#echarts
    padding-top 50px
    width 100%
    height 450px
    #gansu
        width 600px
        height 400px
        margin-left 50px
        float left
    .des
        float left
        height 400px
        width 800px
        font-size 12px
        line-height 21px
        text-indent 2em
        color #909399
        border 1.5px solid #ebeef5
        padding 15px
.vol
    width 100%
    height 450px
    .cake
        float left
        margin 50px 0 0 0px
    h2
        float left
        min-height 200px
        width 700px
        margin-left 70px
        margin-top 130px
        padding 15px
        font-size 12px
        line-height 21px
        text-indent 2em
        color #909399
        border 1.5px solid #ebeef5
</style>