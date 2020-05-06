<template>
  <div id="volume">
    <div id="main" ref="echarts"></div>
  </div>
</template>

<script>
import bus from "../bus";
import echarts from "echarts";
export default {
  name: "",
  props: [""],
  data() {
    return {
      city: "",
      data: "",
    };
  },

  components: {},

  computed: {},

  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    // 显示标题，图例和空的坐标轴
    myChart.setOption({
      title: {
        text: "各区销量排行/kg"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
      xAxis: {
        data: []
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: []
        }
      ]
    });
    var X = [];
    var Y = [];
    bus.$on("volume", data => {
      for (var item of data) {
        X.push(item.name);
        Y.push(item.value);
      }
      myChart.setOption({
            xAxis: {
                data: X
            },
            series: [{
                name: '销量',
                data:Y
            }]
        });
    });
  },

  methods: {}
};
</script>
<style lang='stylus' scoped>
#main {
  width: 600px;
  height: 400px;
}
</style>