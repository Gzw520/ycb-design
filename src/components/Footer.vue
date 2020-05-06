<template>
  <div id="footer">
    <footer>
        <div>
            <p>地址：甘肃省天水市秦州区莲亭路60号</p>
            <p>电话：15809489478</p>
            <p>微信：gyy15809489478</p>
            <p>QQ：3425148669</p>
            <p>联系人：高老板</p>
            <p>联系人：杨老板</p>
        </div>
        <div class="code">
            <img src="../assets/images/code2.png" alt="">
        </div>
    </footer>
  </div>
</template>

<script>

  export default {
    data () {
      return {};
    },
  }

</script>
<style lang='stylus' scoped>
footer 
    height 100px
    width 100%
    margin-top 50px
    border-top 3px solid #37ab40
    div
        width 800px
        height 100px
        padding-top 20px
        float left
        margin-left 270px
        p
            float left
            width 400px
            height 30px
            color #777
            font-size 12px
    .code
        float left
        width 300px
        margin-left 40px
        img
            height 100px
            width 100px
            float left
            margin-left 30px
</style>