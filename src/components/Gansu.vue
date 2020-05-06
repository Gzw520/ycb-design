<template>
 <div class="maps">
   <div id="main" style="width:800px; height:600px"></div>
 </div>
</template>
<script>
import "echarts/map/js/province/gansu.js";
import obj from "echarts/map/json/province/gansu.json";
export default {
 data() {
   return {
     listArr: [], //城市json
     max: "", //最大value值
     min: "" // 最小value值
   };
 },
 created() {
   this.getData();
 },
 mounted() {
   this.DrawMap();
 },
 methods: {
   getData() {
     // 获取城市名称数据
     if (obj) {
       let arr = obj.features;
       // 循环取出 城市名称和value值
       for (var j = 0; j < arr.length; j++) {
         this.max = arr[0].id;
         this.min = arr[0].id;
         if (arr[j].id > this.max) {
           this.max = arr[j].id;
         }
         if (arr[j].id < this.min) {
           this.min = arr[j].id;
         }
         this.listArr.push({
           name: arr[j].properties.name,
           value: arr[j].id
         });
       }
     }
   },
   DrawMap() {
     let _this = this;
     let myChart8 = this.$echarts.init(document.getElementById("main"));
    //  console.log(
    //    "最大value值",
    //    this.max,
    //    "\n",
    //    "最小value值",
    //    this.min,
    //    "\n",
    //    "城市数据",
    //    this.listArr
    //  );
     myChart8.setOption({
       visualMap: {
        show: true,
        x: "left",
        y: "center",
        splitList: [
          // 后续计算 区间
            {start: 500, end:600},
            {start: 400, end: 500},
            {start: 300, end: 400},
            {start: 200, end: 300},
            {start: 100, end: 200},
        ],
        color: ['#4F94CD', '#CD5C5C','#9C9C9C', '#85daef', '#458B74'],
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
           data: [
             {name:'天水市',value:'600'},
             {name:'陇南市',value:'500'}
           ]
         }
       ]
     });
   }
 }
};
</script>
<style scoped lang="stylus">
.maps
    padding-top 50px
    width 500px
    height 500px
    background pink
</style>
