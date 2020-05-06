<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/Nav'
export default {
  data(){
    return {}
  },
  components:{
    Nav,
  },
}
</script>
<style lang="stylus">
@import "./assets/css/public.css"
</style>
