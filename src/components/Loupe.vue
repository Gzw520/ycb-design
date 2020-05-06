<template>
  <div id="loupe">
      <magnifier
      :boxSize="300"
      :minImgUrl="url"
      :maxImgUrl="url">
      </magnifier>
  </div>
</template>

<script>

import bus from '../bus'
  export default {
    props:[''],
    data () {
      return {
        url:'',
      };
    },
    mounted() {
      bus.$on('loupe',res=>{
        this.url=res
      })
    },
    methods: {},
  }

</script>