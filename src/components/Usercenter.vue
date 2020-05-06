<template>
  <div id="city">
    <area-cascader type='text' :level='1' v-model="selected" :data="pcaa" placeholder="请选择地区"></area-cascader>
  </div>
</template>

<script>
// import VDistpicker from 'v-distpicker'
import { pca, pcaa } from 'area-data';
  export default {
    name:'',
    props:[''],
    data () {
      return {
        selected:[],
        pac:pca,
        pcaa:pcaa,
      };
    },

    components: {
      // VDistpicker
    },

    computed: {},


    mounted() {},

    methods: {
      
    },
  }

</script>
<style lang='stylus' scoped>
#city
  padding-top 50px
</style>