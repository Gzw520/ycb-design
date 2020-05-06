<template>
  <div id="map">
    <div id="echarts">
        <div id="myCharts" ref="myCharts" style="width:600px; height:400px"></div>
        <h1 class="des">{{list.des}}</h1>
    </div>
    <div class="vol">
        <Volume class="volume"/>
        <h2>{{list.vol}}</h2>
    </div>
    <Footer />
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china.js";

import Volume from '../components/Volume'
import Footer from '../components/Footer'
import {moreData} from '../components/network/api'
import bus from '../bus'
export default {
  name: "",
  props: [""],
  data() {
    return {
      list:'',
    };
  },

  components: {
      Volume,
      Footer,
  },

  computed: {},
  mounted() {
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    var X=[];
    moreData(this.$route.query.tid).then(res=>{
      // console.log(res.data);
      X.push(res.data.province)
      this.list=res.data
      bus.$emit('volume',res.data.citysale)
    })
    let options = {
      backgroundColor: "#FFFFFF",
      title: {
        text: "全国花牛苹果主要产出基地",
        subtext: "",
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },
    //   toolbox: {
    //         show: true,
    //         orient: 'vertical',
    //         left: 'right',
    //         top: 'center',
    //         feature: {
    //             dataView: {readOnly: false},
    //             restore: {},
    //             saveAsImage: {}
    //         }
    //   },
      visualMap: {
        min: 800,
        max: 50000,
        text: ['High', 'Low'],
        realtime: false,
        calculable: true,
        inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
        },
        // 左侧小导航图标
        // show: true,
        // x: "left",
        // y: "center",
        // splitList: [
        //   // 后续计算 区间
        //     {start: 50000, end:60000},
        //     {start: 40000, end: 50000},
        //     {start: 30000, end: 40000},
        //     {start: 20000, end: 30000},
        //     {start: 10000, end: 20000},
        // ],
        // color: ['#4F94CD', '#CD5C5C','orangered', '#85daef', '#458B74'],
      },
      series: [
        {
          // 配置属性
          name: "产出量",
          type: "map",
          mapType: "china",
          roam: false,     //解决鼠标滚动地图放大缩小
          label: {
            normal: {
              show: true // 省份名称
            },
            emphasis: {
              show: false
            }
          },
          data: [
            {name: '甘肃',value: 40000 },

          ]
        }
      ]
    };

    myCharts.setOption(options);
  },

  methods: {}
};
</script>
<style lang='stylus' scoped>
#map
    height 100%
#echarts
    padding-top 50px
    width 100%
    height 450px
    #myCharts
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
    .volume
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