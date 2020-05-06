<template>
  <div id="volume">
    <div id="cake" ref="echarts"></div>
  </div>
</template>

<script>
import bus from "../bus";
import echarts from "echarts";
export default {
  props: {},
  data() {
    return {
      city: "",
      data: ""
    };
  },

  components: {},

  computed: {},

  mounted() {
    var myChart = echarts.init(document.getElementById("cake"));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      title: {
        text: "全市销量排行",
        subtext: "黄元帅",
        left: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: []
      },
      series: [
        {
          name: "销量",
          type: "pie",
          radius: "55%",
          center: ["50%", "60%"],
          data: [],
          //   [
          //     { value: 335, name: "直接访问" ,itemStyle: {color: '#9966ff'}},
          //     { value: 1548, name: "搜索引擎" ,itemStyle: {color: '#25E60B'}}
          //   ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    });
    var X = [];
    var Y = [];
    bus.$on("cake", data => {
      for (var item of data) {
        X.push(item);
        Y.push(item.name);
      }
      myChart.setOption({
        series: [
          {
            data: X
          }
        ],
        legend: {
          data: Y
        }
      });
    });
  },

  methods: {}
};
</script>
<style lang='stylus' scoped>
#cake {
  width: 600px;
  height: 400px;
}
</style>